import "./App.css";
import { FloorComponent } from "./components/floor";
import { useEffect, useRef, useState } from "react";
import { toCanvas } from "html-to-image";
import GIF from "gif.js";
import gifWorkerUrl from "gif.js/dist/gif.worker.js?url";
import { TextField, Button } from "@mui/material";

const STEP = 5;
const MAX_ROTATE_DEG = 150;
const BIG_DELAY = 2000 * 0.35;
const DELAY_STEP = (2000 * 0.3) / (150 / STEP);

function App() {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [canvasList, setCanvasList] = useState<HTMLCanvasElement[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [leftBoardText, setLeftBoardText] = useState("");
  const [rightBoardText, setRightBoardText] = useState("");

  useEffect(() => {
    if (exporting && svgRef.current) {
      toCanvas(svgRef.current as unknown as HTMLElement).then((canvas) => {
        canvasList.push(canvas);
        console.log(canvas);
        if (rotateDeg === MAX_ROTATE_DEG) {
          const gif = new GIF({
            width: 460,
            height: 400,
            workerScript: gifWorkerUrl,
          });
          gif.addFrame(canvasList[0]);
          for (let i = 0; i < canvasList.length; i++) {
            gif.addFrame(canvasList[i], {
              delay: i === 0 ? BIG_DELAY : DELAY_STEP,
            });
          }
          gif.addFrame(canvasList[canvasList.length - 1], { delay: BIG_DELAY });
          for (let i = 0; i < canvasList.length; i++) {
            gif.addFrame(canvasList[canvasList.length - 1 - i], {
              delay: i === 0 ? BIG_DELAY : DELAY_STEP,
            });
          }
          gif.addFrame(canvasList[0], { delay: BIG_DELAY });
          gif.on("finished", function (blob) {
            setExporting(false);
            setCanvasList([]);
            setRotateDeg(0);
            window.open(URL.createObjectURL(blob));
          });
          gif.render();
        } else {
          setRotateDeg(rotateDeg + STEP);
        }
      });
    }
  }, [rotateDeg, exporting]);

  return (
    <section className="center">
      <section>
        <section className="action-wrapper">
          <TextField
            label="左手"
            variant="outlined"
            onChange={(e) => {
              setLeftBoardText(e.target.value);
            }}
          />
          <TextField
            label="右手"
            variant="outlined"
            onChange={(e) => {
              setRightBoardText(e.target.value);
            }}
          />
        </section>
        <FloorComponent
          leftBoardText={leftBoardText}
          rightBoardText={rightBoardText}
        />
        <Button
          color="primary"
          onClick={() => setExporting(true)}
          disabled={exporting}
        >
          生成GIF
        </Button>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: -1000,
            zIndex: -1,
          }}
        >
          <FloorComponent
            leftBoardText={leftBoardText}
            rightBoardText={rightBoardText}
            rotateDeg={rotateDeg}
            ref={svgRef}
          />
        </div>
      </section>
    </section>
  );
}

export default App;
