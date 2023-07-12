import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";

export function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  myFavorites,
  addFav,
  removeFav,
}) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    let character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      onClose,
    };

    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  }

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.divCard}>
      <div className={styles.botones}>
        {isFav ? (
          <button className={styles.botonFav} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.botonFav} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button classnName={styles.botonClose} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <div>
        <img className={styles.image} src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <h2 className={styles.name}>{name}</h2>
        </Link>
      </div>
      <div className={styles.divInfo}>
        <div>
          <h3>STATUS: {status}</h3>
          <h3>SPECIES: {species}</h3>
          <h3>GENDER: {gender}</h3>
          <h3>ORIGIN: {origin}</h3>
        </div>
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
