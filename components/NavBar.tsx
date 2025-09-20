"use client";

import Image from 'next/image'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'

function NavBar() {
  const { data: session } = useSession();

  return (
    <div className='flex items-center gap-5'>
      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Home</h2>
        <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>History</h2>
        <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Contact Us</h2>
      </div>
      
      {session && (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <span className="text-sm font-medium">{session.user?.name}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default NavBar