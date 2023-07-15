import "./alt.css";

export default function Alt({ val, displayVisual }) {
  return (
    displayVisual ? (
      <div className="alt">
        <input
        readOnly
          className="range"
          type="range"
          value={val}
          min={0}
          max={3000}
          name=""
          id=""
        />
        <ul className="numbers">
          <li>3000</li>
          <li>2000</li>
          <li>1000</li>
          <li>0</li>
        </ul>
      </div>
    )  : <p>ALT: {val}</p>
  );
}
