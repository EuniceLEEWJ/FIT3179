var vg_1 = "Homework9.json";
var vg_2 = "Homework10.json";  // Homework10.json is the updated JSON you provided

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    // Choropleth map loaded successfully
}).catch(console.error);

vegaEmbed("#mortality_trends", vg_2).then(function(result) {
    // Mortality Trends bar chart loaded successfully
}).catch(console.error);
