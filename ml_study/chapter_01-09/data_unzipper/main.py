import urllib.request
import requests, io, os
import numpy as np
import tarfile, zipfile, gzip
from io import StringIO

def unzip_from_UCI(UCI_url, dest=""):
    """
    Скачивает и распаковывает наборы данных из UCI в формате zip
    """

    response = requests.get(UCI_url)
    compressed_file = io.BytesIO(response.content)
    z = zipfile.ZipFile(compressed_file)
    print(u'Извлечение в {0}'.format(os.getcwd() + '\\'+dest))
    for name in z.namelist():
        if '.csv' in name:
            print(u'\tраспакован {0}'.format(name))
            z.extract(name, path=os.getcwd()+'\\'+dest)

    def gzip_form_UCI(UCI_url, dest=""):
        """
        Скачивает и распаковывает наборы данных из UCI в формате gzip
        """
        response = urllib.request.urlopen(UCI_url)
        compressed_file = io.BytesIO(response.read())
        decompressed_file = gzip.GzipFile(fileobj=compressed_file)
        filename = UCI_url.split('/')[-1][:-3]
        with open(os.getcwd().decode('cp1251')+'\\'+filename,'wb') as outfile:
            outfile.write(decompressed_file.read())
        print(u'Файл {0} разархивирован'.format(filename))

    def targzip_from_UCI(UCI_url, dest="."):
        """
        Скачивает и распаковывает наборы данных из UCI в формате tar.gz
        """
        response = urllib.request.urlopen(UCI_url)
        compressed_file = StringIO(response.read)
        tar = tarfile.open(mode='r:gz', fileobj=compressed_file)
        tar.extractall(path=dest)
        datasets = tar.getnames()
        for dataset in datasets:
            size = os.path.getsize(dest+'\\'+dataset)
            print(u"Файл {0} состовляет {1} байт".format(dataset,size))
        tar.close()

    def load_matrix(UCI_url):
        """
        Скачивает наборы данных из UCI в матричной форме
        """

        return np.loadtxt(urllib.request.urlopen(UCI_url))

UCI_url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/00275/Bike-Sharing-Dataset.zip'
unzip_from_UCI(UCI_url,dest='data\\bikesharing')