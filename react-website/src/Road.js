import React, { useState, useEffect } from 'react';

import './Road.scss';

function Road() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
        return (
            <section className="Road">
                <div className="Road__background" 
                style={{ transform: `translateY(-${offsetY * 0.1}px)` }}/>
                <div className="Road__background-car" 
                style={{ transform: `translateY(${offsetY * 3}px)` }}/>             
            </section>
        );
    
};

export default Road;