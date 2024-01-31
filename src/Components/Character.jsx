import React, { Component } from 'react';

class Character extends Component {
    state = {  } 
    render() { 
        const {character, quote } = this.prop
        return (<>
        <p>{character}</p>
        <p>{quote}</p>
        </>);
    }
}
 
export default Character;