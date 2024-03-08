import image from '../../assets/wrklogo1.jpg'
import './auth.css'
import { useState } from "react";
import { supabase } from '../../components/utils/supabaseConfig';

const Login=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail(e) {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if ( error ) {
      alert("An error occured")
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
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /></div>

                <button className='login' type="submit">Log In</button>
            </form>
            <div className='auth-image'>
                <img src={image} alt="" />
            </div>
        </div>
    )

}


export default Login