import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return(
        <>
            <p>Items de uma Lista:</p>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )

}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,

}
export default Item;