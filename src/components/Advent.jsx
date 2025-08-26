import PropTypes from 'prop-types'
import Justice from './Justice';
function Advent({music, year_debut, gradiuations, model_showcase, advent}) {
    return(
        <>
            <h2>En: Advent</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={advent} alt="Advent" width={700}/>
            </div>
            <Justice music="" year_debut="" gradiuations="" 
            model_showcase="" justice="./Justice Group.png"/>
        </>
    )

}
Advent.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Advent;