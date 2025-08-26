import PropTypes from 'prop-types'
import Advent from './Advent';
function Promise({music, year_debut, gradiuations, model_showcase, promise}) {
    return(
        <>
            <h2>EN: Promise</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={promise} alt="Promise" width={700}/>
            </div>
            <Advent music="" year_debut="" gradiuations="" 
            model_showcase="" advent="./Advent Group.png"/>
        </>
    )

}
Promise.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Promise;