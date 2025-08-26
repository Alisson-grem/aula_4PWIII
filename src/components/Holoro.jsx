import PropTypes from 'prop-types'
import Hero from './Hero';
function Holoro({music, year_debut, gradiuations, model_showcase, holoro}) {
    return(
        <>
            <h3>ID: Holoro</h3>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={holoro} alt="Holoro" width={700}/>
            </div>
            <Hero music="Musica do Grupo: save our hearts" 
            year_debut="Quando foram Debutadas: 
            Vestia Zeta: 25 de Março, 2022, 
            Kaela Kovalskia: 26 de Março, 2022, 
            Kobo Kanaeru: 27 de Março, 2022" 
            gradiuations="Graduação de Membros até o momento: Ninguém saiu do grupo" 
            model_showcase="Quando Receberam seus Modelos 3D: 
            Vestia Zeta: 15 de Outubro, 2023, 
            Kaela Kovalskia: 20 de Outrobro, 2023, 
            Kobo Kanaeru: 27 de Outubro, 2023" 
            hero="./HoloHero Group.png"/>
        </>
    )

}
Holoro.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Holoro;