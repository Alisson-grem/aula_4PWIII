import PropTypes from 'prop-types'

function Holox({music, year_debut, gradiuations, model_showcase, holox}) {
    return(
        <>
            <h3>Secret Society: holoX</h3>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={holox} alt="holoX" width={700}/>
            </div>
        </>
    )

}
Holox.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Holox;