import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/app.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // https://reactrouter.com/docs/en/v6/getting-started/overview
import reportWebVitals from './reportWebVitals'
import { MainLayout } from './components/layout/MainLayout'
import { GenPassword } from './components/pages/GenPassword'
import { Calculator } from './components/pages/Calculator'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/* MainLayout sẽ dùng chung cho các page */}
                <Route path='/' element={<MainLayout/>}>
                    {/* Các element sẽ nằm trong MainLayout */}
                    <Route path='/calculation' element={<Calculator/>}/>
                    <Route path='/gen-password' element={<GenPassword/>}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
