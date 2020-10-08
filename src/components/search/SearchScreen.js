import React, { useMemo } from 'react'
import queryString from 'query-string'

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

    // query params
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const initialValue = {
        'heroName': q,
    }
    const { state, handleInputChange } = useForm(initialValue)
    const heroesFiltered = useMemo(()=> getHeroesByName(state.heroName), [state.heroName]);

    return (
        <div>
            <h1>Search a Hero</h1>
            <hr/>

            <div className='row'>
                <div className='col-5'>
                    <h4>Search input</h4>
                    <hr/>

                    <form>
                        <input
                            type='text'
                            name='heroName'
                            placeholder='Find your hero'
                            className='form-control'
                            autoComplete='off'
                            value={state.heroName}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>

                <div className='col-7'>
                    <h4> Results</h4>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
