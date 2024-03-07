import image from '../../assets/landingpic2.jpg'
import './Landing.css'
import { GiBiceps } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Landing=()=>{
    return(
        <section className='landing-container'>
            <div className='landing-text'>
                <h1><strong>READY TO START YOURWRKOUT?</strong></h1>
                <p><mark>Providing you with <strong>1000+ Excercise </strong>which are completely <strong>FREE</strong> to use</mark></p>
                <p><mark>Start your workout journey TODAY</mark></p>
                <div className='button-container'>
                
                </div>
            </div>
            <div className='landing-image'>
                <img src={image} alt="" />
            </div>
            <Link to='/wrkouts'><button className='wrkouts'>WRKOUTS <GiBiceps/></button></Link>
            
        </section>
    )
}

export default Landing