  import React, { useEffect, useState } from 'react'
  import { getDetails } from '../../Api/Api'
   import { useParams } from "react-router-dom";
import Loading from '../loading/loading';
     
  

  
  export default function ItemDetails() {
    let [Details, setDetails] = useState("");
    let x = useParams();
    async function getdata() {
      let data = await getDetails(x.id, x.media_type);
      setDetails(data);
    }
    useEffect(() => {
      getdata();
    }, []); 
    return (
      <>
        {Details ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-4" style={{borderRadius:"4px"}}>
                  <img 
                    className="w-100"
                    src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="col-md-7">
                  <div className="datadetails">
                    <h2 style={{color:"white"}}>
                      {Details.name}
                      {Details.title}
                    </h2>
                    <p className="secondFontColor" style={{color:"white"}}>{Details.tagline}</p>
                    {Details.genres.map((value, index) => (
                      <span className="badge bg-info p-2 mx-2" key={index}>
                        {value.name}
                      </span>
                    ))}
                    <ul style={{color:"white"}}>
                      <li>vote : {Details.vote_average}</li>
                      <li>vote count : {Details.vote_count}</li>
                      <li>popularity : {Details.popularity}</li>
                      <li>
                        release date : {Details.first_air_date}
                        {Details.release_date}
                      </li>
                    </ul>
                    <p className="secondFontColor " style={{color:"white"}}>{Details.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  }