import React, {useEffect, useState } from 'react'
import styles from './HomePage.css'
const homepage = () => {
         const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (

    <div>
           <div className={styles.bd}>
</div>
         {showPopup && (
         <div style={{ position: "fixed", top: "50%", left: "50%" }}>
         <div
           style={{
       size:"auto",
       width:"20rem",
       height:"18rem",
             background: "white",
             padding: "20px",
             border: "1px solid black",
             borderRadius: "5px",
             position: "absolute",
             top: "50%",
             left: "50%",
             transform: "translate(-50%, -50%)",
           }}>
          <div className="popup-content">
            </div>
              
            <h2>Welcome to my website!</h2>
            <p>You can type  the name of a movie or series, and you will get an overview about it.<br/>
               *You can also see the names of the actors in the movie <br/> and the names of movies and series that are similar.
<br/>***Note: Not all movies and series we have an information about the names of the actors or similar series and movies
.</p>  
                      <button className="close-btn" onClick={closePopup}> ok  </button>


          </div>
        </div>
      )}
    </div>
  )
}

export default homepage