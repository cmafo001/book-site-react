import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import j1 from './welcome/info1.json'; 
import j2 from './welcome/info2.json';


function Home() {
  const [jsonData, setJsonData] = useState({});
  const h = Math.floor(Math.random() * 2) + 1;

  useEffect(() => {
    if (h === 1) {
      setJsonData(j1);
    } else if (h === 2) {
      setJsonData(j2);
    }
  }, [h]);

  return (
    <div className='welcome-text'>
      <h1>{jsonData.title}</h1>
      <button><Link to="/Library">{jsonData.bob}</Link></button>
      <h1></h1>
    </div>
  );
}
export default Home;
