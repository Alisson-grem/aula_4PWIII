import PropTypes from 'prop-types'
import Holoro from './Holoro';
function Area({music, year_debut, gradiuations, model_showcase, area}) {
    return(
        <>
            <h2>Hololive Indonesia</h2>
            <h3>ID: Area 15</h3>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={area} alt="Area 15" width={700}/>
            </div>
            <Holoro music="Musica do Grupo: Slap by Step" 
            year_debut="Quando foram Debutadas: 
            Kureiji Ollie: 4 de Dezembro, 2020, 
            Anya Melfissa: 5 de Dezembro, 2020, 
            Pavolina Reine: 6 de Dezembro, 2020" 
            gradiuations="Graduação de Membros até o momento: Ninguém saiu do grupo" 
            model_showcase="Quando Receberam seus Modelos 3D: 
            Kureiji Ollie: 21 de Julho, 2023, 
            Anya Melfissa: 28 de Julho, 2023, 
            Pavolina Reine: 14 de Julho, 2023" 
            holoro="./Holoro Group.png"/>
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