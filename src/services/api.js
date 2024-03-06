import axios from "axios";
 
const getCharacter = (page=1) =>  axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);

export {
    getCharacter
};