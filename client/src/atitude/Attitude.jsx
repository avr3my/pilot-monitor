import "./attitude.css";

export default function Attitude({ val, displayVisual }) {
  const getCssAtitude = () => {
    let value = val + 100;
    value = parseInt(value / 2);
    return `${value}%`;
  };
  return displayVisual ? (
    <div style={{ "--attitude": getCssAtitude() }} className="attitude"></div>
  ) : (
    <p>ADI: {val}</p>
  );
}
