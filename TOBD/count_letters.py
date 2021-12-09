from collections import Counter

def count_letters(file):
    with open(file) as fp:
        text = fp.read().lower()
    return Counter(text)

count_letters("data2\Dostoevskiy Fedor. Prestuplenie i nakazanie - BooksCafe.Net.txt")
