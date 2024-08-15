import Intro from '../components/Intro'
import PokemonComponent from '../components/pokemon'

export const Home = () => {
    return (
        <>
            <Intro />
            <div className='w-full'>

                <PokemonComponent />
            </div>
        </>
    )
}
