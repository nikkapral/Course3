import os, csv, sys
import sqlite3, glob

def define_field(s):
    try:
        int(s)
        return 'integer'
    except ValueError:
        try:
            float(s)
            return 'real'
        except:
            return 'text'

def create_sqlite_db(db='data\\database.sqlite', file_pattern=''):
    conn = sqlite3.connect(db)
    conn.text_factory = str #Позволяет хранить данные в кодировке UTF-8

    c = conn.cursor()

    #Обойти каталог и обработать все файлы .csv которые подходят для построения БД
    target_files = glob.glob(file_pattern)
    print('Создание таблицы {0} в {1} из файл(ов): {2}'.format(len(target_files), db, ','.join(target_files)))

    for k, csvfile in enumerate(target_files):
        #Удалить путь и расширение и использовать остальное как имя таблицы
        tablename = os.path.splitext(os.path.basename(csvfile))[0]

        with open(csvfile,'r') as f:
            reader = csv.reader(f)

            f.seek(0)
            for n,row in enumerate(reader):
                if n == 11:
                    types = map(define_field,row)
                else:
                    if n > 11:
                        break

            f.seek(0)
            for n, row in enumerate(reader):
                if n == 0:
                    sql = "DROP TABLE IF EXISTS %s" % tablename
                    c.execute(sql)
                    sql = "CREATE TABLE %s (%s)" % (tablename, ", ".join(["%s %s" % (col,ct) for col,ct in zip(row,types)]))
                    print('{0}) {1}'.format(k+1,sql))
                    c.execute(sql)

                    #Создание индексов для ускоренных соединений на длинных строках
                    for column in row:
                        if column.endswith("_ID_hash"):
                            index = "%s__%s" % (tablename, column)
                            sql = "CREATE INDEX %s on %s (%s)" % (index, tablename, column)
                            c.execute(sql)
                    intersql = "INSERT INTO %s VALUES (%s)" % (tablename, ", ".join(["?" for column in row]))
                    rowlen = len(row)
                else:
                    #Поднять ошибку, если есть строки с неправильным числом полей
                    if len(row) == rowlen:
                        c.execute(intersql, row)
                    else:
                        print("Ошибка в строке (0) в файле {1}".format(n, csvfile))
                        raise ValueError("Проблема в строке {0}".format(n))
            conn.commit()
            print('* Вставлено {0} строк'.format(n))
    c.close()
    conn.close

create_sqlite_db(db='data\\bikesharing.sqlite', file_pattern='data\\bikesharing\\*.csv')