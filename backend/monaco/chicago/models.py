from selenium import  webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import pandas as pd
from icecream import ic
import re

class Chicago():
    rank = []
    cafe_name = []
    food = []
    cafe_add = []
    url_add = []
    url_fix = []
    url = 'https://www.chicagomag.com/Chicago-Magazine/November-2012/Best-Sandwiches-Chicago/'
    driver_path = 'C:\Program Files\Google\Chrome\chromedriver'


    def scrap(self):
        driver =webdriver.Chrome(self.driver_path)
        driver.get(self.url)
        soup = BeautifulSoup(driver.page_source, 'lxml')
        all_td = soup.find_all('div','sammy')
        for item in all_td:
            self.rank.append(item.find(class_='sammyRank').text)
            temp =item.find(class_='sammyListing').text
            self.cafe_name.append(re.split(('\n'), temp)[1])
            self.food.append(re.split(('\n'), temp)[0])
            self.url_add.append(item.find('a')['href'])

        ic(self.url_add)

        for acc in self.url_add:
            self.url_fix.append(acc.split('November-2012')[1])

        ic(self.url_fix)
        for i in self.url_fix:
            driver.get('https://www.chicagomag.com/Chicago-Magazine/November-2012'+i)





ic(Chicago.scrap(Chicago))


