import { useState, useEffect } from "react";
import { Detail } from "./Detail";

export const Pockedex = () => {
    const [pockemData, setPockemData] = useState([]);
    const [selectedPockemon, setSelectedPockemon] = useState(null);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) => setPockemData(data.results))
    }, [setPockemData])

    const pockemons = pockemData.map((pockemon, index) => {
        return (
            <li key={pockemon.name}>
                <span className="px-4 py-2 w-32 inline-block">{pockemon.name}</span>
                <button onClick={() => setSelectedPockemon(pockemon)}>Ver</button>
            </li>
        )
    })
    return (
        <div className="w-full">
            <h1>Pockedex</h1>
            <hr />
            <section className="flex flex-row flex-wrap justify-between">
                <ul className="list-none">
                    {pockemons}
                </ul>
                {selectedPockemon && <Detail pockemon={selectedPockemon} />}
            </section>
        </div>
    );
}