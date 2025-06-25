"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const radarData = [
  { name: "SSR460XT", alarms: 205, color: "#14b8a6" },
  { name: "SSR461XT", alarms: 184, color: "#06b6d4" },
  { name: "SSR530Omni", alarms: 246, color: "#0ea5e9" },
  { name: "SSR844FX", alarms: 179, color: "#6366f1" },
];

export default function TrendOverTimePanel() {
  const averageAlarmsPerDay = Math.round(radarData.reduce((sum, radar) => sum + radar.alarms, 0) / 30); // Assuming 30 days

  return (
    <Card className="p-6 bg-gray-800 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-teal-400">Total Alarms by Radar</h2>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{averageAlarmsPerDay}</div>
          <div className="text-gray-400 text-sm">Average Alarms per Day</div>
        </div>
      </div>
      
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={radarData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fill: "#9ca3af" }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              stroke="#9ca3af"
              tick={{ fill: "#9ca3af" }}
              label={{ 
                value: "Total Alarms", 
                angle: -90, 
                position: "insideLeft", 
                style: { textAnchor: "middle", fill: "#9ca3af" }
              }}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: "#1f2937", 
                borderRadius: 8,
                border: "1px solid #374151"
              }}
              labelStyle={{ color: "#14b8a6" }}
              itemStyle={{ color: "#ffffff" }}
            />
            <Bar 
              dataKey="alarms" 
              fill="#14b8a6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
