import PropTypes from 'prop-types'
import Hero from './Hero';
function Holoro({music, year_debut, gradiuations, model_showcase, holoro}) {
    return(
        <>
            <h2>ID: Holoro</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={holoro} alt="Holoro" width={700}/>
            </div>
            <Hero music="" year_debut="" gradiuations="" 
            model_showcase="" hero="./HoloHero Group.png"/>
        </>
    )

}
Holoro.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Holoro;