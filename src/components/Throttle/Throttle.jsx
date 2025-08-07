import { useState } from "react";
import { useThrottle } from "../../customHooks/useThrottle";

export default function ThrottledButton() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleThrottleClick = useThrottle(() => {
    setClickCount((prev) => prev + 1);
    setMessage("Clicked Processed");
    setTimeout(() => setMessage(""), 500);
  }, 1000);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Throttled Button Demo</h2>
      <button onClick={handleThrottleClick}>
        Click Here to check Throttling
      </button>
      <div style={{ marginTop: "20px" }}>
        <p>Click count: {clickCount}</p>
        {message && <p style={{ color: "green" }}>{message}</p>}
        <p>Try rapid clicking - you'll see it only registers once per second</p>
      </div>
    </div>
  );
}