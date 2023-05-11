import React from 'react'
import styles from './moviecard.module.css';

const Moviecard = ({movie}) => {

    return (
        <div>
            
     <div className={styles.box}>
            </div>
            <div className={styles.overview}>     
            
               <h4 className={styles.title}>{movie.title}</h4>

               <h4 className={styles.title} >{movie.overview}</h4>
                {/* {movie.id} */}
            </div>
        </div>
    )
}

export default Moviecard



