import React, { Component } from 'react';

class Buttons extends Component {
    state = {  } 
    render() { 
        const {sortAsc, sortDesc, sortFamilyName, restoreCharacters} = this.props;
        return (
            <div className="btnContainer">
            <button onClick={() => sortAsc()} className="headerBtn">
              Sort Ascending
            </button>
            <button onClick={() => sortDesc()} className="headerBtn">
              Sort Descending
            </button>
            <button onClick={() => sortFamilyName()} className="headerBtn">
              Sort by Family Name
            </button>
            <button className="headerBtn restoreBtn" onClick={() => restoreCharacters()}>
              Restore Deleted Characters
            </button>
          </div>
        );
    }
}
 
export default Buttons;