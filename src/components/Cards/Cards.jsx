import { useState } from "react";
import useFetch from "../../Hooks/abeFetch";
import { GiGymBag } from "react-icons/gi"
import { GiShoulderArmor } from "react-icons/gi";
import { GiStrongMan } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";
import { GiLeg } from "react-icons/gi";
import './Card.css'
import { useContext} from "react";
import { AuthContext } from '../Context/authContext';
import image from '../../assets/wrklogo1.jpg'
import '../../pages/auth/auth.css'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../loading/loading";


const Cards=()=>{
    const { session } = useContext(AuthContext)

    const[url,setUrl]=useState('https://exercisedb.p.rapidapi.com/exercises?limit=30')
    const[value,setValue]=useState('chest')
    const[add,setAdd]=useState(10)
    
    const wrkoutOptions={
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a2cb41f5a7msh72ed1a7e806ae64p175ed6jsne06c55c1c492',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }
    const wrkouts = useFetch(url, wrkoutOptions)
    const handleAll=()=>{
        setValue('All')
        setUrl(`https://exercisedb.p.rapidapi.com/exercises?limit=${add}`)
    }
    const handleBack=()=>{
        setValue('back')
        setUrl(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}?limit=10`)
    }
    const handleChest=()=>{
        setValue('chest')
        setUrl(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}?limit=10`)
    }
    const handleLegs=()=>{
        setValue('lower%20legs')
        setUrl(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}?limit=10`)
    }
    const handleLarms=()=>{
        setValue('lower%20arms')
        setUrl(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}?limit=10`)
    }
    const handleUarms=()=>{
        setValue('upper%20arms')
        setUrl(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}?limit=10`)
    }
    const handleShoulders=()=>{
        setValue('shoulders')
        setUrl(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${value}?limit=10`)
    }

    const loadMore=()=>{
        setAdd(add+10)
    }

    

    if(wrkouts===null){
        return (
            <Loading/>
        )
    }

    return(
        <div className='main'> 
            <div className="Horizontal" >
                <button className="part" onClick={handleAll}><GiGymBag/></button>
                <button className="part" onClick={handleBack} value={value}>Back</button>
                <button className="part" onClick={handleChest} value={value} ><GiShoulderArmor/></button>
                <button className="part" onClick={handleLegs} value={value}><GiLeg/></button>
                <button className="part" onClick={handleLarms}><GiBiceps/></button>
                <button className="part1" onClick={handleUarms}><GiBiceps/></button>
                <button className="part" onClick={handleShoulders}><GiStrongMan/></button>
            </div> 
            <h1 style={{color:"white"}}>Showing Results for:{value}</h1>
            {session ? <div className="card-container">
            {wrkouts.map((wrkout,index)=>{
                return(
                    <div className="card" key={index}>
                        <div className="card-text">
                             <img src= {wrkout.gifUrl} alt="" />
                        </div>
                        <div className="card-detail">
                            <h3>{wrkout.name}</h3>
                            <p>{wrkout.target}</p>
                            <Link to={`/wrkoutdetail/${index}`} state={wrkout}>Wrkout Details <FaArrowRight/></Link>

                        </div>
                        
                    </div>
                )
            })}
        </div>
        : <div>
            <div className='auth-image'>
                <img src={image} alt="" />
            </div>
            <div className="please">Oh no!! you dont have an account?.. or have you logged out? To see YOURWRKOUT Register Now! or Log back in</div>
        </div>
            }
       
        
        </div>
    )

   



}

export default Cards