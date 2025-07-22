import React from 'react'
import Sidebar from '~/components/Sidebar'
import MainContent from '~/components/MainContent'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
     <div className="min-h-screen text-brand-text-primary">
      <div className="lg:flex">
        <Sidebar/>
         <main className="flex-1 p-4 border-8 border-red-500 ml-[100px]">
          <Outlet />  {/* Ini yang akan berubah sesuai menu */}
        </main>
      </div>
    </div>
    </>
  )
}

export default Dashboard