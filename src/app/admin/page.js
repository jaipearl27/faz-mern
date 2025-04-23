"use client"
import AdminNavbar from '@/components/AdminComponents/AdminNavbar';
import ListCategories from '@/components/AdminComponents/ListCategories';
import ListProducts from '@/components/AdminComponents/ListProducts';
import ListServices from '@/components/AdminComponents/ListServices';
import {
  LogoutLink
} from '@kinde-oss/kinde-auth-nextjs/components';
import React from 'react';

const Page = () => {
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/**  Services */}
        <div className='mb-6'>
          <span>Services</span>
          <div>
           <ListServices />
          </div>
        </div>
        {/** Products */}
        <div className='mb-6'>
          <span>Products</span>
          <div>
            <ListProducts />
          </div>
        </div>
        {/** Categories */}
        <div>
          <span>Categories</span>
          <div>
            <ListCategories />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;