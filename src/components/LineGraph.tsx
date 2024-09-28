import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  Ticks,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  timeline: Array<number>;
}
const monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var dates: Array<number> = [29, 30, 31, 1, 2, 3, 4];

export function LineGraph({ timeline }: Props) {
  var dailytracker: Array<number> = [0, 0, 0, 0, 0, 0, 0];
  const ttt = new Date();
  var today = ttt.getDate();
  for (let i = 6; i >= 0; i--) {
    dates[i] = today;
    today--;
    if (today <= 0) {
      today = monthdays[ttt.getMonth() - 1];
    }
  }

  for (let i = 0; i < timeline.length; i++) {
    for (let j = 0; j < dates.length; j++) {
      if (timeline[i] == dates[j]) {
        dailytracker[j]++;
      }
    }
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Feedbacks",
        data: dailytracker,
        backgroundColor: "#fb923c",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
