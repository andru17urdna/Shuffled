import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './LocationBar.css';

// function LocationBar({ location }) {




//     return (
//         <span id='location__bar--Container'>
//             <h1 id='location__bar--h1'>{location}</h1>
//         </span>
//     )
// }


import { useState, useEffect } from "react";


const LocationBar = ({ location }) => {
 const [pageURL, setPageURL] = useState(0);

  useEffect(() => {
      const place = window.location.pathname;
      console.log(place)

      if (place.includes('browsecards')){
          setPageURL("CARDS");
      } else if (place.includes('onecard')){
        setPageURL("CARD")
      } else if (place.includes('browsestore')){
        setPageURL("CARD")
      } else {
        setPageURL(null)
      }
  })

         if (pageURL === "CARDS") {
            return (
            <div id='location__bar--Container'>
              <h1 id='location__bar--h1'>{pageURL}</h1>
             </div>
                );
        } else if (pageURL === "CARD") {
            return (
                <div id='location__bar--Container-card'>
                  <h1 id='location__bar--h1-card'>{pageURL}</h1>
                 </div>
             );
        } else if (pageURL === "STORE") {
            return (
                <div id='location__bar--Container-store'>
                  <h1 id='location__bar--h1-store'>{pageURL}</h1>
                 </div>
             );
        }

        return null


}







