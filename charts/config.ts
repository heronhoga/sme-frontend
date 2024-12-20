export const doughnutChartData = {
    labels: ['Growth', 'Target'],
    datasets: [
      {
        label: 'Value',
        data: [12, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
    export const doughnutChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
        title: {
          display: false,
        },
      },
      circumference: 180,
      rotation: 270,
      cutout: 90,
    };
  
  