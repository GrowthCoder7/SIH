import React from 'react'
import Link from 'next/link'

function Topbar() {
  return (
    <div className="topbar flex justify-between bg-green-700 font-semibold px-3 py-2 rounded-md text-white">
        <Link href='/'>Home</Link>
        <Link href="/control">Control Panel</Link>
        <Link href="/login">Login</Link>
    </div>
  )
}

export default Topbar