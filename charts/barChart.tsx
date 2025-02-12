import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, BarElement, LinearScale } from "chart.js";
import { barChartData, barChartOptions } from "./config";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, BarElement, LinearScale);

interface BarChartProps {
  data: any;
  options: any;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  return <Bar data={barChartData} options={barChartOptions} />;
};

export default BarChart;
