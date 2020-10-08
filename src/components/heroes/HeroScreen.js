import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    // es un hooks del react router dom que nos permite extraer el parametro que varia en una URL en este caso el id heroe/:heroeId
    const params = useParams()
    console.log(params);

    //const hero = getHeroesById(params.heroeId);
    const hero = useMemo(() => getHeroesById(params.heroeId), [params.heroeId]);
    console.log(hero);

    if(!hero) {
        return <Redirect to='/' />
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleReturn = () => {
        if(history.length <= 2) {
            history.push('/');
        }

        history.goBack();
    }
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    src={`../assets/heroes/${params.heroeId}.jpg`}
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b> Alter ego:</b> {alter_ego}</li>
                    <li className='list-group-item'> <b> Publisher:</b> {publisher}</li>
                    <li className='list-group-item'> <b> First appearance:</b> {first_appearance}</li>
                </ul>

                <h5> Characters</h5>
                <p>{characters}</p>

                <button 
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return 
                </button>
            </div>
        </div>
    )
}
