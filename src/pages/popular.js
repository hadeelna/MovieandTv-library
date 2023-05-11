import React from 'react'
import { useState, useEffect } from 'react'
import Movielist from '../components/searches/Movielist';
import NewList from '../components/searches/NewList';

const popular = () => {
  const [p, setLs] = useState([])
  const [L, setlatest] = useState("")

  const onLast = async (e) => {
    let api2 = `http://localhost:9000/api/movie/latest`;
    onClickButton2(api2);
  }
  const onClickButton2 = async (api2) => {
    try {
      const response = await fetch(api2);
      if (!response.ok) {
        console.log("you have something wrong")
      }
      const results = await response.json();
      setlatest(results);
      console.log(results);
    } catch (error) {
      console.log(error)
    }
  }
  let api = `http://localhost:9000/api/movie/popular`;
  useEffect(() => {
    const onClickButton = async (api) => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          console.log("you have something wrong")
        }
        const result = await response.json();
        console.log(result)
        setLs(result.results);
      } catch (error) {
        console.log(error)
      }
    }
    onClickButton(api);
  }, [])


  return (
    <div> 


      <h3>  Get The name  of the Newest Movie</h3>
      <button onClick={onLast}>Click </button>
      <NewList movie={L} />
      {console.log(p)}
      <Movielist ls={p} type="popular" />
    </div>
  )
}

export default popular