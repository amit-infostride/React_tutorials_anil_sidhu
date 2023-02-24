import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import HomeReactRouter from './HomeReactRouter'


const ReactRouter = () => {
    return (
        <div>
            <h1>ReactRouter</h1>
             
             <Link to='/about'>About </Link>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<HomeReactRouter />} />
                  

                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default ReactRouter