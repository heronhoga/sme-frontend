//DOUGHNUT CHART
export const doughnutChartData = {
  labels: ["Growth", "Target"],
  datasets: [
    {
      label: "Value",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 255, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

export const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
    },
  },
  circumference: 180,
  rotation: 270,
  cutout: 90,
};
//DOUGHNUT CHART

  //BAR CHART
  export const barChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [5998, 6560, 6450, 7560, 7670, 9964, 9855, 11200, 9200, 8750, 10000, 9500],
        backgroundColor: "rgba(235, 148, 42, 0.2)",
        borderColor: "rgba(235, 148, 42, 1)",
        borderWidth: 1,
      },
    ],
  };

  export const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };
//BAR CHART

//UKM BAR CHART
export const ukmBarChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [5998, 6560, 6450, 7560, 7670, 9964, 9855, 11200, 9200, 8750, 10000, 9500],
      backgroundColor: "rgba(20, 100, 199, 0.2)",
      borderColor: "rgba(20, 100, 199, 1)",
      borderWidth: 1,
    },
  ],
};
//UKM BAR CHART
