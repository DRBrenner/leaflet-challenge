# Leaflet Homework - Visualization using API call and Heat Map

## Purpose

The purpose of this homework assignment was to practice more with APIs, heat maps (using Leaflet and MapBox), and web design.  The assignment is described in the "Assignment Details" section below.

## Tools Used

JavaScript, Leaflet, Mapbox, CSS, HTML, API

## To View

This is an interactive heat map that is updated with an API call.  For my protection, I have my Mapbox API key stored in a separate file that I included in my .gitignore file.  To view the visualization:
   1. Obtain or retrieve an API Key from Mapbox
   2. Clone the respository
   3. Create a new JavaScript file in the Leaflet-Step-1/static/js folder called "config.js"
   4. Enter the following in the config.js file and save it:
   ```javascript
   const API_KEY = "YOUR API Key goes here";
   ```
   5. Open the index.html file in your browser

I have included a screenshot of the heat map below.  It is not current nor interactive; however, I took the screenshot to show the 'on-click' details functionality.

![screenshot](Leaflet-Step-1/Images/LeafletHeatMap.png)


## Assignment Details

![USGSLogo](Leaflet-Step-1/Images/1-Logo.png)

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. I am helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

1. **Obtain my data set**

   Select a jsonified dataset from the USGS website [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to pull for the visualization.


2. **Import & Visualize the Data**

   Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

   * Data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

   * Popups that provide additional information about the earthquake when a marker is clicked.

   * Legend provides context for my map data.
