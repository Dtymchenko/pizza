import React from 'react'
import './Categories.scss';

export default function Categories({ categories, isActive, setIsActive }) {

    const sortList = ['price ASC', 'price DESC', 'rate ASC', 'rate DESC', 'name ASC', 'name DESC']
    const [isOpen, setIsOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(0)
    const onClickListItem = (i) => {
        setSelected(i);
        setIsOpen(false)
    }

    return (
        <div className='categories_wrapper'>
            
                <ul className='categories_list'>
                    {categories.map((item) => {
                        return <li
                        onClick={() => setIsActive(item.id)}
                        key={item.id}
                        className={isActive === item.id ? "active" : ""}>{item.title}</li>
                    })}
                </ul>
            
            <div className='categories_sort'>
                Sort by <span onClick={() => setIsOpen(!isOpen)}>{sortList[selected]}</span>
                <div className='popup'>
                {
                    isOpen && <ul>
                        {sortList.map((item, i) => 
                            <li 
                            key={i}
                            onClick={() => onClickListItem(i)}>{item}</li>
                        )}
                </ul>
                }
                </div>
                
            </div>
        </div>
    )
}
