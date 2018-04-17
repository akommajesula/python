# -*- coding: utf-8 -*-
"""
Created on Mon Apr  9 22:25:02 2018

@author: akommaje
"""

import pandas as pd
import glob
import os

def concaten (indir = "H:/learnpython/python/CitiBikes" , outfile = "H:/learnpython/python/CitiBikes/combinedfile.csv"):
 
    os.chdir(indir)
    filelist = glob.glob("*.csv")
    results = []
    columns = ['tripduration','starttime','stoptime','start station id','start station name',
               'start station latitude','start station longitude','end station id',
               'end station name','end station latitude','end station longitude','bikeid',
               'usertype','birth year','gender']
    for filenames in filelist:
        print(filename)
        df=pd.read_csv(filename,header=none)
        results.append(df)
    concatDf=pd.concat(results,axis=0)
    concatDf.columns=columns
    concatDf.to_csv(outfile, index=None)

 

