import PropTypes from 'prop-types'
import Holox from './Holox';
function Glow({music, year_debut, gradiuations, model_showcase, flow}) {
    return(
        <>
            <h3>Dev_Is: FLOW GLOW</h3>
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={flow} alt="FLOW GLOW" width={700}/>
            </div>
            <Holox music="Musica do Grupo: Meikyūna Rabirinsu" year_debut="Quando foram Debutadas: 
            La+ Darknesss: 26 de Novembro, 2021, 
            Takane Lui: 27 de Novembro, 2021, 
            Hakui Koyori: 28 de Novembro, 2021, 
            Sakamata Chloe: 29 de Novembro, 2021, 
            Kazama Iroha: 30 de Novembro, 2021" 
            gradiuations="Graduação de Membros até o momento: 
            Sakamata Chloe: Virou Afiliada a Cover Corp em 26 de Janiero, 2025" 
            model_showcase="Quando Receberam seus Modelos 3D: 
            La+ Darknesss: 27 de Junho, 2022, 
            Takane Lui: 21 de Junho, 2022, 
            Hakui Koyori: 16 de Junho, 2022, 
            Sakamata Chloe: 13 de Junho, 2022, 
            Kazama Iroha: 9 de Junho, 2022" 
            holox="./holoX Group.png"/>
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