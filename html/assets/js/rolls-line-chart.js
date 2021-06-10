// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//line
var ctxL = document.getElementById("rollLineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
        datasets: [
            {
            label: "Gilbin",
            data: [4,4,7,7,8,5,7,8,9,3,10,7,6,10,8,5,6,8,7,8],
            backgroundColor: [
                'rgba(61,17,38, 0.2)'
            ],
            borderColor: [
                'rgba(61,17,38, 1)'
            ],
            borderWidth: 2
            },
            {
            label: "Mirarin",
            data: [10,7,9,7,6,2,5,7,9,9,6,5,9,5,8,8,3,6,6,6],
            backgroundColor: [
                'rgba(99,64,81, 0.2)',
            ],
            borderColor: [
                'rgba(99,64,81, 1)',
            ],
            borderWidth: 2
            },
            {
            label: "Pihlaja",
            data: [6,7,6,4,6,8,9,7,7,4,5,9,7,12,8,4,11,7,5,4],
            backgroundColor: [
                'rgba(123,34,77, 0.2)',
            ],
            borderColor: [
                'rgba(123,34,77, 1)',
            ],
            borderWidth: 2
            },
            {
            label: "Kiljurn",
            data: [2,1,4,4,3,6,1,8,3,4,7,8,5,12,5,1,3,0,7,7],
            backgroundColor: [
                'rgba(109,10,58, 0.2)',
            ],
            borderColor: [
                'rgba(109,10,58, 1)',
            ],
            borderWidth: 2
            },
            {
            label: "Aranthir",
            data: [5,9,5,6,6,8,3,2,3,7,5,6,6,4,2,10,9,7,10,11],
            backgroundColor: [
                'rgba(79,16,79, 0.2)',
            ],
            borderColor: [
                'rgba(79,16,79, 1)',
            ],
            borderWidth: 2
            },
            {
            label: "DM",
            data: [11,17,9,9,10,17,7,10,14,12,11,14,13,8,7,11,6,12,14,9],
            backgroundColor: [
                'rgba(51,0,69, 0.2)'
            ],
            borderColor: [
                'rgba(51,0,69, 1)'
            ],
            borderWidth: 2
            }
        ]
        },
        options: {
        responsive: true,
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
            }],
          },
    },
});