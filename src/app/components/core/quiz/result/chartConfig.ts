export const chartConfig = {
    chart: {
        plotBackgroundColor: 0,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '#fff',
        width: 400
    },
    colors: ['#2ecc71', '#e74c3c'],
    title: {
        text: 'Quiz Result',
        align: 'center',
        verticalAlign: 'middle',
        y: 80,
        color: '#019ac6'
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Quiz Result',
        innerSize: '50%',
        data: [
            ['Correct', 10],
            ['Wrong', 90],
        ],
    }],
    credits: {
        enabled: false
    },
};
