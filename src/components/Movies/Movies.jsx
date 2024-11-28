import axios from 'axios'
import Item from '../Item/Item'
import React, { useEffect, useState } from 'react'
import Loading from '../loading/loading'
import { Offline } from 'react-detect-offline'
import Disconnected from '../disconnected/disconnected'

export default function Movies() {


    const [Movies, setMovies] = useState([])

    let getTrending = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361`)
        setMovies(data.results)
    }
    useEffect(() => {
        getTrending()
    }, []
    )



    return (
        <   >                    <Offline><Disconnected /></Offline>

            {Movies.length > 0 ?

                <div className="containar mx-5">
                    <div className="row mx-5">

                        {Movies.map((value, index) => <Item key={index} data={value} />)}
                    </div>
                </div> : <Loading />
            }
        </  >
    )
}
