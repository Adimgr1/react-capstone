// import { useContext } from "react";
// import { Loading_context } from "../Context/Loading";
// let {error,setError}= useContext(Loading_context)
// console.log(error)
let fetchid = async (genre, final_Result) => {
  const url = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre}/`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c0e3fe1514mshb1e3ff0a1b56487p11a6f5jsn6995fb2dccb0",
      "x-rapidapi-host": "moviesminidatabase.p.rapidapi.com",
    },
  };
  try {
    let response = await fetch(url, options);
    response = await response.json();
    response = response.results.map((item) => {
      return item.imdb_id;
    });

    const allpromises = response.map((items, idx) => {
      if (idx < 5) {
        return fetchMovie(items,final_Result);
      } else {
        return;
      }
    });
    await Promise.all(allpromises);
  } catch (error) {
    console.log(error);
  }
};
let fetchMovie = async (data, final_Result) => {
  const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${data}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c0e3fe1514mshb1e3ff0a1b56487p11a6f5jsn6995fb2dccb0",
      "x-rapidapi-host": "moviesminidatabase.p.rapidapi.com",
    },
  };

  try {
    let response2 = await fetch(url, options);
    response2 = await response2.json();
    final_Result.push({
      img: response2.results.image_url,
      name: response2.results.title,
      trailer: response2.results.trailer,
    });
  } catch (error) {
    console.error(error);
  }
};

export async function final(genre) {
  let final_Result = [];
  await fetchid(genre,final_Result);
  return final_Result
}

