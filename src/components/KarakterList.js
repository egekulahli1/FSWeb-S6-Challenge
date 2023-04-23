import { useState } from "react";
import Karakter from "./Karakter";
import "./KarakterList.css";

export default function KarakterList({ chars }) {
  const [selectedChar, setSelectedChar] = useState(null);

  const handleSelectChar = (char) => {
    setSelectedChar(selectedChar === char ? null : char);
  };

  const renderedChars = chars.map((char) => {
    return (
      <Karakter
        key={char.name}
        char={char}
        isSelected={selectedChar === char}
        onSelectChar={handleSelectChar}
      />
    );
  });

  return <div className="karakter-list">{renderedChars}</div>;
}
