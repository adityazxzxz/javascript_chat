import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Container, Toolbar, IconButton, Avatar, InputBase } from '@material-ui/core';
import { MoreVert, Chat, DonutLarge, Search as SearchIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => {
    return {
        menuButton: {
            marginRight: theme.spacing(2)
        },
        iconButton:{
            backgroundColor:'transparent'
        },
        inputInput:{
            padding:theme.spacing(1,1,1,0),

        },
        gridWraper:{
            border:'1px solid #cfcfcf'
        }
    }
})



const Contact = () => {
    const styles = useStyles();

    return (
        <div>
        <Grid container>
            <AppBar position="static" elevation={0}  className={styles.gridWraper}>
                <Toolbar style={{ background: '#EDEDED' }} >
                    <Grid item>
                        <IconButton edge="start" className={styles.iconButton}><Avatar /> </IconButton>
                    </Grid>
                    <Grid item xs />
                    <Grid item>
                    <IconButton edge="start" className={styles.menuButton} aria-label="menu">
                                <DonutLarge />
                            </IconButton>
                            <IconButton edge="start" className={styles.menuButton} aria-label="menu">
                                <Chat />
                            </IconButton>
                            <IconButton edge="start" aria-label="menu">
                                <MoreVert />
                            </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
        <Grid container>
            <SearchIcon />
            <InputBase 
            placeholder="search"
            />
        </Grid>
        </div>
    )
}

export default Contact
