import { useEffect, useState } from "react";

export default function App() {
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function refreshStatus() {
    try {
      const res = await fetch("http://localhost:8000/status");
      const data = await res.json();
      setRunning(Boolean(data.running));
    } catch {
      setRunning(false);
    }
  }

  useEffect(() => {
    refreshStatus();
    const t = setInterval(refreshStatus, 1500);
    return () => clearInterval(t);
  }, []);

  async function startDetector() {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("http://localhost:8000/start-detection", {
        method: "POST",
      });
      const data = await res.json();
      setResult(data);
      refreshStatus();
    } catch (err) {
      setResult({ ok: false, error: String(err) });
    } finally {
      setLoading(false);
    }
  }

  async function stopDetector() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/stop-detection", {
        method: "POST",
      });
      const data = await res.json();
      setResult(data);
      refreshStatus();
    } catch (err) {
      setResult({ ok: false, error: String(err) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>ML Model Web Runner (Local)</h2>

      <div style={{ marginTop: 10 }}>
        <button onClick={startDetector} disabled={loading || running}>
          {loading ? "Starting..." : running ? "Running" : "Run Model"}
        </button>

        <button
          onClick={stopDetector}
          disabled={loading || !running}
          style={{ marginLeft: 10 }}
        >
          Stop
        </button>
      </div>

      <div style={{ marginTop: 15 }}>
        <b>Status:</b>{" "}
        <span style={{ color: running ? "green" : "red" }}>
          {running ? "RUNNING" : "STOPPED"}
        </span>
      </div>

      <div style={{ marginTop: 20 }}>
        <p><b>Backend Response:</b></p>
        <pre style={{ background: "#eee", padding: 10 }}>
          {result ? JSON.stringify(result, null, 2) : "No output yet"}
        </pre>
      </div>

      <div style={{ marginTop: 10, fontSize: 13, color: "#555" }}>
        Note: The OpenCV popup window will open on the backend PC (where Python runs).
      </div>
    </div>
  );
}
