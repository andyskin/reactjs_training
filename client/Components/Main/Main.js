import React from 'react';
import InfoBar from '../InfoBar/InfoBar';

export default class Main extends React.Component {
    render() {
        return(
            <main>
                <InfoBar class="main__info" />
            </main>
        );
    }
}