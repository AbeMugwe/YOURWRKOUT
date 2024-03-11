import { useState,useEffect } from "react"
import  {wrkoutOptions} from "../../Hooks/abeFetch"
import '../Cards/Cards.jsx'
import './Search.css'
import { IoIosSearch } from "react-icons/io";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../loading/loading";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";




const SearchBar=()=>{
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

    const [save,setSave]=useState(JSON.parse(localStorage.getItem('saved'))|| [])

    const handleSave=(wrkout)=>{
        const isSaved=save.some(savWrkout => savWrkout.id===wrkout.id)

        if (!isSaved){
            const updatedSaved=[...save,wrkout];
            setSave(updatedSaved)
            localStorage.setItem('saved',JSON.stringify(updatedSaved))
        } else {
            const updatedSaved=save.filter(savWrkout=> savWrkout.id !== wrkout.id)
            setSave(updatedSaved)
            localStorage.setItem('saved',JSON.stringify(updatedSaved))
        }

    }

    const isSaved =(wrkout)=> {
        return save.some(savWrkout=> savWrkout.id===wrkout.id)
    }

    

    if(wrkouts.length===0){
        return (
            <Loading/>
        )
    }



    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <div className="main">
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
        <h3 style={{fontFamily:'', color: "white", display: "flex", justifyContent: "center", margin: "20px 0"}}>Showing { search ? search : "All" } Workouts</h3>
        <div className="card-container">
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
            <div className='card-detail'>
            <h3>{filteredWrkout.name} <button onClick={()=>handleSave(filteredWrkout)} className="save">
                            {isSaved(filteredWrkout)  ? <button className="saved"><FaBookmark/></button> : <FaRegBookmark/>}</button></h3>
              <p>{filteredWrkout.target}</p>
              <Link to={`/wrkoutdetail/${index}`} state={filteredWrkout}>Wrkout Details <FaArrowRight/></Link>
            </div>
          </div>
            )
        })
      }
        </div>


    </div>
  );
    


    
}

export default SearchBar


//   const [search,setSearch]=useState('squat')
    

//     const url = `https://exercisedb.p.rapidapi.com/exercises/name/${search}`;
    
//     const handleSearch=()=>{
//         e.preventDefault()
//         setSearch(wrkouts)
//     }
    
    
//     const wrkouts = useFetch(url, wrkoutOptions)
//     console.log(wrkouts)

//     if(wrkouts===null){
//         return (
//             <h1>Loading...</h1>
//         )
//     }
    



//     return(
//         <div>
//             <NavBar/>
//             <form action="" onSubmit={handleSearch} className="search-container">
//                 <input className="search-bar" type="text" value={search} placeholder="Which wrkout are you looking for..." onChange={e => setSearch(e.target.value)} />
//             <button className="submit" type="submit"><IoIosSearch/></button>
//             </form>
//             {
//                 wrkouts && wrkouts.map((searched,index)=>{
//                     return(
//                         <div className="card" key={index}>
//                             <div className="card-text">
//                                  <img src= {searched.gifUrl} alt="" />
//                             </div>
//                             <div>
//                                 <h3>{searched.name}</h3>
//                                 <h4>{searched.target}</h4>
    
//                             </div>
//                         </div>
 
//                     )
//                 })
//             }

            
//         </div>
//     )