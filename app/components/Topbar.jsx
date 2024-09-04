import React from 'react'

function Topbar() {
  return (
    <div className="topbar flex justify-between bg-green-700 font-semibold px-3 py-2 rounded-md text-white">
        <button className="home">
            Home
        </button>
        <button className="ctrl">
            Control Panel
        </button>
        <button className="login">
            Login Now
        </button>
    </div>
  )
}

export default Topbar