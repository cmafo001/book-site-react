import React, { lazy, Suspense } from 'react'
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import("./Pages/Home"));
const Library = lazy(() => import("./Pages/Library"));
const Blog = lazy(() => import("./Pages/Blog"));
const MyList = lazy(() => import("./Pages/MyList"));

function App() {

  return (
    <>
    <div className="ag-theme-material grid-container">
      <Navbar />
      <div className='container'>
      <Suspense fallback = {<h1>Loading....</h1>} >
        <Routes>   
            <Route path='/' element={<Home/>} />
            <Route path='/Library' element={<Library/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/MyList' element={<MyList />} />
        </Routes>
        </Suspense>
      </div>
    </div>
    <footer>
      <div>{new Date().toISOString().split('T')[0]}</div>
    </footer>
    </>
  )
}

export default App;