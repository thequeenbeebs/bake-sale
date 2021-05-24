import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const ItemsContainer = (props) => {
    return (
        <div>
            {props.items.map(item => <img src={item.img}></img>)}
        </div>
    )

}

export default ItemsContainer;

