import React from "react";
import * as Switch from "@radix-ui/react-switch";

const Panel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 p-4">
      <nav className="bg-gray-900 text-white p-4 rounded-lg mb-4 flex justify-between items-center">
        <div className="text-lg">Control Panel</div>
        <div className="flex space-x-4">
          <button className="p-2 bg-gray-700 rounded-full">
            <i className="fas fa-cog"></i>
          </button>
          <button className="p-2 bg-gray-700 rounded-full">
            <i className="fas fa-home"></i>
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-2 gap-4">
        {/* Status Section */}
        <div className="bg-gray-800 text-white p-4 rounded-lg flex justify-between items-center">
          <div className="text-lg">Status</div>
          <div className="flex space-x-2 items-center">
            <div>Running</div>
            <Switch.Root
              className="bg-gray-600 w-12 h-6 rounded-full relative"
              id="switch-1"
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full translate-x-1 will-change-transform transition-transform duration-100 ease-[cubic-bezier(0.22, 1, 0.36, 1)]" />
            </Switch.Root>
          </div>
        </div>

        {/* Water Supply Inlet */}
        <div className="bg-red-700 text-white p-4 rounded-lg flex justify-between items-center">
          <div className="text-lg">Water Supply Inlet</div>
          <div className="flex space-x-2 items-center">
            <div>Stopped</div>
            <Switch.Root
              className="bg-gray-600 w-12 h-6 rounded-full relative"
              id="switch-2"
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full translate-x-1 will-change-transform transition-transform duration-100 ease-[cubic-bezier(0.22, 1, 0.36, 1)]" />
            </Switch.Root>
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-lg">Customer Details</h2>
          <p>Vendor: XYZ Thermal Power Plant</p>
          <p>Maintenance Required: No</p>
        </div>

        {/* Algae Density Heatmap */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-lg">Density of Algae</h2>
          <div className="w-full h-32 bg-red-200 rounded-lg flex items-center justify-center">
            <p>Heatmap Placeholder</p>
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
  )
}

export default Panel
