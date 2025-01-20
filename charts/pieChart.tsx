import React from "react";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  PieController,
  LinearScale,
  CategoryScale
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  PieController,
  LinearScale,
  CategoryScale
);

interface pieChartProps {
  data: any;
  options: any;
}

const PieChart: React.FC<pieChartProps> = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
