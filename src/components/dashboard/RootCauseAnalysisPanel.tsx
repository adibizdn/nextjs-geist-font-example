"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const alarmCauses = [
  { cause: "Machinery Activity", count: 408, color: "#0ea5e9", percentage: 50.1 },
  { cause: "Vegetation", count: 95, color: "#f43f5e", percentage: 11.7 },
  { cause: "Rapid Atmospheric Changes", count: 88, color: "#6366f1", percentage: 10.8 },
  { cause: "Sandstorm Event", count: 81, color: "#d946ef", percentage: 10.0 },
  { cause: "Diurnal Pattern", count: 62, color: "#06b6d4", percentage: 7.6 },
  { cause: "Blasting Event", count: 39, color: "#14b8a6", percentage: 4.8 },
  { cause: "Step After Link Down", count: 35, color: "#ec4899", percentage: 4.3 },
  { cause: "Water Refraction", count: 5, color: "#ef4444", percentage: 0.6 },
  { cause: "Riling Material", count: 1, color: "#8b5cf6", percentage: 0.1 },
];

const radarOptions = ["All Radars", "SSR460XT", "SSR461XT", "SSR530Omni", "SSR844FX"];

export default function RootCauseAnalysisPanel() {
  const [selectedRadar, setSelectedRadar] = useState("All Radars");

  return (
    <Card className="p-6 bg-gray-800 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-teal-400">Alarm Causes</h2>
        <Select value={selectedRadar} onValueChange={setSelectedRadar}>
          <SelectTrigger className="w-[140px] bg-gray-700">
            <SelectValue placeholder="Select radar" />
          </SelectTrigger>
          <SelectContent>
            {radarOptions.map((radar) => (
              <SelectItem key={radar} value={radar}>
                {radar}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Pie Chart and Legend side by side */}
      <div className="grid grid-cols-[1fr_0.8fr] gap-6 h-[300px]">
        {/* Pie Chart on the left */}
        <div className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={alarmCauses}
                dataKey="count"
                nameKey="cause"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={50}
                paddingAngle={2}
              >
                {alarmCauses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ 
                  backgroundColor: "#1f2937", 
                  borderRadius: 8,
                  border: "1px solid #374151"
                }}
                formatter={(value, name) => [
                  `${value} (${((value as number / 814) * 100).toFixed(1)}%)`, 
                  name
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend on the right */}
        <div className="space-y-3 overflow-y-auto">
          {alarmCauses.map((cause, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3" 
                  style={{ backgroundColor: cause.color }}
                />
                <span className="text-gray-300">{cause.cause}</span>
              </div>
              <div className="text-white font-medium ml-2">
                {cause.count} ({cause.percentage}%)
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
