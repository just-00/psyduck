import "./App.css";
import { FloorComponent } from "./components/floor";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";

function App() {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [exporting, setExporting] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [leftBoardText, setLeftBoardText] = useState('');
  const [rightBoardText, setRightBoardText] = useState('');

  useEffect(() => {
    if (exporting) {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && svgRef.current) {
      }
    }
  }, [rotateDeg, exporting]);

  return (
    <>
      <section style={{margin: '10px'}}>
        <TextField label="左手" variant="outlined" onChange={(e)=>{
          setLeftBoardText(e.target.value)
        }} />
        <TextField label="右手" variant="outlined" onChange={(e)=>{
          setRightBoardText(e.target.value)
        }} />
      </section>
      <FloorComponent leftBoardText={leftBoardText} rightBoardText={rightBoardText} />
      <div style={{ display: "none" }}>
        <FloorComponent rotateDeg={rotateDeg} ref={svgRef}/>
        <canvas ref={canvasRef} width={460} height={400} />
      </div>
    </>
  );
}

export default App;
