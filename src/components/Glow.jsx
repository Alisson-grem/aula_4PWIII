import PropTypes from 'prop-types'
import Holox from './Holox';
function Glow({music, year_debut, gradiuations, model_showcase, flow}) {
    return(
        <>
            <h2>Dev_Is: FLOW GLOW</h2>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={flow} alt="FLOW GLOW" width={700}/>
            </div>
            <Holox holox="./holoX Group.png"/>
        </>
    )

}
Glow.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Glow;