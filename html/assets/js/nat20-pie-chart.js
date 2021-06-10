// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctxP = document.getElementById("nat20PieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Gilbin", "Mirarin", "Pihlaja", "Kiljurn", "Aranthir", "DM", "Others"],
            datasets: [{
            data: [16.3, 12.2, 8.1, 14.3, 22.4, 18.3, 8.4],
            backgroundColor: ["#0B090A", "#161A1D", "#660708", "#A4161A", "#BA181B", "#E5383B", "#B1A7A6"],
            hoverBackgroundColor: ["#616774", "#616774", "#616774", "#616774", "#616774", "#616774", "#616774"]
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            },
      }
    });