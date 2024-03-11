export const wrkoutOptions={
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2081b5b09amsh636e16597ed7676p1522bfjsn5320387cca4e',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export const videoOptions={
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a2cb41f5a7msh72ed1a7e806ae64p175ed6jsne06c55c1c492',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    } 
}




export const abeFetch= async (url,options)=>{
    const response= await fetch (url,options);
    const data= await response.json();

    return data
}

import { useState, useEffect } from 'react'

const useFetch = (url, options)=>{

    const [ data, setData ] = useState(null)


    const fetchData = async ()=>{
        const response = await fetch(url, options)
        const data = await response.json()

        setData(data)
    }

    useEffect(()=>{
        fetchData()
    }, [url])

    return data

}

export default useFetch



















































// import { useState, useEffect } from 'react'

// const abeFetch = (url)=>{
//     const [ data, setData ] = useState(null)
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'a2cb41f5a7msh72ed1a7e806ae64p175ed6jsne06c55c1c492',
//             'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//         }
//     };

//     const fetchData = async ()=>{
//         try {
//             const response = await fetch(url, options);
//             const data = await response.json();
//             setData(data)
//             console.log(result);
//         } catch (error) {
//             console.error(error);
//         }
        
//     }

//     useEffect(()=>{
//         fetchData()
//     }, [url])

//     return data
   
// }

// export default abeFetch

    
