import PropTypes from 'prop-types'
import Glow from './Glow';
function Gloss({music, year_debut, gradiuations, model_showcase, gloss}) {
    return(
        <>
            <h2>Hololive Japanese</h2>
            <h2>Dev_Is: ReGloss</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={gloss} alt="ReGloss" width={700}/>
            </div>
            <Glow music="" year_debut="" gradiuations="" 
            model_showcase="" flow="./FLOW GLOW Group.png"/>
        </>
    )

}
Gloss.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Gloss;