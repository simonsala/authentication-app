import React, {useState} from 'react';
import TabItem from '../TabItem';

function Tabs(props){
    const [activeComponent, setActiveComponent] = useState(props.tabItems[0]);
    const [tabItems, setTabItems] = useState(resetTabItems(0));

    if (props == null || props.tabItems == null)
    return (<h1>Props or Tab Components are null</h1>);

    function onTabItemClicked(component, key){
        setTabItems(resetTabItems(key))
        setActiveComponent(component);
    }
    
    function resetTabItems(key){
       return props.tabItems.map((value, index) => {
            return <TabItem name={value.props.name} component={value} isActive={index === key? true : false} onTabItemClicked={onTabItemClicked} key={index.toString()} index={index} />
        });
    }
   
    return (
        <React.Fragment>
            <ul className='nav nav-tabs'>
                {tabItems}
            </ul>
            <div className=''>
                {activeComponent}
            </div>
        </React.Fragment>
    );
}

export default Tabs;