"use client"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"
import Link from "next/link"

const AdminNavbar = () => {
  return (
    <div>  
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <div className="flex items-center">
                {/* <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                  Admin
                </span> */}
                <Link href={`/admin/add-product`}>
                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                  Add Product
                </span>
                </Link>
                 <Link href={`/admin/addCategory`} >
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    Add Product Category
                  </span>
                 </Link>
                 <Link
                  href={`/admin/add-service`}
                 >
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    Add Service
                  </span>
                 </Link>
                <div className="relative">
                   <LogoutLink> Sign Out </LogoutLink>
                </div>
                
              </div>
            </div>
          </header>
    </div>
  )
}

export default AdminNavbar