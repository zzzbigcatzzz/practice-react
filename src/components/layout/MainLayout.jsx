import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const MainLayout = () => {
  const navigate = useNavigate()
  const handleChangeSelectionApp = (e) => {
    navigate(`${e.target.value}`)
  }
  return (
      <div className='body'>
        <main>
            <section className='heading'>
                <label>
                  <h1>CHỌN ỨNG DỤNG:</h1>
                </label>
                <select onChange={(e) => handleChangeSelectionApp(e)} name='mainMenu' className='mainMenu'>
                  <option value="" selected disabled hidden>Chọn</option>
                  <option value="/calculation">Máy tính</option>
                  <option value="/gen-password">Tạo password ngẫu nhiên</option>
                  <option value="/move-object">Di chuyển item</option>
                </select>
            </section>
            <Outlet />
        </main>
      </div>
  )
}
