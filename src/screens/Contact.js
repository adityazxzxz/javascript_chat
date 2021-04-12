import React from 'react';
import { createStyle } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Container,Toolbar } from '@material-ui/core';

const Contact = () => {
    return (
        <AppBar position="static">
    <Container maxWidth="lg">
        <Toolbar >
            Test
        </Toolbar >
    </Container>
</AppBar>
    )
}

export default Contact
