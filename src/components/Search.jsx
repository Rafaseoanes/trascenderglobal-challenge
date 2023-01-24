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


  return (
    <div className='mainContainer'>
        <div className='results'>
        {/* Conditional title */}
        <h3 className='id'>{data ? "#" : ""}{data ? padNumber(data.id, 3) : "#000" }</h3>
        <h3 className='title'>{data ? capitalizeFirstLetter(data.name) : "Pokedex" }</h3>

        <Images data={ data } />
        
        <AditionalInfo data={ data } />
        </div>
        
        <div className='form'>
        <Formik
        initialValues={{
            pokemonName: ''
        }}
        onSubmit = { searchPokemon }
        validate = { validations }
        >
            <Form className='searchForm'>
                <Field className='formField' name='pokemonName' type='text' placeholder="Search by name"/>
                <br/>
                <Field className='formField' name='pokemonId' type='number' placeholder="Search by id"/>
                <br/>
                <button className='submitButton' type='submit' >Search</button>
                <div className="break"></div>
                <div className='errorMessage'>
                <ErrorMessage name='pokemonName'  />
                </div>
            </Form>
        </Formik>
            
        </div>
    </div>
  )
}

export default Search