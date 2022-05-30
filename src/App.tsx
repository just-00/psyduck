import "./App.css";
import { FloorComponent } from "./components/floor";
import { useEffect, useRef, useState } from "react";

function App() {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [exporting, setExporting] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (exporting) {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && svgRef.current) {
      }
    }
  }, [rotateDeg, exporting]);

  return (
    <>
      <FloorComponent />
      <div style={{ display: "none" }}>
        <FloorComponent rotateDeg={rotateDeg} ref={svgRef} />
        <canvas ref={canvasRef} width={460} height={400} />
      </div>
    </>
  );
}

export default App;
