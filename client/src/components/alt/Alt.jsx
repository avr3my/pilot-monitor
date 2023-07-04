import { useEffect, useRef } from "react";
import "./alt.css";
export default function Alt({ val, displayVisual, prev }) {
  const rangeRef = useRef(0);
  const ref = useRef(0);
  useEffect(() => {
    const jump = 25;
    console.log(prev, val)
    rangeRef.current.value = prev || 0;
    const interval = setInterval(() => {
      if (Math.abs(rangeRef.current.value - val) <= jump) {
        rangeRef.current.value = val;
        clearInterval(interval);
        return;
      } else if (val > prev) {
        rangeRef.current.value = parseInt(rangeRef.current.value)  + jump;
      } else {
        rangeRef.current.value = parseInt(rangeRef.current.value) - jump;
      }
    }, 1);
  }, [val]);
  return displayVisual ? (
    <div className="alt">
      <input
        readOnly
        className="range"
        type="range"
        // value={val}
        ref={rangeRef}
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
  ) : (
    <p>
      ALT: {val}
    </p>
  );
}
