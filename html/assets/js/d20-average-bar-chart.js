//bar chart of average results
var ctxB = document.getElementById("averageBarChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
type: 'bar',
data: {
labels: ["Gilbin", "Mirarin", "Pihlaja", "Kiljurn", "Aranthir", "DM"],
datasets: [{
label: 'average rolls',
data: [10.99, 10.05, 10.65, 11.45, 11.4, 10.18],
    backgroundColor: [
        'rgba(61,17,38, 0.8)',
        'rgba(99,64,81, 0.8)',
        'rgba(123,34,77, 0.8)',
        'rgba(109,10,58, 0.8)',
        'rgba(79,16,79, 0.8)',
        'rgba(51,0,69, 0.9)'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
    }]
},
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
        }
    }
});