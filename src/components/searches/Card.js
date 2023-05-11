import axios from 'axios'
import React, { useState } from 'react'
import styles from './moviecard.module.css';

const Card = ({ movie, type }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [check, setCheck] = useState(false);
    const [act, setAct] = useState("")
    const [similar, setsimilar] = useState("")

    const getActors = async () => {
        setShowModal(true);
        let api;
        if (type === "search") { api = `http://localhost:9000/api/movie/${movie.id}/credits` }
        else { api = `http://localhost:9000/api/tv/${movie.id}/credits` }
        let arr = [];
        const actors = await axios.get(api)
        actors.data.cast.map((item, index) => {
            arr[index] = item.original_name;
        })
        setAct(arr.join(" , "))

        console.log(setAct)
        console.log(arr)
        setCheck(!check);        

    }
    const getsimilar = async () => {
        setShowModal2(true);

        let api;
        if (type === "search") { api = `http://localhost:9000/api/movie/${movie.id}/similar` }
        //const similar = await axios.get(api)
        //setsimilar(similar);
        let arr = [];
        const similar = await axios.get(api)
        console.log(similar.data.results)
        similar.data.results.map((item, index) => {
            arr[index] = item.original_title;
        })
        setsimilar(arr.join(","))
    }
    return (
        <div>
            <div className={styles.movie}>
                <div className={styles.pict}>
                    {movie.poster_path ? (
                        <img className={styles.img}
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                        />
                    ) : (
                        <div className="filler-poster" />
                    )}
                
                <div className={styles.box}>
                  <h4 className="title">{movie.title}</h4>
                        <h4 className={styles.title}>{movie.name}</h4>
                    <h3 className={styles.vote_average}>voteaverage:{movie.vote_average}</h3>
                </div></div>
                <div className= {styles.overview}>
                    <h4> {movie.overview}</h4>
                </div>
                <div className={styles.b}>
                <h1>{check ? <h1></h1> : <h1></h1>}</h1>
                {type !== "popular"    ? <button className={styles.btn} onClick={getActors } ><p>actors </p></button> : null} 
 
                    {act.length>0 && showModal && (
         <div style={{ position: "fixed", top: "10%", left: "50%" }}>
            <div
              style={{
                width:"40%",
                height:"50%",
                background: "white",
                padding: "20px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
             
            > 
           <div onClick={() => setShowModal(false)}>  <div ><h5>Names of the actors</h5>{act}{console.log(act)}</div><button>ok</button> </div>
            </div>
            </div>        
      )}
                
                
                {type !== "popular" && type !== "tv" ?
                <button className={styles.btn}  onClick={getsimilar}> <p>similar </p></button>: null}
                
                {similar.length>0 && showModal2 && (
         <div style={{ position: "fixed", top: "10%", left: "50%" }}>
            <div
              style={{
                width:"40%",
                height:"50%",

                background: "white",
                padding: "20px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
             
            > 
           <div onClick={() => setShowModal2(false)}> <div><h5>Names of the similar</h5>{similar}{console.log(similar)}</div><button>ok</button> </div>
            </div>
            </div>        
      )}
              </div>
                </div>
            </div>
    )
}
export default Card;