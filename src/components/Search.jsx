import React, {useState} from 'react'
import Images from './Images'
import AditionalInfo from './AditionalInfo'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './styles/Search.css'


function Search() {

    const [data, setData] = useState()

        // Fetch data from API
    const searchPokemon = async (value) => {
        try {
            let answer = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.pokemonName}/`)
            let pokemon = await answer.json()
            console.log(pokemon)
            setData(pokemon)
            
        } catch (error) {
            alert('Please try again')
        }
    }

         //Form validation
    const validations = (value) => {
        const error = {}
        if(value.pokemonName.length < 1) error.pokemonName = 'Please enter a Pokémon name!'
        return error;
    }

  return (
    <div className='mainContainer'>
        
        {/* Conditional title */}
        <h3 className='title'>{data ? data.name : "Pokedex" }</h3>

        <Images data={ data } />
        
        <AditionalInfo data={ data } />
        
        <Formik
        initialValues={{
            pokemonName: ''
        }}
        onSubmit = { searchPokemon }
        validate = { validations }
        >
            <Form className='searchForm'>
                <Field className='textField' name='pokemonName' type='text'/>
                <br/>
                <button className='submitButton' type='submit' >Search</button>
                <div className="break"></div>
                <div className='errorMessage'>
                <ErrorMessage name='pokemonName'  />
                </div>
            </Form>
        </Formik>
        
    </div>
  )
}

export default Search