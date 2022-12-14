import React from 'react'
import './Pizzas.scss';
import Categories from './Categories';
import { SearchContext } from './../App';



export default function Pizzas({ items, isActive, categories  }) {
    const { searchInput } = React.useContext(SearchContext)
    const typeNames = ['thin', 'traditional']
    const [typeSelected, setTypeSelected] = React.useState(0)
    const [sizeSelected, setSizeSelected] = React.useState(0)


    return (
        <>
            <h1> {categories[isActive].title} Pizzas</h1>
            <div className='pizzas_block'>
                {items
                .filter(obj => obj && obj.title.toUpperCase().includes(searchInput.toUpperCase()))
                .map((item) => {
                    return <div key={item.id} className='pizza'>
                        <img className='pizza_img' src={item.imageUrl} width={250}></img>
                        <div className='pizza_title'>{item.title}</div>
                        <div className='pizza_options'>
                            <div className='pizza_options_types'>
                                {item.types.map((type, index) => {
                                    return <div
                                        className={typeSelected === index ? "active" : ""}
                                        onClick={() => setTypeSelected(index)}
                                        key={index}>{typeNames[type]}
                                    </div>
                            })}
                        </div>
                        <div className='pizza_options_sizes'>
                        {item.sizes.map((size, index) => {
                                return <div
                                className={sizeSelected === index ? "active" : ""}
                                onClick={() => setSizeSelected(index)}
                                key={index}>{size}</div>
                            })}
                        </div>
                    </div>
                    <div className='pizza_price'>
                        <div className='pizza_price_value'>from {item.price} $</div>
                        <div className='pizza_price_button'>+ Add 0</div>
                    </div>
                </div>
                
            }
            
            )}
        </div>
    </>
        
    )
}
