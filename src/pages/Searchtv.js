import React, { useState } from 'react'
import styles from './Search.module.css';
import Movielist from '../components/searches/Movielist';
import { type } from '@testing-library/user-event/dist/type';


const Searchtv = () => {
    const [querytv, setQuerytv] = useState("");
    const [tv ,settv]= useState([])
    const onSearchTv = async (e) => {
        setQuerytv(e.target.value);
        let api2 = `http://localhost:9000/api/tv/${querytv}`;
        onClickButton2(api2)
        }
        
      const onClickButton2 = async(api2) => {
        try {
          const response = await fetch(api2);
          if(!response.ok){
            console.log("you have something wrong")
          }
          const result = await response.json();
          settv(result.results );
          console.log(result)
        } catch (error) {
          console.log(error)
        }}
  return (
    <div>      <div>
    <form className={styles.form2}>
        <div>
          <input  type="text"
            value={querytv}
            placeholder="Search a TV"
            name="searchTV"
            onChange={(e) => setQuerytv(e.target.value)}
            required
        />  
                    <button onClick={onSearchTv} type='button'>{console.log(type)}Search</button>

        </div>
      </form>
      </div>
      <Movielist ls = {tv} type="tv"/>
</div>
  )
}



export default Searchtv