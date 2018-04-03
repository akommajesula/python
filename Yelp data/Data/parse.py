# -*- coding: utf-8 -*-
"""
Created on Sat Mar 24 22:59:53 2018

@author: akommaje
"""
import json


os.chdir('H:/learnpython/python/Yelp data')
file = 'newyelp.json'
file2='test.json'

with open(file2, 'r') as handle:
    parsed = json.load(handle)

