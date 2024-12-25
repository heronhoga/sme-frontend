import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, BarElement, LinearScale } from "chart.js";
import { ukmBarChartData, barChartOptions } from "./config";

// Register necessary chart.js components, including the linear scale
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, BarElement, LinearScale);

interface BarChartProps {
  data: any;
  options: any;
}

const UkmBarChart: React.FC<BarChartProps> = ({ data, options }) => {
  return <Bar data={ukmBarChartData} options={barChartOptions} />;
};

export default UkmBarChart;
