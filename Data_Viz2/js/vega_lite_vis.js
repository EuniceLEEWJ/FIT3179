var vg_1 = "Map.json";                // Choropleth map
var vg_2 = "heatmap.json";            // Heatmap
var vg_3 = "malaysia_map.json";       // Mortality trends
var vg_4 = "stacked_bar_chart.json";  // Stacked bar chart
var vg_5 = "donut_chart.json";        // Donut chart
var vg_6 = "stacked_area_chart.json"; // Stacked area chart

// Embed each visualization
vegaEmbed('#choropleth_map', vg_1)
    .then(function(result) {
        console.log("Choropleth map loaded successfully");
    })
    .catch(console.error);

vegaEmbed('#heatmap', vg_2)
    .then(function(result) {
        console.log("Heatmap loaded successfully");
    })
    .catch(console.error);

vegaEmbed('#malaysia_map', vg_3)
    .then(function(result) {
        console.log("Mortality trends loaded successfully");
    })
    .catch(console.error);

vegaEmbed('#stacked_bar_chart', vg_4)
    .then(function(result) {
        console.log("Stacked bar chart loaded successfully");
    })
    .catch(console.error);

vegaEmbed('#donut_chart', vg_5)
    .then(function(result) {
        console.log("Donut chart loaded successfully");
    })
    .catch(console.error);

vegaEmbed('#stacked_area_chart', vg_6)
    .then(function(result) {
        console.log("Stacked area chart loaded successfully");
    })
    .catch(console.error);

