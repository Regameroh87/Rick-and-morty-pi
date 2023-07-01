import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";


function App() {

   const [characters, setCharacters]= useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();    
   const EMAIL = "rodri@mail.com";
   const PASSWORD = "Rodri87#";
   
   function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldchars) => [...oldchars, data]);
         }
      })
      .catch (error => window.alert(error.response.data.error));
   };

   function onClose (id){
      const newCharacters = characters.filter((character)=>character.id !== Number(id));
      setCharacters(newCharacters);
   };

   return (
      <div className='App'>
         {location.pathname !== "/" && (<Nav onSearch={onSearch}/>)}
         <Routes>
            <Route path="/" element={<Form login={login} />} 
            />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}
             />
            <Route path="/about" element= {<About />}
             />
            <Route path="detail/:id" element={<Detail />}
             />
             <Route path="/favorites" element={<Favorites />}
             />
         </Routes>
      </div>
   );
}

export default App;
