import "./switch.css";

export default function Switch({ displayVisual, setDisplayVisual }) {
  return (
    <div className="switch">
      <button
        className={displayVisual ? "selected" : ""}
        onClick={() => setDisplayVisual(true)}
      >
        Visual
      </button>
      <button
        className={displayVisual? "" : "selected"}
        onClick={() => setDisplayVisual(false)}
      >
        Text
      </button>
    </div>
  );
}
