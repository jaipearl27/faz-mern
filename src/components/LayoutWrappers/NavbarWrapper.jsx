"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
 
import { Navbar } from '../layout/navbar'

export const NavbarWrapper = () => {
    const pathname = usePathname()
    const isAdminRoute = pathname.startsWith("/admin")
    if(isAdminRoute)return null;
  
     return <Navbar />
}
 