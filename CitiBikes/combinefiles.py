# -*- coding: utf-8 -*-
"""
Created on Tue Apr 17 19:23:44 2018

@author: akommaje
"""

import csv
import pandas as pd
import os
import shutil
import glob

os.chdir("H:/learnpython/python/CitiBikes")

csvfiles = glob.glob('*.csv')
wf = csv.writer('H:/learnpython/python/CitiBikes/output.vsv','wb')
for files in csvfiles:
    #print files
    rd = csv.reader(open(files,'r'))
    rd.next()
    for row in rd:
        wf.writer(row)

