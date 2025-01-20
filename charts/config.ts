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
export const lineChartOptions = {
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
//LINE CHART OPTIONS

//REVENUE - LINE CHART DATA
export const revenueLineChartData = {
  labels: [
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [90, 88, 87, 92, 95, 102],
      backgroundColor: "rgb(255, 0, 0)",
      borderColor: "rgb(255, 0, 0)",
      borderWidth: 1,
    },
    {
      label: "Cost",
      data: [60, 54, 52, 64, 70, 76],
      backgroundColor: "rgba(255, 153, 0, 1)",
      borderColor: "rgba(255, 153, 0, 1)",
      borderWidth: 1,
    }
  ],
}
//END REVENUE - LINE CHART DATA

//NET PROFIT - LINE CHART DATA
export const netProfitLineChartData = {
  labels: [
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
  ],
  datasets: [
    {
      label: "Net Profit",
      data: [20, 17, 16, 19, 21, 24],
      backgroundColor: "rgb(102, 204, 255)",
      borderColor: "rgb(102, 204, 255)",
      borderWidth: 1,
    }
  ],
}
//END NET PROFIT - LINE CHART DATA


//PIE CHART OPTIONS
export const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
};


//END PIE CHART OPTIONS

//CASH IN - PIE CHART DATA
export const cashInPieChartData = {
  labels: ["Pendapatan Lain", "Pelepasan Aset", "Penyertaan Modal", "Penjualan"],
  datasets: [
    {
      data: [10.3, 10.3, 2.6, 76.9],
      backgroundColor: [
        'rgb(0, 153, 255)',
        'rgb(15, 251, 255)',
        'rgb(15, 255, 151)',
        'rgb(255, 162, 0)',
      ],
      borderWidth: 1,
    },
  ],
};
//END CASH IN - PIE CHART DATA

//CASH OUT - PIE CHART DATA
export const cashOutPieChartData = {
  labels: ["Biaya Pemasaran", "Dividen", "Gaji", "Bahan Baku"],
  datasets: [
    {
      data: [19.7, 14.5, 26.5, 39.5],
      backgroundColor: [
        'rgb(0, 153, 255)',
        'rgb(15, 251, 255)',
        'rgb(15, 255, 151)',
        'rgb(255, 162, 0)',
      ],
      borderWidth: 1,
    },
  ],
};
//END CASH OUT - PIE CHART DATA

