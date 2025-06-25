"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const years = [2025, 2024, 2023];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const radars = ["SSR460XT", "SSR461XT", "SSR530Omni", "SSR844FX", "All Radars"];

export default function HeaderPanel() {
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("June");
  const [radar, setRadar] = useState("All Radars");

  return (
    <header className="flex flex-col md:flex-row items-center justify-between mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
      {/* Branding */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="bg-teal-500 p-2 rounded-lg">
          <Image src="/file.svg" alt="Telfer Logo" width={40} height={40} className="rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-teal-400">Telfer</h1>
          <p className="text-gray-400 text-sm">DTG Dashboard</p>
        </div>
      </div>

      {/* Selectors */}
      <div className="flex flex-wrap gap-4 items-center">
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-[120px] bg-gray-700">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((y) => (
              <SelectItem key={y} value={y.toString()}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={month} onValueChange={setMonth}>
          <SelectTrigger className="w-[140px] bg-gray-700">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            {months.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={radar} onValueChange={setRadar}>
          <SelectTrigger className="w-[180px] bg-gray-700">
            <SelectValue placeholder="Select radar" />
          </SelectTrigger>
          <SelectContent>
            {radars.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
