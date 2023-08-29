import React, { useEffect, useState } from 'react';
import pic1 from './blogs/pic1.png';
import pic2 from './blogs/pic2.png';
import klog1 from './blogs/klog1.json';
import klog2 from './blogs/klog2.json';

function Blog() {
  const [jsonData, setJsonData] = useState({});
  const [picData , setPicData] = useState ({});
  const x = Math.floor(Math.random() * 2) + 1;


  useEffect(() => {
    if (x === 1) {
      setJsonData(klog1);
      setPicData(pic1);
    } else if (x === 2) {
      setJsonData(klog2);
      setPicData(pic2);
    }
  }, []);

  return (
    <div className='blog'>
      <h1>{jsonData.title}</h1>
      <p>{jsonData.explanation}</p>
      <img src={picData} alt='Pic' style={{ width: "30%" }} />
    </div>
  );
}
export default Blog;
