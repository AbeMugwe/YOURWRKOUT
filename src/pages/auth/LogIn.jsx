import image from '../../assets/wrklogo1.jpg'
import './auth.css'
import { useState } from "react";
import { supabase } from '../../components/utils/supabaseConfig';
import { FaGoogle } from "react-icons/fa";

const Login=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithGoogle= async ()=>{
    const { data, error } = await supabase.auth.signInWithOAuth({  provider: 'google'})
  }

  async function signInWithEmail(e) {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if ( error ) {
        console.log(error)
    } else {
        console.log(data)
        window.location.href = '/'
    }
  }
    return(
        <div>
            <form className='form-container' onSubmit={signInWithEmail}>
                <h2>Login</h2>
                <div>
                <h3>Email</h3>
                <input
                className='pass'
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div><h3>Password</h3>
                <input
                    className='pass'
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /></div>

                <button className='login' type="submit">Log In</button>
                <button className='google' onClick={loginWithGoogle}> Log in with Google <FaGoogle/></button>
            </form>
            <div className='auth-image'>
                <img src={image} alt="" />
            </div>
        </div>
    )

}


export default Login