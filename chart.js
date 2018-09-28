   let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:stockMonth,
        datasets:[{
          label:query,
          data:stockDataPerMonth,
          fill: 'rgba(255, 159, 64, 0.6)'
          }
        ]
      },
      options:{
      
      }
    });