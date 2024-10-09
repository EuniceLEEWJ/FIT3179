var vg_1 = "Map.json";
var vg_2 = "heatmap.json";
var vg_3 = "Bar_Chart.json";
var vg_4 = "stacked_bar_chart.json";
var vg_5 = "donut_chart.json";
var vg_6 = "stacked_area_chart.json";

// Embed the choropleth map
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    console.log("Choropleth map loaded successfully");
}).catch(console.error);

// Embed the mortality trends heatmap
vegaEmbed("#mortality_trends", vg_2).then(function(result) {
    console.log("Mortality Trends heatmap loaded successfully");
}).catch(console.error);

// Embed the bar chart
vegaEmbed("#bar_chart", vg_3).then(function(result) {
    console.log("Bar chart loaded successfully");
}).catch(console.error);

// Embed the stacked bar chart
vegaEmbed("#stacked_bar_chart", vg_4).then(function(result) {
    console.log("Stacked bar chart loaded successfully");
}).catch(console.error);

// Embed the donut chart
vegaEmbed("#donut_chart", vg_5).then(function(result) {
    console.log("Donut chart loaded successfully");
}).catch(console.error);

// Embed the stacked area chart
vegaEmbed("#stacked_area_chart", vg_6).then(function(result) {
    console.log("Stacked area chart loaded successfully");
}).catch(console.error);
