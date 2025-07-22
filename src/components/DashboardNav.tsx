import React from 'react'
import UserProfile from './shared/UserProfile'
import BreadCrumb from './shared/BreadCrumb'
type Props = {}

function DashboardNav({}: Props) {
  return (
   <>
    <main className="flex-1  sm:p-2 lg:p-4">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-text-primary ">Dashboard</h1>
        <UserProfile name="Hans Adzkia" avatarUrl="https://i.pravatar.cc/150?u=hans" />
      </div>
      <BreadCrumb></BreadCrumb>
      </main>
   </>
  )
}

export default DashboardNav