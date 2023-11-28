import { useState, useEffect } from "react";
import './detail.css';

export const Detail = ({ pockemon }) => {
    const [pockemonDetail, setPockemonDetail] = useState(null);
    const [showEvolution, setShowEvolution] = useState(false);
    const [evolution, setEvolution] = useState(null);
    useEffect(() => {
        fetch(pockemon.url)
            .then((response) => response.json())
            .then((data) => setPockemonDetail(data))
    }, [pockemon.url])
    useEffect(() => {
        if (showEvolution && pockemonDetail) {
            fetch(`https://pokeapi.co/api/v2/evolution-chain/${pockemonDetail.id}`)
                .then((response) => response.json())
                .then((data) => {
                    setEvolution(data);}
                )
        }
    }, [pockemonDetail, showEvolution, setEvolution]);

    return (
        <div class="m-4 shadow-md p-4">
            <h1>{pockemon.name}</h1>
            <span>{pockemon.url}</span>
            {pockemonDetail &&
            <div className="w-32 pokedisplay" onClick={()=>setShowEvolution(true)}>
                <img src={pockemonDetail.sprites.front_default} alt={pockemon.name} />
                {showEvolution && <div className="evolution">
                        {JSON.stringify(evolution, null, 2)}
                    </div>
                    }
            </div>
            }
        </div>
    )
}