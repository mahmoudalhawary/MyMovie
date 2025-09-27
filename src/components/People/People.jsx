import React, { useEffect, useState } from 'react';
import { getTrending } from '../../Api/Api';
import Loading from '../loading/loading';
import "../../index.css"

export default function People() {
  const [people, setPeople] = useState([]);

  async function getData() {
    let peopleData = await getTrending("person");
    setPeople(peopleData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
       {people.length > 0 ? (
        <div className="container my-5">
          <div className="row">
            {people.map((value, index) => (
              <div className="col-md-2 my-3" key={index}>
                <div>
                  <div className="item overflow-hidden">
                    <img
                      className="w-100"
                      src={
                        value.profile_path
                          ? "https://image.tmdb.org/t/p/w500" + value.profile_path
                          : "https://cdn.shopify.com/s/files/1/2076/3791/products/3151RuMAE0L._SL1000_grande.jpg?v=1589581656"
                      }
                      alt={value.original_name}
                    />
                   
                  </div>
                  <div>
                    <h5 style={{ fontStyle: 'italic', color: '#fff' }} className="my-3">
                      {value.name}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      ) : (
        <Loading />
      )}
    </>
  );
}
