import styles from "./Card.module.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions"
import { connect } from "react-redux"

export function Card({ id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav}) {
  
const[isFav,setIsFav] = useState(false);

  function handleFavorite (){
    let character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      onClose
    }

    if (isFav) {
      setIsFav(false)
      removeFav(id)
    }
    else {
      setIsFav(true)
      addFav(character)
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [myFavorites]);

  return (
    <div className={styles.divCard}>
      <div className={styles.divInfo}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
        <button onClick={() => onClose(id)}>X</button>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h4>{status}</h4>
        <h4>{species}</h4>
        <h4>{gender}</h4>
        <h4>{origin}</h4>
      </div>
        <img className={styles.Image} src={image} alt="" />
    </div>
  );  
};

export const mapDispatchToProps = (dispatch) => {
  return{
    addFav:(character) => dispatch(addFav(character)),
    removeFav:(id) => dispatch(removeFav(id))
  };
};

 export const mapStateToProps= (state) =>{
  return {
    myFavorites: state.myFavorites
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)