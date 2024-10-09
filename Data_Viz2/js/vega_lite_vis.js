var vg_1 = "Map.json";
var vg_2 = "heatmap.json";
var vg_3 = "Bar_Chart.json";
var vg_4 = "stacked_bar_chart.json";
var vg_5 = "donut_chart.json";
var vg_6 = "stacked_area_chart.json";

vegaEmbed('#choropleth_map', vg_1).then(function(result) {
      console.log("Choropleth map loaded successfully");
    }).catch(console.error);

    vegaEmbed('#heatmap', vg_2).then(function(result) {
      console.log("Heatmap loaded successfully");
    }).catch(console.error);

    vegaEmbed('#mortality_trends', vg_3).then(function(result) {
      console.log("Mortality trends loaded successfully");
    }).catch(console.error);

    vegaEmbed('#stacked_bar_chart', vg_4).then(function(result) {
      console.log("Stacked bar chart loaded successfully");
    }).catch(console.error);

    vegaEmbed('#donut_chart', vg_5).then(function(result) {
      console.log("Donut chart loaded successfully");
    }).catch(console.error);

    vegaEmbed('#stacked_area_chart', vg_6).then(function(result) {
      console.log("Stacked area chart loaded successfully");
    }).catch(console.error);
