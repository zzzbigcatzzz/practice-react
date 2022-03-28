import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
      <div className='body'>
        <main>
            <section className='heading'>
                <h1>TRAINING REACTJS BLUECOGLOBAL</h1>
            </section>
            <Outlet />
        </main>
      </div>
  )
}
