"use client"
import React from "react";
import Switch from '@mui/material/Switch';
import PanelTop from "./PanelTop";
import Box from '@mui/material/Box';
import { Heatmap } from '@mui/x-charts-pro/Heatmap';
import { data } from "../dumbData";
const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const Panel = () => {
  return (
    <>
    <PanelTop/>
    <div className="min-h-screen w-screen bg-gradient-to-br from-green-400 to-green-600 p-4">
      
      <div className="grid grid-cols-2 gap-4">
        {/* Status Section */}
        <div className="bg-gray-800 text-white p-4 rounded-lg flex justify-between items-center">
          <div className="text-lg">Status</div>
          <div className="flex space-x-2 items-center">
            <div>Running</div>
            <Switch {...label} defaultChecked color="secondary" />
          </div>
        </div>

        {/* Water Supply Inlet */}
        <div className="bg-red-700 text-white p-4 rounded-lg flex justify-between items-center">
          <div className="text-lg">Water Supply Inlet</div>
          <div className="flex space-x-2 items-center">
            <div>Stopped</div>
            <Switch {...label} defaultChecked color="warning" />
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-lg">Customer Details</h2>
          <p>Vendor: XYZ Thermal Power Plant</p>
          <p>Maintenance Required: No</p>
        </div>

        {/* Algae Density Heatmap */}
        <div className="bg-white p-4 rounded-lg h-80">
          <h2 className="font-bold text-lg">Density of Algae</h2>
          <div className="w-full bg-red-200 rounded-lg flex  justify-center h-[16.5rem] content-center">
          <Box sx={{ width: '100%', maxWidth: 400 , height:"75%"}}>
      <Heatmap
        xAxis={[{ data: [1, 2, 3, 4] }]}
        yAxis={[{ data: ['A', 'B', 'C', 'D', 'E'] }]}
        series={[{ data, highlightScope: { highlight: 'item', fade: 'global' } }]}
        margin={{ top: 5, right: 5, left: 20 }}
        height={300}
      />
    </Box>

          </div>
        </div>

        {/* Air Quality Index */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-lg">Air Quality Index</h2>
          <div className="w-full h-32 flex items-center justify-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
              <p className="text-2xl">150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Panel
