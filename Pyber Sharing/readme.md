

```python
#Dependencies
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
```


```python
#import data
file1 = "raw_data/city_data.csv"
file2 = "raw_data/ride_data.csv"
city_df = pd.read_csv(file1)
ride_df = pd.read_csv(file2)
city_df.head()
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>city</th>
      <th>driver_count</th>
      <th>type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Kelseyland</td>
      <td>63</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Nguyenbury</td>
      <td>8</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>2</th>
      <td>East Douglas</td>
      <td>12</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>3</th>
      <td>West Dawnfurt</td>
      <td>34</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Rodriguezburgh</td>
      <td>52</td>
      <td>Urban</td>
    </tr>
  </tbody>
</table>
</div>




```python
# merge data
master_df=pd.merge(city_df,ride_df, on='city',how='outer')
master_df.head()
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>city</th>
      <th>driver_count</th>
      <th>type</th>
      <th>date</th>
      <th>fare</th>
      <th>ride_id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Kelseyland</td>
      <td>63</td>
      <td>Urban</td>
      <td>2016-08-19 04:27:52</td>
      <td>5.51</td>
      <td>6246006544795</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Kelseyland</td>
      <td>63</td>
      <td>Urban</td>
      <td>2016-04-17 06:59:50</td>
      <td>5.54</td>
      <td>7466473222333</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Kelseyland</td>
      <td>63</td>
      <td>Urban</td>
      <td>2016-05-04 15:06:07</td>
      <td>30.54</td>
      <td>2140501382736</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Kelseyland</td>
      <td>63</td>
      <td>Urban</td>
      <td>2016-01-25 20:44:56</td>
      <td>12.08</td>
      <td>1896987891309</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Kelseyland</td>
      <td>63</td>
      <td>Urban</td>
      <td>2016-08-09 18:19:47</td>
      <td>17.91</td>
      <td>8784212854829</td>
    </tr>
  </tbody>
</table>
</div>




```python
average_fare = master_df.groupby(['city'])['fare'].mean()
total_rides = master_df.groupby(['city'])['fare'].count()
total_drivers = master_df.groupby(['city'])['driver_count'].sum()
city_type = master_df.groupby(['city'])['type'].first()
city_type.unique()
```




    array(['Urban', 'Suburban', 'Rural'], dtype=object)




```python
plotting_df = pd.DataFrame({'AverageFares': average_fare,'TotalRides': total_rides, 
                        'TotalDrivers': total_drivers,'CityType': city_type})
plotting_df = plotting_df.reset_index()
plotting_df.head()

```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>city</th>
      <th>AverageFares</th>
      <th>CityType</th>
      <th>TotalDrivers</th>
      <th>TotalRides</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Alvarezhaven</td>
      <td>23.928710</td>
      <td>Urban</td>
      <td>651</td>
      <td>31</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Alyssaberg</td>
      <td>20.609615</td>
      <td>Urban</td>
      <td>1742</td>
      <td>26</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Anitamouth</td>
      <td>37.315556</td>
      <td>Suburban</td>
      <td>144</td>
      <td>9</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Antoniomouth</td>
      <td>23.625000</td>
      <td>Urban</td>
      <td>462</td>
      <td>22</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Aprilchester</td>
      <td>21.981579</td>
      <td>Urban</td>
      <td>931</td>
      <td>19</td>
    </tr>
  </tbody>
</table>
</div>



# Bubble Chart


```python
#Create DF based on Type
urban = plotting_df.loc[plotting_df['CityType']=="Urban",:]
suburban = plotting_df.loc[plotting_df['CityType']=="Suburban",:]
rural = plotting_df.loc[plotting_df['CityType']=="Rural",:]
urban.head()
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>city</th>
      <th>AverageFares</th>
      <th>CityType</th>
      <th>TotalDrivers</th>
      <th>TotalRides</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Alvarezhaven</td>
      <td>23.928710</td>
      <td>Urban</td>
      <td>651</td>
      <td>31</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Alyssaberg</td>
      <td>20.609615</td>
      <td>Urban</td>
      <td>1742</td>
      <td>26</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Antoniomouth</td>
      <td>23.625000</td>
      <td>Urban</td>
      <td>462</td>
      <td>22</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Aprilchester</td>
      <td>21.981579</td>
      <td>Urban</td>
      <td>931</td>
      <td>19</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Arnoldview</td>
      <td>25.106452</td>
      <td>Urban</td>
      <td>1271</td>
      <td>31</td>
    </tr>
  </tbody>
</table>
</div>




```python
plt.figure(figsize=(8,7))
urban_plt = plt.scatter(urban.TotalRides,urban.AverageFares ,c="lightcoral",label="Urban",
                        s=(urban.TotalDrivers), alpha = 0.6, edgecolor = "black", linewidths = .6)

suburban_plt = plt.scatter(suburban.TotalRides,suburban.AverageFares ,c="lightskyblue",label="suburban",
                        s=(suburban.TotalDrivers), alpha = 0.6, edgecolor = "black", linewidths = .6)

rural_plt = plt.scatter(rural.TotalRides,rural.AverageFares ,c="gold",label="rural",
                        s=(rural.TotalDrivers), alpha = 0.6, edgecolor = "black", linewidths = .6)

plt.ylim(0, 60)
plt.xlim(0, 45)

lgnd = plt.legend(handles=[urban_plt, suburban_plt, rural_plt], scatterpoints=1, fontsize=16)
lgnd.legendHandles[0]._sizes = [180]
lgnd.legendHandles[1]._sizes = [180]
lgnd.legendHandles[2]._sizes = [180]
plt.title("Average Fares Vs. Total Rides by City Type")
plt.xlabel("Total Rides by city")
plt.ylabel("Average Fare")
plt.grid(alpha=.15)
plt.show()

```

    The history saving thread hit an unexpected error (OperationalError('disk I/O error',)).History will not be written to the database.
    


![png](output_7_1.png)


# Pie Charts - % of Total Fares by City Type


```python
citytype_fares = master_df.groupby(['type'])['fare'].sum()
total_fares = master_df['fare'].sum()
citytype_fares_pct = citytype_fares/total_fares
citytype_fares_pct
```




    type
    Rural       0.065798
    Suburban    0.314458
    Urban       0.619745
    Name: fare, dtype: float64




```python
citytype_labels = ['Rural','Suburban','Urban']
plt.pie(citytype_fares_pct,labels=citytype_labels,explode = (.2,0,0),colors = ["gold","lightskyblue",'lightcoral'],
        autopct='%.f%%', startangle = 300, shadow = True)
plt.title("Total Fares by City Type")
plt.show()

```


![png](output_10_0.png)


# Pie Chart - % of Total Rides by City Type


```python
citytype_rides=master_df.groupby(['type'])['city'].count()
total_rides=master_df.city.count()
citytype_rides_pct = citytype_rides/total_rides
citytype_rides_pct

```




    type
    Rural       0.051932
    Suburban    0.272954
    Urban       0.675114
    Name: city, dtype: float64




```python
citytype_labels = ['Rural','Suburban','Urban']
plt.pie(citytype_rides_pct,labels=citytype_labels,explode = (.2,0,0),colors = ["gold","lightskyblue",'lightcoral'],
        autopct='%.f%%', startangle = 300, shadow = True)
plt.title("Total Rides by City Type")
plt.show()

```


![png](output_13_0.png)


# Pie Chart - % of Total Drivers by City Type


```python
citytype_drivers=city_df.groupby(['type'])['driver_count'].sum()
total_drivers=city_df.driver_count.sum()
citytype_drivers_pct = citytype_drivers/total_drivers
citytype_drivers_pct
```




    type
    Rural       0.031054
    Suburban    0.190505
    Urban       0.778441
    Name: driver_count, dtype: float64




```python
citytype_labels = ['Rural','Suburban','Urban']
plt.pie(citytype_drivers_pct,labels=citytype_labels,explode = (.2,0,0),colors = ["gold","lightskyblue",'lightcoral'],
        autopct='%.f%%', startangle = 300, shadow = True)
plt.title("Total Drivers by City Type")
plt.show()

```


![png](output_16_0.png)

