import PropTypes from 'prop-types'
import Promise from './Promise';
function Myth({music, year_debut, gradiuations, model_showcase, myth}) {
    return(
        <>
            
            <li>{music} - {year_debut} - {gradiuations} - {model_showcase}</li>
            <div>
                <img src={myth} alt="Myth" width={700}/>
            </div>
            <Promise music="Musica do Grupo: Rise(Foi a musica da Council, 
            quando Sana se graduou, 
            IRyS entrou no grupo e se tornaram Promise, 
            com uma musica original chamada: Our Promise)" 
            year_debut="Quando foram Debutadas: 2021(Quando ainda eram Council) e 2023(Quando se tornaram Promise)" 
            gradiuations="Graduação de Membros até o momento: 
            Tsukumo Sana: 31 de Julho de 2022, 
            Ceres Fauna: 4 de Janeiro de 2025, 
            Nanashi Mumei: 28 de Abril de 2025 " 
            model_showcase="Quando Receberam seus Modelos 3D: 
            Ouro Kronii: Maio de 2023, 
            Hakos Baelz: Março de 2023, 
            Ceres Fauna: Março de 2023, 
            Nanashi Mumei: Março de 2023, 
            Tsukumo Sana: Saiu antes de ter um modelo 3D para seu modelo principal
            (O unico que teve foi um modelo chibi que ela fez, 
            para ela e suas amigas)
             IRyS: Agosto de 2023" 
            promise="./Promise (Council) Group.png"/>
        </>
    )

}
Myth.propTypes = {
    music: PropTypes.string.isRequired,
    year_debut: PropTypes.string,
    gradiuations: PropTypes.string,
    model_showcase: PropTypes.string

}
export default Myth;