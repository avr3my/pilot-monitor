import React from "react";

export default function Temp({ setValues, curr, prev }) {
  const [temp, setTemp] = React.useState(null);
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        display: "flex",
      }}
    >
      <div className="left">
        <input
          type="text"
          value={temp?.Altitude ||0}
          onChange={(e) =>
            setTemp({ ...temp, Altitude: parseInt(e.currentTarget.value) })
          }
        />
        <br />
        <input
          type="text"
          value={temp?.HIS ||0}
          onChange={(e) =>
            setTemp({ ...temp, HIS: parseInt(e.currentTarget.value) })
          }
        />
        <br /><input
          type="text"
          value={temp?.ADI ||0}
          onChange={(e) =>
            setTemp({ ...temp, ADI: parseInt(e.currentTarget.value) })
          }
        />
        <br />
        <button onClick={() => setValues(temp)}>Enter</button>
      </div>
      <div className="right">
        <input type="text" readOnly value={prev?.Altitude} />
        <br />
        <input type="text" readOnly value={prev?.HIS} />
        <br />
        <input type="text" readOnly value={prev?.ADI} />
      </div>
    </div>
  );
}
