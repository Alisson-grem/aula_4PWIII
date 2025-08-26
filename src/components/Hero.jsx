import PropTypes from 'prop-types'
import Gloss from './Gloss';
function Hero({music, year_debut, gradiuations, model_showcase, hero}) {
    return(
        <>
            <h3>ID: HoloH3ro</h3>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={hero} alt="HoloH3ro" width={700}/>
            </div>
            <Gloss music="Musica do Grupo: Shunkan Heartbeat" 
            year_debut="Quando foram Debutadas: 
            Hiodoshi Ao e Otonose Kanade: 9 de Setembro, 2023, 
            Juufuutei Raden e Todoroki Hajime: 10 de Setembro " 
            gradiuations="Graduação de Membros até o momento: Ninguém saiu do grupo" 
            model_showcase="Quando Receberam seus Modelos 3D: Todas recebram o modelo 3D em 28 de Setembro, 2024" 
            gloss="./ReGloss Group.png"/>
        </>
    )

}
Hero.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Hero;