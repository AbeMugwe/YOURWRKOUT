import image from '../../assets/wrklogo1.jpg'
import './auth.css'
import { useState } from "react";
import { supabase } from '../../components/utils/supabaseConfig';

const Register=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          alert("An error occured")
          console.log(error)
      } else {
          alert("Successfully registered, please check your email for verification.")
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
                        <input className='pass' type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button className='login' type="submit">Sign In</button>
                </form>
                <div className='auth-image'>
                    <img src={image} alt="" />
                </div>
            </div>
        
        
    )


}

export default Register