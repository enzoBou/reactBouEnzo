import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className='containerItems'>
           <h2 className='HolaMundo badge bg-danger text-wrap'>{greeting}</h2>
        </div>
    )
}