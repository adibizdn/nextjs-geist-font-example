"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const alarmTypes = [
  { id: "red", name: "Priority Level 1 Alarm", count: 52, color: "bg-red-500" },
  { id: "orange", name: "Priority Level 2 Alarm", count: 239, color: "bg-orange-500" },
  { id: "yellow", name: "Priority Level 3 Alarm", count: 523, color: "bg-yellow-500" },
];

const radarAlarms = [
  { id: "ssr460", name: "SSR460XT", count: 205, color: "bg-teal-500" },
  { id: "ssr461", name: "SSR461XT", count: 184, color: "bg-cyan-500" },
  { id: "ssr530", name: "SSR530Omni", count: 246, color: "bg-blue-500" },
  { id: "ssr844", name: "SSR844FX", count: 179, color: "bg-indigo-500" },
];

export default function AlarmsOverviewPanel() {
  const totalAlarms = alarmTypes.reduce((sum, type) => sum + type.count, 0);

  return (
    <div className="flex flex-col space-y-4">
      {/* Total Alarms Card - At the top */}
      <Card className="p-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-2 text-white">Total Alarms</h2>
        <div className="text-5xl font-bold text-white">{totalAlarms}</div>
      </Card>

      {/* Valid Alarm Performance Card */}
      <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2 text-teal-400">Valid Alarm Performance</h2>
        <div className="text-4xl font-bold text-white">0%</div>
        <div className="text-gray-400 text-sm mt-1">Performance Rate</div>
      </Card>

      {/* Priority Level Breakdown */}
      <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3 text-teal-400">Priority Levels</h2>
        <div className="grid grid-cols-1 gap-2">
          {alarmTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between p-2 bg-gray-700 rounded">
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${type.color}`} />
                <span className="text-white text-sm">{type.name}</span>
              </div>
              <Badge variant="outline" className="text-xs bg-gray-600">
                {type.count}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Radar List - At the bottom */}
      <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3 text-teal-400">Radars</h2>
        <div className="space-y-2">
          {radarAlarms.map((radar) => (
            <div key={radar.id} className="flex items-center justify-between p-2 bg-gray-700 rounded">
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${radar.color}`} />
                <span className="text-white text-sm">{radar.name}</span>
              </div>
              <div className="text-white font-medium">{radar.count}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
