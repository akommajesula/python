// Mapbox API
var mapbox = "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ.T6YbdDixkOBWH_k9GbS8JQ";

// Creating map object
var myMap = L.map("map", {
  center: [40.73, -73.98],
  zoom: 13
});

// Adding tile layer to the map
L.tileLayer(mapbox).addTo(myMap);

//var latitude=[40.7408681,40.74565556,40.73036944,40.74059167,40.75873611];
//var longitude=[-73.9879841,-74.00546389,-73.98403889,-73.99808611,-73.98901389];
//var restaurant_name=["Shake Shack","Cookshop","SMAC","Cafeteria","Shake Shack"];
//var address=["Madison Square Park, 23rd & Madison, New York 10010", "156 10th Avenue, New York 10011","197 First Avenue, New York 10003","119 7th Avenue, New York 10011","691 8th Avenue, New York 10036"]

  // Creating a new marker cluster group
//  var markers = L.markerClusterGroup();

  // Loop through our data...
//  for (var i = 0; i < latitude.length; i++) {


      // Add a new marker to the cluster group and bind a pop-up
//     markers.addLayer(L.marker([latitude[i], longitude[i]])
//        .bindPopup(restaurant_name[i] + "<hr>" + address[i]));

//  }


var zomato_url = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=";
var cuisine = "1";
var zomato_key="&apikey=8b5af15b6d0dbad77cfa61ee84694638";

// Assembling API query URL
var url = zomato_url + cuisine+ zomato_key;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers = L.markerClusterGroup();
  console.log(response.restaurants.length);
  //console.log("restaurant length "+string(response.restaurants.length));

  // Loop through our data...
  for (var i = 0; i < response.restaurants.length; i++) {
    // set the data location property to a variable
    var restaurant = response.restaurants[i].restaurant;
console.log(restaurant);
    // If the data has a location property...
    if (restaurant) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([restaurant.location.latitude, restaurant.location.longitude])
        .bindPopup(restaurant.name + "<hr>" + restaurant.location.address+ "<hr>" + restaurant.cuisines + "<hr>" + "Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + "Zomato reviews url: "+ restaurant.url));
    }

  }


  // Add our marker cluster layer to the map
  myMap.addLayer(markers);
});