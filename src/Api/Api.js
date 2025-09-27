import axios from "axios";

// export let getTrending =async (MediaType)=>{
//     let {data}=await axios.get
// }

export let getDetails = async (id, media_type) => {
  let { data } = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`
  );
  // let {xdata} = await axios.get(`https://api.themoviedb.org/3/movie/505642?api_key=52bbcddeda849047525b51d6f8a12361`);
  // let {xdsata} = await axios.get(`https://api.themoviedb.org/3/movie/week?api_key=52bbcddeda849047525b51d6f8a12361`);
  return data;
};
export let getTrending = async (value) => {
  let { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/${value}/day?api_key=52bbcddeda849047525b51d6f8a12361`
  );
  return data.results;
};
export let axiosPost = async (formData, endPoint) => {
  let { data } = await axios.post(
    `https://route-egypt-api.herokuapp.com/${endPoint}`,
    formData
  );
  return data;
};
