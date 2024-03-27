import React, { useState } from 'react'
import Images from './Images'
import AditionalInfo from './AditionalInfo'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './styles/Search.css'


function Search() {

    const [data, setData] = useState()

    // Fetch data from API
    const searchPokemon = async (value) => {
        try {
            let answer = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.pokemonName ? value.pokemonName : value.pokemonId}/`)
            let pokemon = await answer.json()
            console.log(pokemon)
            setData(pokemon)
            
            // Call to the backend to save to DB
            // await fetch('http://localhost:3030/', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name: pokemon.name,
            //         pokedexNumber: pokemon.id,
            //         height: pokemon.height,
            //         weight: pokemon.weight,
            //         hp: pokemon.stats[0].base_stat,
            //         attack: pokemon.stats[1].base_stat,
            //         defense: pokemon.stats[2].base_stat,
            //         image: pokemon.sprites.other['official-artwork'].front_default,
            //     })
            // })

        } catch (error) {
            alert('Please try a different Name or Id')
        }
    }

    //Form validation
    const validations = (value) => {
        const error = {}
        if (value.pokemonName.length < 1 && !value.pokemonId) error.pokemonName = 'Please enter a Pokémon name or id!'
        return error;
    }

    // onchange
    const inputhaschanged = (e) => {
        const inputs = document.querySelectorAll(".formField");
        if (e.target.name === "pokemonName") inputs[1].value = "";
        else inputs[0].value = "";
    }

    //id padding
    function padNumber(num, size) {
        let paddedNum = num.toString();
        while (paddedNum.length < size) {
            paddedNum = "0" + paddedNum;
        }
        return paddedNum;
    }

    // Firts letter to upper case
    function capitalizeFirstLetter(string) {
        return `${string[0].toUpperCase()}${string.slice(1)}`;
    }

    // Background color based on pokemon type
    function getColorByType(data) {
        const colours = {
            normal: 'rgba(168, 167, 122, 0.5)',
            fire: 'rgba(238, 129, 48, 0.5)',
            water: 'rgba(90, 155, 229, 0.5)',
            electric: 'rgba(197, 163, 41, 0.5)',
            grass: 'rgba(122, 199, 76, 0.5)',
            ice: 'rgba(150, 217, 214, 0.5)',
            fighting: 'rgba(194, 46, 40, 0.5)',
            poison: 'rgba(163, 62, 161, 0.5)',
            ground: 'rgba(226, 191, 101, 0.5)',
            flying: 'rgba(169, 143, 243, 0.5)',
            psychic: 'rgba(249, 85, 135, 0.5)',
            bug: 'rgba(166, 185, 26, 0.5)',
            rock: 'rgba(182, 161, 54, 0.5)',
            ghost: 'rgba(115, 87, 151, 0.5)',
            dragon: 'rgba(111, 53, 252, 0.5)',
            dark: 'rgba(112, 87, 70, 0.5)',
            steel: 'rgba(183, 183, 206, 0.5)',
            fairy: 'rgba(214, 133, 173, 0.5)',
        };

        return colours[data.type] || '#cecece';
    };

    const dataType = { type: data ? data.types[0].type.name : 'water' }
    const color = getColorByType(dataType)

    return (
        <div className='mainContainer' style={{ backgroundColor: color }}>
            <div className='results'>
                {/* Conditional title */}
                <h3 className='id'>{data ? "#" : ""}{data ? padNumber(data.id, 3) : "#000"}</h3>
                <h3 className='title'>{data ? capitalizeFirstLetter(data.name) : "Pokedex"}</h3>

                <Images data={data} />

                <AditionalInfo data={data} />
            </div>

            <div className='form'>
                <Formik
                    initialValues={{
                        pokemonName: '',
                        pokemonId: ''
                    }}
                    onSubmit={searchPokemon}
                    validate={validations} >

                    <Form className='searchForm'>
                        <Field onKeyUp={inputhaschanged} className='formField' name='pokemonName' type='text' pattern="^[a-zA-Z]+$" placeholder="Search by name" />
                        <br />
                        <Field onKeyUp={inputhaschanged} className='formField' name='pokemonId' type='number' placeholder="Search by id" />
                        <br />
                        <button className='submitButton' type='submit' >Search</button>

                        {/* Error message */}
                        <div className='errorMessage'>
                            <ErrorMessage name='pokemonName' />
                        </div>
                    </Form>
                </Formik>

            </div>
        </div>
    )
}

export default Search