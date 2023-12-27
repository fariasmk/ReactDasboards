import React, { useMemo, useState } from 'react';
import Toggle from '../Toggle';

import emojis from '../../utils/emojis';

import { 
    Container, 
    Profile, 
    Welcome, 
    UserName, 
}  from './styles';


const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);

    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Maikon Farias</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;
