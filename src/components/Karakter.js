import React from "react";
import KarakterDetay from "./KarakterDetay";
import "./Karakter.css";

export default function Karakter({ char, isSelected, onSelectChar }) {
  const handleClick = () => {
    onSelectChar(char);
  };

  return (
    <div className="karakter">
      <button onClick={handleClick}>
        <h3>{char.name}</h3>
      </button>
      {isSelected ? <KarakterDetay char={char} /> : null}
    </div>
  );
}
