import Card from "../Card/Card"
import { filterCard, orderCards } from "../../Redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

export default function Favorites() {

    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites)

    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCard(event.target.value));
    }

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="a">Ascendente</option>
                <option value="d">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            {myFavorites?.map((character) => (<Card 
                 key={character.id}
                 id={character.id}
                 name={character.name}
                 status={character.status}
                 species={character.species}
                 gender={character.gender}
                 origin={character.origin}
                 image={character.image}
                 onClose={character.onClose}
            />))}
        </div>
    )
}



