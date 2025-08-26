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
            <Advent music="Musica em Grupo: Rebillion" year_debut="Quando foram Debutadas: Shiori Novella: 30 de Julho, 2023, 
            Koseki Bijou: 30 de Julho, 2023, 
            FuwaMoco(Fuwawa e Mococo): 31 de Julho, 2023, 
            Nerissa RavenCroft: 31 de Julho, 2023 " 
            gradiuations="Graduação de Membros até o momento: Nenhuma saiu do grupo" 
            model_showcase="Quando Receberam seus Modelos 3D: 
            Shiori Novella: 3 de Agosto, 2024, 
            Koseki Bijou: 3 de Agosto, 2024, 
            Nerissa Ravencroft: 9 de Agosto, 2024, 
            FuwaMoco: 10 de Agosto, 2024" advent="./Advent Group.png"/>
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