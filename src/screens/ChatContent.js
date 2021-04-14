import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Container, Toolbar, IconButton, Avatar, InputBase } from '@material-ui/core';
import { MoreVert, Chat, DonutLarge, Search as SearchIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => {
    return {
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
                <AppBar position="static" elevation={0} className={styles.gridWraper}>
                    <Toolbar style={{ background: '#EDEDED' }} >
                        <Grid item>
                            <IconButton edge="start" className={styles.iconButton}><Avatar /> </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <IconButton edge="start" className={styles.menuButton} aria-label="menu">
                                <SearchIcon />
                            </IconButton>
                            <IconButton edge="start" aria-label="menu">
                                <MoreVert />
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid container>
               
            </Grid>
        </div>
    )
}

export default Contact
