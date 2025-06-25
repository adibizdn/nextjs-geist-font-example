"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AlarmRecord {
  radar: string;
  type: string;
  cause: string;
  timestamp: string;
}

const alarmTypes = ["Orange Alarm", "Red Alarm", "Yellow Alarm"];
const radarTypes = ["SSR460XT", "SSR461XT", "SSR530Omni", "SSR844FX"];
const causes = [
  "Blasting Event",
  "Diurnal Pattern",
  "Machinery Activity",
  "Rapid Atmospheric Changes",
  "Riling Material",
  "Sandstorm Event",
  "Step After Link Down",
  "Vegetation",
  "Water Refraction",
];

export default function AlertDetailPanel() {
  const [records, setRecords] = useState<AlarmRecord[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [selectedRadar, setSelectedRadar] = useState<string>("All Radars");
  const [selectedCause, setSelectedCause] = useState<string>("All Causes");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        // Parse CSV/Excel data here
        // This is a simplified example - you'd want to add proper CSV/Excel parsing
        const rows = text.split('\\n').map(row => {
          const [radar, type, cause, timestamp] = row.split(',');
          return { radar, type, cause, timestamp };
        });
        setRecords(rows);
      };
      reader.readAsText(file);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const text = event.clipboardData.getData('text');
    // Parse pasted data here
    const rows = text.split('\\n').map(row => {
      const [radar, type, cause, timestamp] = row.split('\\t');
      return { radar, type, cause, timestamp };
    });
    setRecords(rows);
  };

  const filteredRecords = records.filter(record => {
    if (selectedType !== "All Types" && record.type !== selectedType) return false;
    if (selectedRadar !== "All Radars" && record.radar !== selectedRadar) return false;
    if (selectedCause !== "All Causes" && record.cause !== selectedCause) return false;
    return true;
  });

  return (
    <Card className="p-6 bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-teal-400">Alarm Details</h2>
        <div className="flex gap-4">
          <Input
            type="file"
            accept=".csv,.xlsx"
            onChange={handleFileUpload}
            className="max-w-[200px] bg-gray-700"
          />
          <Button variant="outline" onClick={() => document.getElementById('pasteArea')?.focus()}>
            Paste Data
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <textarea
          id="pasteArea"
          className="w-full h-20 p-2 bg-gray-700 rounded border border-gray-600 text-white"
          placeholder="Paste your data here..."
          onPaste={handlePaste}
        />
      </div>

      <div className="flex gap-4 mb-6">
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-[160px] bg-gray-700">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Types">All Types</SelectItem>
            {alarmTypes.map(type => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedRadar} onValueChange={setSelectedRadar}>
          <SelectTrigger className="w-[160px] bg-gray-700">
            <SelectValue placeholder="Filter by radar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Radars">All Radars</SelectItem>
            {radarTypes.map(radar => (
              <SelectItem key={radar} value={radar}>
                {radar}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCause} onValueChange={setSelectedCause}>
          <SelectTrigger className="w-[200px] bg-gray-700">
            <SelectValue placeholder="Filter by cause" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Causes">All Causes</SelectItem>
            {causes.map(cause => (
              <SelectItem key={cause} value={cause}>
                {cause}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border border-gray-700">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-teal-400">Radar</TableHead>
              <TableHead className="text-teal-400">Type</TableHead>
              <TableHead className="text-teal-400">Cause</TableHead>
              <TableHead className="text-teal-400">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.radar}</TableCell>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.cause}</TableCell>
                <TableCell>{record.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
