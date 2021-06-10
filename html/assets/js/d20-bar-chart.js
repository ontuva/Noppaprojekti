// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("d20BarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Gilbin", "Mirarin", "Pihlaja", "Kiljurn", "Aranthir", "DM"],
    datasets: [{
      label: "d20 rolls",
      backgroundColor: [
        'rgba(61,17,38, 0.8)',
        'rgba(99,64,81, 0.8)',
        'rgba(123,34,77, 0.8)',
        'rgba(109,10,58, 0.8)',
        'rgba(79,16,79, 0.8)',
        'rgba(51,0,69, 0.9)'
      ],
      borderColor: "rgba(2,117,216,1)",
      data: [137, 133, 136, 91, 124, 221],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
