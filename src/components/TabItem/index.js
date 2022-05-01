import React from 'react';

function TabItem(props){
    let {name, component, onTabItemClicked, isActive, index} = props;

    function updateItem(){
        onTabItemClicked(component, index);
    }

    return (<li className='nav-item'>
                <button className={isActive ? 'nav-link active' : 'nav-link' } onClick={updateItem}>{name}</button>
            </li>);
}

export default TabItem;