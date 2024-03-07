import { createContext, useState, useEffect } from "react";
import { supabase } from '../utils/supabaseConfig'

const AuthContext = createContext()
const AuthProvider = ({ children })=> {

    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ session }}>
            { children }
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}