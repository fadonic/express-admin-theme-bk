       /* Line Chart instance initialisation */

        var  lineChartctx = document.getElementById("lineChart").getContext('2d');
        var  lineChartObj = {
          type: 'line',
          data: {
            labels: ["2015", "2016", "2017", "2018"],
            datasets:[
            {
                label: 'Toyota Camery',
                data: [2, 5, 4, 6],
                backgroundColor: 'tomato',
                borderColor: '#ff9202',
                tension:0,
                fill: false
            },

            {
                label: 'toyota Corola',
                data: [3, 8, 5, 4],
                backgroundColor: 'yellow',
                borderColor: '#fefe00',
                tension:0,
                fill: false
            },

            ],

           /* borderWidth: 1,      */
          },
          options: {
            scales:{
              yAxes:[{
                ticks:{
                  beginAtZero:true
                }
              }]
            }
          }
        }
        var lineChart = new Chart(lineChartctx, lineChartObj);





