import os
import csv

def getPercentages(row):
    wins = int(row[1])
    losses = int(row[2])
    draws = int(row[3])
    fights = wins + losses + draws
    winspct = wins / fights * 100
    losspct = losses / fights * 100
    drawpct = draws / fights *100

    If winspct > 50: 
        typeofwresteler = "superstar"
    else:
        typeofwresteler = "jobber"

    print("for"+ nameToCheck +":")
    print("total fights fought in are" + str(fights) +", ")
    print("career winning percentage is"+ str(winspct)+", ")
    print("career losing percentage is"+ str(losspct)+", ") 
    print("career draw percentage is"+str(drawpct)+", ")
    print("and he is a " + typeofwresteler)

    

# Path to collect data from the Resources folder

# Define the function and have it accept the 'wrestlerData' as its sole parameter

    # Find the total number of matches wrestled

    # Find the percentage of matches won

    # Find the percentage of matches lost

    # Find the percentage of matches drawn

    # Print out the wrestler's name and their percentage stats

# Read in the CSV file
with open("WWE-Data-2016.csv", 'r') as csvfile:
    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')
    # Prompt the user for what wrestler they would like to search for
    nameToCheck = input("What wrestler do you want to look for? ")
    # Loop through the data
    for row in csvreader:
        # If the wrestler's name in a row is equal to that which the user input, run the 'getPercentages()' function
        if(nameToCheck == row[0]):
            getPercentages(row)
       