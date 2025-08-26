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
            <Justice music="Musica do Grupo: ABOVE BELOW" year_debut="Quando foram Debutadas: 
            Elizabeth Rose Bloodflame: 21 de Junho, 2024, 
            Gigi Murin: 21 de Junho, 2024, 
            Cecilia Immergreen: 22 de Junho, 2024, 
            Raora Panthera: 22 de Junho, 2024" 
            gradiuations="Graduação de Membros até o momento: Ninguem saiu do grupo" 
            model_showcase="Quando Receberam seus Modelos 3D: 
            Elizabeth Rose Bloodflame: 1 de Agosto, 2025, 
            Gigi Murin: 2 de Agosto, 2025, 
            Cecilia Immergreen: 8 de Agosto, 2025, 
            Raora Panthera: 9 de Agosto, 2025" justice="./Justice Group.png"/>
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