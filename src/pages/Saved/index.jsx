import { FaBookmark } from "react-icons/fa";
import { useState,useEffect } from "react";
import '../../components/Cards/Card.css'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import './Saved.css'
import { TbMoodCry } from "react-icons/tb";


const SavedWrkouts=()=>{
    const[saved,setSaved]=useState([])

    const fetchSaved=()=>{
        const data= JSON.parse(localStorage.getItem('saved'))
        setSaved(data)
        
    }


    useEffect(()=>{
        fetchSaved()
    },[])

    if(saved.length===0){
        return(
           <div>
                <NavBar/>
                <div className="empty">
                    <h2>No WRKOUTS saved</h2>
                    <p><TbMoodCry/></p>
                </div>
           </div>
        )
    } 


    return(
        
        <div>
            <NavBar/>
            
            <div>
                
                <h1 className="title">Saved WRKOUTS</h1>
                
            </div>
            <div className="card-container">
                
            {saved.map((wrkout,index)=>{
                return(
                    <div className="card" key={index}>
                        <div className="card-text">
                             <img src= {wrkout.gifUrl} alt="" />
                        </div>
                        <div className="card-detail">
                            <h3>{wrkout.name} <button  className="save">
                             <button className="saved"><FaBookmark/></button></button></h3>
                            <p>{wrkout.target}</p>
                            <Link to={`/wrkoutdetail/${index}`} state={wrkout}>Wrkout Details <FaArrowRight/></Link>

                        </div>
                        
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default SavedWrkouts