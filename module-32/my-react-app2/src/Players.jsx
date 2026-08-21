import { useEffect, useState } from "react"

export default function Players(){

    // this is old version ekn use korbo na , ager developer ra use korte pare ejonne dekhanu

    const [players, setPlayers] =useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setPlayers(data))
    }, []);

    return(
        <div className="card">
            <h4>Players{players.length} </h4>
        </div>
    )
}