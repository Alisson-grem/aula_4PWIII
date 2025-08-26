import PropTypes from 'prop-types'
import Promise from './Promise';
function Myth({music, year_debut, gradiuations, model_showcase, myth}) {
    return(
        <>
            
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={myth} alt="Myth" width={700}/>
            </div>
            <Promise music="" year_debut="" gradiuations="" 
            model_showcase="" promise="./Promise (Council) Group.png"/>
        </>
    )

}
Myth.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Myth;