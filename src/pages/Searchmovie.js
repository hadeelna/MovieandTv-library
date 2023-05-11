import React, {useState } from 'react'
import styles from './Search.module.css';
import Movielist from '../components/searches/Movielist';

const Searchmovie = () => {
  const [query, setQuery] = useState("");


  const [ls ,setLs]= useState([])
  
  const onSearch = async (e) => {
    setQuery(e.target.value);
    let api = `http://localhost:9000/api/movie/${query}`;
    onClickButoon(api)}
  
  const onClickButoon = async(api) => {
    try {
      const response = await fetch(api);
      if(!response.ok){
        console.log("you have something wrong")
      }
      const list = await response.json();
      console.log(list)
      setLs(list);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className={styles.s}>
        
        <form className={styles.form1}>
          <div>
            <input className={styles.i}type="text"
              value={query}
              placeholder="Search movie"
              name="search"
              onChange={(e) => setQuery(e.target.value)}
              required
               />  
                      <button onClick={onSearch} className={styles.btn2} type='button'>Search</button>

          </div>
        </form>
      </div>
      <Movielist ls = {ls} type="search"/>
    </div>
  )
}
export default Searchmovie