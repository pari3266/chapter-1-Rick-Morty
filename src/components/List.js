import { useEffect, useState } from "react";
import Character from "./Character";

function List() {
    const [loading, setLoading] = useState([true]);
    const [Characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                'https://rickandmortyapi.com/api/character'
            );

            const {results} = await data.json();

            setCharacters(results);
            setLoading(false);
        }

        fetchData();
    }, [Characters.length]);
    return (
        <div>
            <h2>Characters</h2>
            <div className='row'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                Characters.map((character) => (
                    <Character
                    key={character.id}
                    name={character.name}
                    origin={character.origin}
                    image={character.image}
                    />
                ))
            )
            }
       </div>
        </div>
    )
}

export default List;