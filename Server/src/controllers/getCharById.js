/* const axios = require("axios");

function getCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      try {
        const character = {
          id: response.data.id,
          name: response.data.name,
          gender: response.data.gender,
          species: response.data.species,
          origin: response.data.origin,
          image: response.data.image,
          status: response.data.status,
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Fount");
      }
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
} */
const axios=require("axios");
const URL= "https://rickandmortyapi.com/api/character/"


const getCharById = async (req,res)=>{
const id = parseInt(req.params.id)
try {
  const { data } = await axios.get(URL+id)
  const {
    name,
    gender,
    species,
    origin: { name: origin },
    image,
    status,
  } = data;

  const character = {
    id,
    name,
    gender,
    species,
    origin,
    image,
    status,
  };
  res.status(200).json(character)
} catch (error) {
    res.status(404).send("Not Found")
}
}


/* axios.get(URL+id)
.then((response)=>{
    const character= response.data
    if (character.error) {
        res.status(404).send("Not Found")
    } else {
    const{id,name,gender,species,origin,image,status}=response.data;
    res.status(200).json({id, name, gender, species, origin, image, status})
    }    
})
.catch((error)=>{
    if (error.response.status === 404) {
        res.status(404).send("Not Found")
    } else {
    res.status(500).json(error.message)
    }
}) */ 

module.exports = getCharById

