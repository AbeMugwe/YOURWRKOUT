import { useState,useEffect } from "react"
import  {abeFetch,wrkoutOptions} from "../../Hooks/abeFetch"
import useFetch from "../../Hooks/abeFetch";
import './Search.css'
import { IoIosSearch } from "react-icons/io";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";



const SearchBar=()=>{
    const [search,setSearch]=useState('squat')
    

    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=15`;
    
    const handleSearch=()=>{
        e.preventDefault()
        setSearch(wrkouts)
    }
    
    
    const wrkouts = useFetch(url, wrkoutOptions)
    console.log(wrkouts)

    if(wrkouts===null){
        return (
            <h1>Loading...</h1>
        )
    }
    



    return(
        <div>
            <NavBar/>
            <form action="" onSubmit={handleSearch} className="search-container">
                <input className="search-bar" type="text" value={search} placeholder="Which wrkout are you looking for..." onChange={e => setSearch(e.target.value)} />
            <button className="submit" type="submit"><IoIosSearch/></button>
            </form>
            {
                wrkouts && wrkouts.map((searched,index)=>{
                    return(
                        <div className="card" key={index}>
                            <div className="card-text">
                                 <img src= {searched.gifUrl} alt="" />
                            </div>
                            <div>
                                <h3>{searched.name}</h3>
                                <h4>{searched.target}</h4>
    
                            </div>
                        </div>
 
                    )
                })
            }

            
        </div>
    )


    
}

export default SearchBar