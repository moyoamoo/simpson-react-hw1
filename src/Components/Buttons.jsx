import React from 'react';

const Buttons = ({sortAsc, sortDesc, sortFamilyName, restoreCharacters, showLiked}) => {
  return ( <div className="btnContainer">
            <button onClick={() => showLiked()} className="headerBtn">Show Liked</button>

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
          </div>  );
}
 
export default Buttons;

