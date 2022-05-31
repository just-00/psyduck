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
  const [leftBoardText, setLeftBoardText] = useState("");
  const [rightBoardText, setRightBoardText] = useState("");

  // 是否正在导出gif中
  const [exporting, setExporting] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  // 存每一帧的数组
  const [canvasList, setCanvasList] = useState<HTMLCanvasElement[]>([]);
  // 记录每一帧的旋转角度
  const [rotateDeg, setRotateDeg] = useState(0);
  useEffect(() => {
    if (!exporting || !svgRef.current) {
      return;
    }
    toCanvas(svgRef.current as unknown as HTMLElement).then((canvas) => {
      canvasList.push(canvas);
      // 当到最后一个帧时，开始导出gif
      if (rotateDeg === MAX_ROTATE_DEG) {
        const gif = new GIF({
          width: 460,
          height: 400,
          workerScript: gifWorkerUrl,
        });

        // 增加正序动画帧
        gif.addFrame(canvasList[0]);
        for (let i = 0; i < canvasList.length; i++) {
          gif.addFrame(canvasList[i], {
            // 第一帧停留得比较久
            delay: i === 0 ? BIG_DELAY : DELAY_STEP,
          });
        }
        // 增加逆序动画帧
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
