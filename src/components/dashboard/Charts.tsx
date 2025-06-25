"use client";

import React from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: ChartData[];
}

interface PieChartProps {
  data: ChartData[];
}

export function DonutChart({ data }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <RePieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={3}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "#1f2937", borderRadius: 8 }}
          itemStyle={{ color: "#14b8a6" }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          wrapperStyle={{ color: "#9ca3af" }}
        />
      </RePieChart>
    </ResponsiveContainer>
  );
}

export function PieChart({ data }: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <RePieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "#1f2937", borderRadius: 8 }}
          itemStyle={{ color: "#14b8a6" }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          wrapperStyle={{ color: "#9ca3af" }}
        />
      </RePieChart>
    </ResponsiveContainer>
  );
}
