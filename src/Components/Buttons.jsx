import React from "react";
import Button from "./Button";
const Buttons = ({ restoreCharacters, showLiked }) => {
  return (
    <div className="btnContainer">
      <Button className="headerBtn" onClick={showLiked} text="Show Liked" />

      <Button
        className="headerBtn restoreBtn"
        onClick={restoreCharacters}
        text=" Restore Deleted Characters"
      />
    </div>
  );
};

export default Buttons;
