import axios from "axios"
import { useEffect, useState } from "react"
import Button from "./buttonInputs/button"
import { useContext } from "react"
import { themeContext } from "../contexts/theme.contexts"
import '../App.css'
import { Link } from "react-router-dom"

const ListPokemon = () => {

    const { theme } = useContext(themeContext)
    
    const [limit, setLimit] = useState(10)
    const [pokemon, setPokemon] = useState([]);
    
   useEffect(() => {
        const axiosPok = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
            .then(item => setPokemon(item.data.results))
        }
        axiosPok()
      
   },[limit])

   
    return(
       <section className="listPokemon" style={{color: theme.color , background: theme.background}}>
         <ul style={{display:'flex', flexWrap:'wrap'}}>
            {
             pokemon.map((item, index) => (
               <Pokemons key={index} data={item}/>
               ))
            }
         </ul>
         <Button limit={limit} setLimit={setLimit} />
       </section>
       
    )
}



const Pokemons = ({ data }) => {

    const [details, setDetails] = useState(null)

    useEffect(() => {
       axios.get(data.url).then(item => setDetails(item.data))
    },[data.url])

    if(details == null){
        return <li>-</li>
    }

    return (
       
        <li>
          <Link to={`/${details.name}`}>
            <img src={details.sprites.front_default} alt="imagem pokemon" />
            <h3>{details.name}</h3>
         </Link>
        </li>
    
    )
}

export default ListPokemon