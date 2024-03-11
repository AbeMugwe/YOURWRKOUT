import './Nav.css'
import image from '../../assets/wrklogo1.jpg'
import '../Landing/Landing.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { AuthContext } from '../Context/authContext';
import { supabase } from '../../components/utils/supabaseConfig';


const NavBar=()=>{
    const { session } = useContext(AuthContext)


  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if ( error) {
      alert(error)
    }
  }

  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle((prevToggle)=>!prevToggle)
  }


    return(
        <nav>
            <div className='toggle' onClick={handleToggle} style={{cursor:'pointer'}}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            {session ? <div className={`dropdown ${toggle ? 'open ': 'closed'}`}>
                <button className='close' onClick={handleToggle}>X</button>
                <Link to='/'>Home</Link>
                <Link to='/wrkouts'>Wrkouts</Link>
                <Link to='/saved'>Saved Wrkouts</Link>
                <Link to='/search'>Search Wrkouts</Link>
            </div>: <div className={`dropdown ${toggle ? 'open ': 'closed'}`}>
                <button className='close' onClick={handleToggle}>X</button>
                <Link to='/'>Home</Link>
                <Link to='/wrkouts'>Wrkouts</Link>
            </div>}


            <div className='nav-image'>
                <Link to='/'><img className='nav-inner-image' src={image} alt="" /></Link>
            </div>

            {session ?
            <div>
                <div className='nav-text'> <button className='sign-up' onClick={signOut}>Log Out</button>
                WELCOME TO YOURWRKOUT</div>
            </div> :
            <div className='nav-text'>
                <Link to='/sign-in'><button className='sign-up'>Sign up Now!</button></Link>
                <Link to='/login'><button className='log-in'>Log In</button></Link>
                YOURWRKOUT
            </div>
             }
        </nav>
    )
}

export default NavBar