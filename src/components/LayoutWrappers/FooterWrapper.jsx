"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/navbar'

export const FooterWrapper = () => {
    const pathname = usePathname()
    const isAdminRoute = pathname.startsWith("/admin")
  if(isAdminRoute)return null;
  
  return <Footer />
}
 