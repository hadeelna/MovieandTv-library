import React from 'react'
import Card from './Card'
import styles from './moviecard.module.css';

const Movielist = ({ls,type}) => {
  return (
    <ul >
    {ls.length > 0 && (
              <ul className={styles.results}>
                
                    {ls.map((movie) => (
                <li key={movie.id}>
                  <Card  movie={movie} type={type} />
                
  
                                {console.log(type)}

                </li>
              ))}
              </ul>
  
      )}  
    </ul>  
)}

export default Movielist