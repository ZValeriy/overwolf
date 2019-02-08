Chart.defaults.global.defaultFontColor = "#fff";
var lineOptions =  {
  responsive: true,
legend: {
      display: true,
      position: 'bottom',
      fontColor: '#fff',
      
      labels: {
        boxWidth: 15,
        fontColor: '#fff',
      }
},
scales: {
  xAxes: [{
    display: true,
    color: 'rgba(102,51,153, 1)',
    ticks: {
      color: '#fff',
      fontsize: 15,
    }
  }],
  yAxes: [{
    gridLines: {
    color: 'rgba(255,255,255,1)',
    lineWidth: 0.5,
  },
  ticks: {
    suggestedMin: -100,
    suggestedMax: 100,
    stepSize: 20,
    color: '#fff',
    fontsize: 15,
  }
}]
  
},

}
var barOptions = {
  maxBarThickness: 10,
                  tooltips: {
                      mode: 'index',
                      callbacks: {
                        // Use the footer callback to display the sum of the items showing in the tooltip
                        label: function(tooltipItem, data) {
                          var label = data.datasets[tooltipItem.datasetIndex].label || '';
                          label+= " "
                          if(tooltipItem.datasetIndex == 0) {
                            label += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          } else {
                            value = (100 - data.datasets[0].data[tooltipItem.index]).toFixed(1);
                            label += value;
                          }
                          return label;
                        },
                      },
                    },
                    responsive: true,
                    defaultFontColor: '#fff',
                    legend: {
                          display: true,
                          position: 'bottom',
                          labels: {
                            boxWidth: 15,
                            fontColor: '#fff',
                          }
                    },
                    scales: {
                      xAxes: [{
                        display: true,
                        color: 'rgba(102,51,153, 1)',
                        ticks: {
                              suggestedMin: 0,
                              suggestedMax: 100
                          }
                      }],
                      yAxes: [{
                        stacked: true,
                        categoryPercentage: .4,
                        barPercentage: 0.8,
                      }]
                      
                    },

                  }
var ctx = document.getElementById('winChB').getContext('2d');
var myBarChart = new Chart(ctx, {
              type: 'horizontalBar',
              data: getDataSeriesBar("Bar Win"),
              options: barOptions,
          });
var ctx = document.getElementById('liveA').getContext('2d');
var myBarChart = new Chart(ctx, {
              type: 'horizontalBar',
              data: getDataSeriesBar("Graph2-Live Advantage"),
              options: barOptions,
          });
var ctx = document.getElementById('totAdv').getContext('2d');
var myBarChart = new Chart(ctx, {
              type: 'horizontalBar',
              data: getDataSeriesBar("Graph3-Total Advantage"),
              options: barOptions,
          });
var ctx = document.getElementById('teamFBar').getContext('2d');
var myBarChart = new Chart(ctx, {
              type: 'horizontalBar',
              data: getDataSeriesBar("Graph4-Team Fight"),
              options: barOptions,
          });
var ctx = document.getElementById('winCh').getContext('2d');
var chart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels:  getLabels("Time Graph 1"),
                  datasets: getDataSeries("Time Graph 1"),
              },
              options: lineOptions,
          });
var ctx = document.getElementById('liveAdv').getContext('2d');
var chart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels:  getLabels("Time Graph 2"),
                  datasets: getDataSeries("Time Graph 2"),
              },
              options: lineOptions,
          });
var ctx = document.getElementById('teamF').getContext('2d');
var chart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels:  getLabels("Time Graph 3"),
                  datasets: getDataSeries("Time Graph 3"),
              },
              options: lineOptions,
          });

var ctx = document.getElementById('driveA').getContext('2d');
var myBarChart = new Chart(ctx, {
                type: 'horizontalBar',
                data: getDataSeriesBar("Graph1-Draft Advantage"),
                options: barOptions,
            });

var ch = document.getElementById("ch_pick", "ch");
var nb = document.getElementById("nb_pick", "nb");
        for(let i=0;i<10;i++) {
            var img = document.createElement('img');
            img.src = getImage(dataAPI["Images for box"][i]["img"]);
            if(i<5) {
              ch.appendChild(img);
            } else {
              nb.appendChild(img);
            }
          }