import PropTypes from 'prop-types'
import Area from './Area';
function Justice({music, year_debut, gradiuations, model_showcase, justice}) {
    return(
        <>
            <h3>EN: Justice</h3>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={justice} alt="Justice" width={700}/>
            </div>
            <Area music="Musica do Grupo: Roman Picisan" 
            year_debut="Quando foram Debutadas: 
            Ayunda Risu: 10 de Abril, 2020, 
            Moona Hoshinova: 11 de Abril, 2020, 
            Airani Iofifteen: 12 de Abril, 2020" 
            gradiuations="Graduação de Membros até o momento: Ninguém saiu do grupo" 
            model_showcase="Quando Receberam seus Modelos 3D: 
            Ayunda Risu: 18 de Setembro, 2022, 
            Moona Hoshinova: 16 de Setembro, 2022,
            Airani Iofifteen: 17 de Setembro, 2022" 
            area="./Area 15 Group.png"/>
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