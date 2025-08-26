import PropTypes from 'prop-types'
import Holoro from './Holoro';
function Area({music, year_debut, gradiuations, model_showcase, area}) {
    return(
        <>
            <h2>Hololive Indonesia</h2>
            <h2>ID: Area 15</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={area} alt="Area 15" width={700}/>
            </div>
            <Holoro holoro="./Holoro Group.png"/>
        </>
    )

}
Area.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Area;