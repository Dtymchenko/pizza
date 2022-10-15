import React from 'react'
import './Categories.scss';

export default function Categories({ categories, sortList, onChangeSortType, isActive, setSortValue, setIsActive }) {

    const [isOpen, setIsOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(0)
    const onClickListItem = (i) => {
        setSelected(i.id);
        setIsOpen(false)
        setSortValue(i.value)
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
                Sort by <span onClick={() => setIsOpen(!isOpen)}>{sortList[selected].name}</span>
                <div className='popup'>
                {
                    isOpen && <ul>
                        {sortList.map((item) => 
                            <li 
                            key={item.id}
                            onClick={() => onClickListItem(item)}>{item.name}</li>
                        )}
                </ul>
                }
                </div>
                
            </div>
        </div>
    )
}
