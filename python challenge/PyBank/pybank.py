import os
import csv

#Insert file location here
file1 = 'raw_data/budget_data_1.csv'


highest = 0
lowest = 100000000000000
totalsum = 0
averagemonth = 0
rowcount = 0
i = 0
previous = 0
current = 0
running = 0

with open(file1, newline="") as data:
	csvreader = csv.reader(data, delimiter=",")
	
	# Skip header line
	next(csvreader, None)
	
	for row in csvreader:
	
		if int(row[1]) >= highest:
			highest = int(row[1])
			highname = str(row[0])
	
		if int(row[1])	 <= lowest:
			lowest = int(row[1])
			lowname = str(row[0])
	
		totalsum = int(totalsum) + int(row[1])
		rowcount = rowcount + 1
		
		#While loop to find the monthly change
		while i <= rowcount-2:
			previous = current
			current = int(row[1])
			running = running + (current - previous)
			i = i + 1

		averagemonth = running / rowcount

print("Financial Analysis")
print("------------------------")
print("Total Months: " + str(rowcount))
print("Total Revenue: $" + str(totalsum))
print("Average Revenue Change: $" + str(round(averagemonth,2)))
print("Greatest Increase in Revenue: $" + str(highest) + " on " + highname)
print("Greatest Decreased in Revenue: $" + str(lowest) + " on " + lowname)