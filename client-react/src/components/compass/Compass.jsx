import "./compass.css";
export default function Compass({ val, displayVisual }) {
  return (
    displayVisual ? (
      <div style={{ "--rotation": `${val}deg` }} className="compass">
        <div className="arrow">↑</div>
        <div className="values">0</div>
        <div className="values">90</div>
        <div className="values">180</div>
        <div className="values">270</div>
      </div>
    )  : <p>HIS: {val}</p>
  );
}
