import csv, sqlite3

con = sqlite3.connect("reviews_sample.csv") # change to 'sqlite:///your_filename.db'
cur = con.cursor()
 # use your column names here

with open('reviews_sample.csv','r') as fin: # `with` statement available in 2.5+
    # csv.DictReader uses first line in file for column headings by default
    dr = csv.DictReader(fin) # comma is default delimiter
    to_db = [(i[""], i['user_id'], i['recipe_id'], i['date'], i['rating'],i['review']) for i in dr]
    print(to_db)
