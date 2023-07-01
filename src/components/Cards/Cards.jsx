import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
  return (
    <div classname={styles.divCards}>
     {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.stats}
          species={character.spcies}
          gender={character.ender}
          origin={character.oigin}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}