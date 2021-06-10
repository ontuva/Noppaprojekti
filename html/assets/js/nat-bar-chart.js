// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var barChartData = {
  labels: [
    "Gilbin",
    "Mirarin",
    "Pihlaja",
    "Kiljurn",
    "Aranthir",
    "DM",
  ],
  datasets: [
    {
      label: "Nat20",
      backgroundColor: "#3E2C68",
      borderWidth: 1,
      data: [8, 6, 4, 7, 11, 9]
    },
    {
      label: "Nat1",
      backgroundColor: "#4D1F2C",
      borderWidth: 1,
      data: [4, 10, 6, 2, 5, 11]
    },
  ]
};

var chartOptions = {
  responsive: true,
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

var ctx = document.getElementById("nat20BarChart");
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: barChartData,
  options: chartOptions
});