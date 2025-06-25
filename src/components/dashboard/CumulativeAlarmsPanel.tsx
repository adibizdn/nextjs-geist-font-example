"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample cumulative data over 30 days
const cumulativeData = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  return {
    day,
    SSR460XT: Math.floor(5 + day * 6.8 + Math.random() * 10),
    SSR461XT: Math.floor(3 + day * 6.1 + Math.random() * 8),
    SSR530Omni: Math.floor(7 + day * 8.2 + Math.random() * 12),
    SSR844FX: Math.floor(4 + day * 5.9 + Math.random() * 9),
  };
});

export default function CumulativeAlarmsPanel() {
  const [viewMode, setViewMode] = useState("Cumulative");

  return (
    <Card className="p-6 bg-gray-800 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-teal-400">Alarm Trends</h2>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded text-sm ${
              viewMode === "Cumulative"
                ? "bg-teal-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setViewMode("Cumulative")}
          >
            Cumulative
          </button>
          <button
            className={`px-4 py-2 rounded text-sm ${
              viewMode === "Daily"
                ? "bg-teal-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setViewMode("Daily")}
          >
            Daily
          </button>
        </div>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cumulativeData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="day"
              stroke="#9ca3af"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              label={{ value: "Day of Month", position: "insideBottom", offset: -5, style: { fill: "#9ca3af", fontSize: 12 } }}
            />
            <YAxis
              stroke="#9ca3af"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              label={{ 
                value: "Cumulative Alarms", 
                angle: -90, 
                position: "insideLeft", 
                style: { textAnchor: "middle", fill: "#9ca3af", fontSize: 12 }
              }}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: "#1f2937", 
                borderRadius: 8,
                border: "1px solid #374151"
              }}
              labelStyle={{ color: "#14b8a6" }}
            />
            <Legend 
              wrapperStyle={{ color: "#9ca3af", fontSize: "12px" }} 
              verticalAlign="bottom"
              height={30}
            />
            <Line
              type="monotone"
              dataKey="SSR460XT"
              stroke="#14b8a6"
              strokeWidth={2}
              dot={{ fill: "#14b8a6", strokeWidth: 2, r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="SSR461XT"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ fill: "#06b6d4", strokeWidth: 2, r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="SSR530Omni"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={{ fill: "#0ea5e9", strokeWidth: 2, r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="SSR844FX"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
