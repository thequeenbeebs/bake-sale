import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const ItemsContainer = (props) => {
    return (
        <Grid container spacing={24} style={{padding: 24}}>
            {props.items.map(item => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <img src={item.img}></img>
                </Grid>
                            ))}
        </Grid>
    )

}

export default ItemsContainer;

