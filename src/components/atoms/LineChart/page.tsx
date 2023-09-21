"use client";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

type Props = {
  linePoints: number[];
  dates: string[];
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const LineChart = ({ linePoints, dates }: Props) => {
  const lineData = {
    labels: dates || linePoints.map(() => ""),
    datasets: [
      {
        fill: true,
        label: "",
        data: linePoints,
        borderColor: "#FF7A00",
        backgroundColor: "#FF7A004D",
      },
    ],
  };
  return <Line options={options} data={lineData} />;
};

export default LineChart;
