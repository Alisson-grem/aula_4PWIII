import PropTypes from 'prop-types'
import Gloss from './Gloss';
function Hero({music, year_debut, gradiuations, model_showcase, hero}) {
    return(
        <>
            <h2>ID: HoloH3ro</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={hero} alt="HoloH3ro" width={700}/>
            </div>
            <Gloss gloss="./ReGloss Group.png"/>
        </>
    )

}
Hero.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Hero;