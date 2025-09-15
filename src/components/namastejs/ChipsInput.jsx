import { useState } from "react";

const ChipsInput = () => {
  const [singleChip, setSingleChip] = useState("");
  const [thechips, setAllChips] = useState([]);

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      const trimmedValue = e.target.value.trim();
      if (trimmedValue) {
        setAllChips([...thechips, trimmedValue]);
        setSingleChip("");
      } else {
        alert("Enter a proper input value");
      }
    }
  };

  const handleRemoveChip = (chip) => {
    console.log()
    const theupdatedChips = thechips.filter((chci, indi) => indi != chip)
    setAllChips(theupdatedChips)
  };

  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px" }}
        value={singleChip}
        onKeyDown={handleEnterPressed}
        onChange={(e) => setSingleChip(e.target.value)}
      />

      <div style={{display:"flex", columnGap:"10px",}}>
        {thechips.length != 0 &&
          thechips.map((chip, indi) => {
            return (
                <h4 key={indi} onClick={() => handleRemoveChip(indi)}>
              {chip} <span style={{cursor:"pointer"}} > ❌</span>
            </h4>
            )
          })}
      </div>
    </div>
  );
};

export default ChipsInput;
