import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Overview = ({ data, options, selectedMetric, setSelectedMetric, selectedRange, setSelectedRange }) => (
  <>
    
    <h1 className="text-xl font-semibold mb-4">Overview</h1>

    
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
      
      <div className="bg-[#111] rounded-xl p-4 sm:p-6 w-full lg:w-[70%] shadow border border-gray-800">
        <div className="flex flex-wrap gap-2 mb-4">
          <select
            className="bg-black text-white text-sm border border-gray-700 rounded px-3 py-1"
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
          >
            <option value="Visitors">Visitors</option>
            <option value="Connections">Connections</option>
            <option value="Interactions">Interactions</option>
            <option value="Impressions">Impressions</option>
          </select>
          <select
            className="bg-black text-white text-sm border border-gray-700 rounded px-3 py-1"
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
          >
            <option>Today</option>
            <option>Yesterday</option>
            <option>This week</option>
            <option>Last week</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
          <select className="bg-black text-white text-sm border border-gray-700 rounded px-3 py-1">
            <option>+ Add</option>
            <option>Connections</option>
            <option>Interactions</option>
            <option>Impressions</option>
          </select>
        </div>
        <div className="flex gap-12 mb-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold">13.49K</h2>
            <p className="text-green-500 text-sm">+469% (897)</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-purple-400">3.49K</h2>
            <p className="text-green-500 text-sm">+180% (497)</p>
          </div>
        </div>
        <Line data={data} options={options} />
      </div>

      
      <div className="bg-[#111] rounded-xl p-4 sm:p-6 w-full lg:w-[30%] shadow border border-gray-800">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Insights</span>
          <select className="bg-black text-white text-sm border border-gray-700 rounded">
            <option>Visitors</option>
          </select>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">7.4K</h2>
          <p className="text-green-500 text-sm">+000% (000)</p>
          <p className="text-sm">Founders</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold">6.09K</h2>
          <p className="text-green-500 text-sm">+000% (000)</p>
          <p className="text-sm">Investors</p>
        </div>
        <button className="text-sm text-white hover:underline flex items-center gap-1">
          View detailed insights →
        </button>
      </div>
    </div>

    
    <Demographics />
  </>
);

const Demographics = () => (
  <div className="bg-[#111] rounded-xl p-4 sm:p-6 shadow border border-gray-800">
    <div className="flex justify-between mb-4">
      <span className="font-semibold text-lg">Demographics</span>
      <select className="bg-black text-white text-sm border border-gray-700 rounded">
        <option>Visitors</option>
      </select>
    </div>

    <div className="flex flex-col lg:flex-row gap-6">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/World_map_with_points.svg" alt="World Map" className="w-full lg:w-2/3 h-64 object-cover rounded" />

      <div className="w-full lg:w-1/3">
        {[
          { name: "India", flag: "🇮🇳", percent: 40, color: "bg-purple-600" },
          { name: "USA", flag: "🇺🇸", percent: 25, color: "bg-orange-500" },
          { name: "CANADA", flag: "🇨🇦", percent: 10, color: "bg-orange-300" },
          { name: "UAE", flag: "🇦🇪", percent: 7, color: "bg-green-400" },
        ].map((country, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{country.flag} {country.name}</span>
              <span>{country.percent}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded">
              <div className={`${country.color} h-2 rounded`} style={{ width: `${country.percent}%` }}></div>
            </div>
          </div>
        ))}
        <button className="text-sm text-white hover:underline mt-2 flex items-center gap-1">
          View all countries →
        </button>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedMetric, setSelectedMetric] = useState("Visitors");
  const [selectedRange, setSelectedRange] = useState("Last 30 days");

  const datasets = {
    Visitors: [400, 1200, 1100, 800, 950, 900, 1200],
    Connections: [300, 1000, 900, 500, 1400, 700, 1000],
    Interactions: [100, 300, 200, 400, 300, 250, 350],
    Impressions: [500, 800, 750, 900, 950, 1000, 1100],
  };

  const data = {
    labels: ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"],
    datasets: [
      {
        label: selectedMetric,
        data: datasets[selectedMetric],
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: "#999" } },
      y: { ticks: { color: "#999" } },
    },
  };

  return (
    <div className="text-white max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8 scale-[0.95] sm:scale-100 transition-all duration-300">
     
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-800 mb-4 pb-2 gap-2">
        <div className="flex gap-6 text-sm">
          <span
            className={`cursor-pointer pb-1 ${
              activeTab === "overview" ? "text-white font-medium border-b border-white" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </span>
          <span
            className={`cursor-pointer pb-1 ${
              activeTab === "demographics" ? "text-white font-medium border-b border-white" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("demographics")}
          >
            Demographics
          </span>
        </div>
        <span className="text-sm text-white cursor-pointer">More</span>
      </div>

     
      {activeTab === "overview" && (
        <Overview
          data={data}
          options={options}
          selectedMetric={selectedMetric}
          setSelectedMetric={setSelectedMetric}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
        />
      )}

      {activeTab === "demographics" && <Demographics />}
    </div>
  );
};

export default Dashboard;
