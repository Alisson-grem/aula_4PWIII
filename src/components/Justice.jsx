import PropTypes from 'prop-types'
import Area from './Area';
function Justice({music, year_debut, gradiuations, model_showcase, justice}) {
    return(
        <>
            <h2>EN: Justice</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={justice} alt="Justice" width={700}/>
            </div>
            <Area area="./Area 15 Group.png"/>
        </>
    )

}
Justice.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Justice;