import image from '../../assets/wrklogo1.jpg'
import './auth.css'
import { useState } from "react";
import { supabase } from '../../components/utils/supabaseConfig';
import { FaGoogle } from "react-icons/fa";



const Register=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const RegisterWithGoogle= async ()=>{
    const { data, error } = await supabase.auth.signInWithOAuth({  provider: 'google'})
  }

  async function signUpNewUser(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: 'http://localhost:5173/',
        },
      })

      if ( error ) {
          console.log(error)
      } else {
          console.log(data)
      }
    }

    return(
            <div>
                <form className='form-container' onSubmit={signUpNewUser}>
                    <h2>Sign In</h2>
                    <div>
                        <h3>Email</h3>
                        <input className='pass' type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input className='pass' type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button className='login' type="submit">Sign In</button>
                    <button className='google' onClick={RegisterWithGoogle}> Sign-in with Google <FaGoogle/></button>
                </form>
                <div className='auth-image'>
                    <img src={image} alt="" />
                </div>
            </div>
        
        
    )


}

export default Register