import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import NavBar from "../NavBar";
import useFetch, { wrkoutOptions } from "../../Hooks/abeFetch";
import Loading from "../loading/loading";
import "./Search.css";

const SearchBar = () => {
    const [search, setSearch ] = useState("")
    const [ wrkouts, setWrkouts ] = useState([])
    let url = "https://exercisedb.p.rapidapi.com/exercises?limit=100"

    const fetchSearch = async (urlEndpoint)=>{
        const response = await fetch(urlEndpoint, wrkoutOptions)
        const data = await response.json()
        setWrkouts(data)
    }

    useEffect(()=>{
        fetchSearch(url)
        console.log(wrkouts)

    },[])



    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <div>
      <NavBar />
      <form action="" className="search-container">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Which workout are you looking for..."
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          <IoIosSearch />
        </button>
      </form>
        <h3 style={{color: "white", display: "flex", justifyContent: "center", margin: "20px 0"}}>Showing { search ? search : "All" } Workouts</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8%", justifyContent: "center"}}>
        {
        wrkouts.filter((wrkout) =>{
            if (!search || wrkout.bodyPart.toLowerCase().includes(search.toLowerCase()) || wrkout.name.toLowerCase().includes(search.toLowerCase())) {
                return wrkout
            }
        }).map((filteredWrkout, index)=>{
            return (
                <div className="card" key={index}>
            <div className="card-text">
              <img src={filteredWrkout.gifUrl} alt="" />
            </div>
            <div>
              <h3>{filteredWrkout.name}</h3>
              <h4>{filteredWrkout.target}</h4>
            </div>
          </div>
            )
        })
      }
        </div>


    </div>
  );
};

export default SearchBar;
