import PropTypes from 'prop-types'
import Glow from './Glow';
function Gloss({music, year_debut, gradiuations, model_showcase, gloss}) {
    return(
        <>
            <h2>Hololive Japanese</h2>
            <h3>Dev_Is: ReGloss</h3>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={gloss} alt="ReGloss" width={700}/>
            </div>
            <Glow music="Musica do Grupo: FG Roadster" 
            year_debut="Quando foram Debutadas: Todas foram debutadas em 9 de Novembro, 2024" 
            gradiuations="Graduação de Membros até o momento: Ninguém saiu do grupo" 
            model_showcase="Quando Receberam seus Modelos 3D: Ainda não recebram um modelo 3D" flow="./FLOW GLOW Group.png"/>
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