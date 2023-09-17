"use client";
import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

type Props = {
  linePoints: number[];
};

const options = {
  responsive: true,
};

const LineChart = async ({ linePoints }: Props) => {
  const lineData = useMemo(() => {
    const labels = linePoints.map(() => "");
    const data = {
      labels,
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
    return data;
  }, []);
  return <Line options={options} data={lineData} />;
};

export default LineChart;
