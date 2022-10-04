import React from 'react'
import './Categories.scss';



export default function Categories({ items }) {

    const [isActive, setIsActive] = React.useState(1)
    
    return (
        <div className='categories_wrapper'>
            
                <ul className='categories_list'>
                    {items.map((item) => {
                        return <li
                        onClick={() => setIsActive(item.id)}
                        key={item.id}
                        className={isActive === item.id ? "active" : ""}>{item.title}</li>
                    })}
                </ul>
            
            <div className='categories_sort'>
                Sort by <span>popular</span>
            </div>
        </div>
    )
}
