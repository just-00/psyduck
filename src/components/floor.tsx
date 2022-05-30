import { DuckComponent } from "./duck";
import { FlowerComponent } from "./flower";
import { RadioComponent } from "./radio";
import { forwardRef } from "react";

export const FloorComponent = forwardRef<SVGSVGElement, 
  { rotateDeg?: number, leftBoardText: string, rightBoardText: string }>(
  ({ rotateDeg, leftBoardText, rightBoardText }, ref) => {
    const OUT_FLOOR_COLOR = "#bcedb1";
    const OUT_FLOOR_WIDTH = 230;
    const OUT_FLOOR_HEIGHT = 55;

    const FLOOR_COLOR = "#8dcc5a";
    const FLOOR_WIDTH = 200;
    const FLOOR_HEIGHT = 50;
    const FLOWER_POSITIONS = [
      {
        x: FLOOR_WIDTH * 0.2,
        y: OUT_FLOOR_HEIGHT * 0.6,
        fillPetal: "pink",
        fillStamen: "#fff",
        rotate: 35,
      },
      {
        x: FLOOR_WIDTH * 1.4,
        y: OUT_FLOOR_HEIGHT * 1.1,
        fillPetal: "#fff",
        fillStamen: "orange",
        rotate: 49,
      },
      {
        x: FLOOR_WIDTH * 1.8,
        y: OUT_FLOOR_HEIGHT * 0.5,
        fillPetal: "mediumpurple",
        fillStamen: "orange",
        rotate: 49,
      },
    ];

    return (
      <svg width={500} height={400} ref={ref}>
        <g transform="translate(60, 200)">
          <ellipse
            style={{
              transform: `translateY(${
                (OUT_FLOOR_HEIGHT - FLOOR_HEIGHT) * 2
              }px)`,
            }}
            rx={OUT_FLOOR_WIDTH}
            ry={OUT_FLOOR_HEIGHT}
            cx={OUT_FLOOR_WIDTH}
            cy={OUT_FLOOR_HEIGHT}
            fill={OUT_FLOOR_COLOR}
          />
          <ellipse
            style={{
              transform: `translateX(${OUT_FLOOR_WIDTH - FLOOR_WIDTH}px)`,
            }}
            rx={FLOOR_WIDTH}
            ry={FLOOR_HEIGHT}
            cx={FLOOR_WIDTH}
            cy={FLOOR_HEIGHT}
            fill={FLOOR_COLOR}
          />
          {FLOWER_POSITIONS.map((props, index) => (
            <FlowerComponent {...props} key={index} />
          ))}
          <RadioComponent transform="translate(280, -40) scale(0.8)" />
        </g>
        <g transform="scale(0.3) translate(150, 20)">
          <DuckComponent rotateDeg={rotateDeg}
            leftBoardText={leftBoardText}
            rightBoardText={rightBoardText}/>
        </g>
      </svg>
    );
  }
);

FloorComponent.displayName = "FloorComponent";
