import NavBar from "../NavBar"
import { useLocation } from "react-router-dom"
import './WrkoutDetail.css'
import {videoOptions} from "../../Hooks/abeFetch"
import useFetch from "../../Hooks/abeFetch"
import Loading from "../loading/loading"

const WrkoutDetails=()=>{
    const wrkout=useLocation().state
    const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${wrkout.name} `;

    const videos=useFetch(url,videoOptions)
    
    console.log(videos)

    if(videos===null){
       return(
        <Loading/>
       )
    }
   



    
    return(
        <div>
            <NavBar/>
            <div className="container">
                <h1>Details</h1>
                <div className="details-container">
                    <div className="details-gif">
                         <img src= {wrkout.gifUrl} alt="" />
                    </div>
                    <div className="det-text">
                        <h1>{wrkout.name}</h1>
                        <p>{wrkout.instructions}</p>
                        <div>
                            <p><strong>Useful for:</strong> {wrkout.target}</p>
                            <p><strong>Bodypart targeted:</strong> {wrkout.bodyPart}</p>
                            <p><strong>Done using:</strong> {wrkout.equipment}</p>
                    </div>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <h2>Watch these <span style={{color:'orange'}}>{wrkout.name}</span> videos for better understanding</h2>
                    </div>
                    <div className="thumbnail-container">
                        {videos.contents ?.slice(0,3).map((wrkoutvideo,index)=>{
                            return(
                                <a key={index} 
                                className="wrkoutvideo"  
                                href={`https://www.youtube.com/watch?v=${wrkoutvideo.video.videoId}`}
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <img src={wrkoutvideo.video.thumbnails[0].url} alt="" />
                                    <p>{wrkoutvideo.video.title}</p>
                                </a>
                                
                            )
                        })}

                    </div>
                    

                </div>
                
            </div>
        </div>
    )
}

export default WrkoutDetails