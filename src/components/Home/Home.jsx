import React, { useEffect, useState } from 'react'
import axios from 'axios'//defalt export
import Item from '../Item/Item'
import Loading from '../loading/loading'
import { Offline } from 'react-detect-offline'
import Disconnected from '../disconnected/disconnected'


export default function Home() {

  const [Movies, setMovies] = useState([])
  const [Tvs, setTvs] = useState([]);

  let getTrending = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361`)
    setMovies(data.results)
  }

 
  let getTrendingTV = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361`)
    setTvs(data.results)
  }

  useEffect(() => {
    getTrending();
    getTrendingTV();
  }, []
  )
  // {getTrendingTV()},[]}





  return (

    <   >
      <Offline><Disconnected /></Offline>
      {Movies.length > 0 ?

        <div className="containar  mx-5">
          <div className="row mx-5">
            <div className="col-md-4 pt-5">
              <div>
                <div className="1rdr w-25"></div>
                <h2>Trending <br /> Movies <br /> To Watch Now</h2>
                <p>Most watched Movies by Days</p>
                <div className="brdr w-100"></div>
              </div>

            </div>
            {Movies.map((value, index) => <Item key={index} data={value} />)}
          </div>
          <div className="row mx-5">
            <div className="col-md-4 pt-5">
              <div>
                <div className="1rdr w-25"></div>
                <h2>Trending <br /> Tv <br /> To Watch Now</h2>
                <p>Most watched Movies by Days</p>
                <div className="brdr w-100"></div>
              </div>

            </div>
            {Tvs.map((value, index) => <Item key={index} data={value} />)}
          </div>


        </div> : <Loading />}
    </>
  )
}
