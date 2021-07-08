# import requests
import requests
from bs4 import BeautifulSoup
import pprint

# songtitle = ''

URL = 'https://genius.com/Ed-sheeran-shape-of-you-lyrics'
page = requests.get(URL)

print(URL)

pagecontent = pprint.PrettyPrinter(indent=3)
# pagecontent.pprint(page.content)

finalcontent = BeautifulSoup(page.content,'html.parser')


lyricsfound = finalcontent.find("div",class_='lyrics')

print(lyricsfound.text)

# print(URL)