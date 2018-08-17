/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function lineChart() {
    var lineChartctx = document.getElementById("lineChart").getContext('2d');
    var lineChartObj = {
        type: 'line',
        data: {
            labels: ["2015", "2016", "2017", "2018"],
            datasets: [
                {
                    label: 'Toyota Camery',
                    data: [2, 5, 4, 6],
                    backgroundColor: 'tomato',
                    borderColor: '#ff9202',
                    tension: 0,
                    fill: false
                },
                {
                    label: 'toyota Corola',
                    data: [3, 8, 5, 4],
                    backgroundColor: 'yellow',
                    borderColor: '#fefe00',
                    tension: 0,
                    fill: false
                },
            ],
        },
        options: {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        }
    }
    var lineChart = new Chart(lineChartctx, lineChartObj);
}

function spartlineChart() {
    $('.inlinesparkline').sparkline();
    var lineValues = [1, 7, 8, 15, 9, 8, 10, 4, 3];
    var barValues = [10, 12, 15, 13, 15, 16, 18, 19, 16, 15, 14, 16, 13, 14, 15, 17, 12, 10, 14, 15];
    $('.dynamicsparkline').sparkline(lineValues, {type: 'line', height: '100px',
        fillColor: '', width: '100%', lineColor: '#fff'});

    $('.dynamicsparkline2').sparkline(lineValues, {type: 'line', height: '100px',
        fillColor: '', width: '100%', lineColor: 'skyblue'});

    $('.dynamicsparkline3').sparkline(lineValues, {type: 'line', height: '40px',
        fillColor: '', width: '100%', lineWidth: 2, lineColor: 'purple'});

    $('.dynamicbar').sparkline(barValues, {type: 'bar', height: '100px', width: '100%', barWidth: 7, barColor: 'rgb(43, 185, 195'});
    $('.dynamicbar2').sparkline(barValues, {type: 'bar', height: '100px', width: '100%', barWidth: 7, barColor: 'rgb(255, 255, 255'});

    $('.inlinebar').sparkline('html', {type: 'bar', barColor: 'red'});
}

function amCharts(chartdiv) {
    var chartData = generatechartData();

    function generatechartData() {
        var chartData = [];
        var firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 150);
        var visits = 500;
        for (var i = 0; i < 150; i++) {
            var newDate = new Date(firstDate);
            newDate.setDate(newDate.getDate() + i);

            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

            chartData.push({
                date: newDate,
                visits: visits
            });
        }
        return chartData;
    }


    var chart = AmCharts.makeChart(chartdiv, {
        "theme": "light",
        "type": "serial",
        "marginRight": 80,
        "autoMarginOffset": 20,
        "marginTop": 20,
        "dataProvider": chartData,
        "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0.1
            }],
        "graphs": [{
                "useNegativeColorIfDown": true,
                "balloonText": "[[category]]<br><b>value: [[value]]</b>",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletBorderColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "lineColor": "#fdd400",
                "negativeLineColor": "#67b7dc",
                "valueField": "visits"
            }],
        "chartScrollbar": {
            "scrollbarHeight": 5,
            "backgroundAlpha": 0.1,
            "backgroundColor": "#868686",
            "selectedBackgroundColor": "#67b7dc",
            "selectedBackgroundAlpha": 1
        },
        "chartCursor": {
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisAlpha": 0,
            "minHorizontalGap": 60
        },
        "export": {
            "enabled": true
        }
    });

    chart.addListener("dataUpdated", zoomChart);

    function zoomChart() {
        if (chart.zoomToIndexes) {
            chart.zoomToIndexes(130, chartData.length - 1);
        }
    }
}

amCharts("chartdiv");
spartlineChart();
lineChart();








