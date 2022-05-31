import cn from "classnames";
import styles from "./duck.module.css";

export const DuckComponent = ({
  rotateDeg,
  leftBoardText,
  rightBoardText,
}: {
  rotateDeg?: number;
  leftBoardText: string;
  rightBoardText: string;
}) => {
  const BODY_COLOR = "#f3d543";
  const MOUTH_COLOR = "#fbf1ae";
  const STROKE_COLOR = "#333";
  const STROKE_WIDTH = 2;
  const CENTER_X = 650;
  const BODY_WIDTH = 240;
  const BODY_CENTER_Y = 500;
  const MOUTH_WIDTH = 140;
  const MOUTH_CENTRE_Y = 350;
  const MOUTH_CONTROL_WIDTH_0 = 200;
  const MOUTH_CONTROL_Y_0 = 480;
  const MOUTH_CONTROL_WIDTH_1 = 95;
  const MOUTH_CONTROL_Y_1 = 290;
  const MOUTH_POINT_WIDTH_1 = 110;
  const MOUTH_POINT_Y_1 = 260;
  const MOUTH_CONTROL_WIDTH_2 = 126;
  const MOUTH_CONTROL_Y_2 = 230;
  const MOUTH_POINT_WIDTH_2 = 100;
  const MOUTH_POINT_Y_2 = 218;
  const MOUTH_CONTROL_WIDTH_3 = 30;
  const MOUTH_CONTROL_Y_3 = 205;
  const MOUTH_POINT_WIDTH_3 = 15;
  const MOUTH_POINT_Y_3 = 192;
  const MOUTH_CONTROL_Y_4 = 180;

  const FEET_TOP_Y = 860;
  const FEET_VALLEY_DEPTH = 30;
  const FEET_VALLEY_WIDTH = 40;
  const FEET_VALLEY_SIDE_TOP = 20;
  const FEET_ROOT_CONTROL_Y = 560;
  const FEET_ROTATE = 20;
  const FEET_DISITANCE = 40;

  const EYE_RX = 45;
  const EYE_RY = 35;
  const EYE_CLOEST_WIDTH = 30;
  const EYE_CY = 160;
  const EYE_BALL_R = 4;

  const LENGTH_HAIR = 70;
  const WIDTH_HAIR = 16;
  const BORDER_RADIUS_HAIR = 8;
  const HAIR_ROOT_Y = 150;
  const HAIR_ROTATE = 15;
  const HAIR_DISTANCE = 22;

  const HAND_TOP = 230;
  const HAND_VALLEY_DEPTH = 24;
  const HAND_VALLEY_WIDTH = 16;
  const WRIST_WIDTH = 30;
  const WIRST_HEIGHT = 32;
  const WRIST_CONTROL_X = 140;
  const WRITST_CONTROL_Y = 600;
  const HAND_DISTANCE = 200;
  const HAND_ROTATE_Y = 470;

  const LEFT_BOARD_TEXT = leftBoardText;
  const RIGHT_BOARD_TEXT = rightBoardText;

  const MESSAGE_BOARD_WIDTH = 340;
  const MESSAGE_BOARD_HEIGHT = 180;
  const MESSAGE_BOARD_COLOR = "#fff";
  const MESSAGE_BOARD_STROKE_COLOR = "#333";

  return (
    <svg width={1400} height={1200}>
      <path
        d={`M${
          CENTER_X - WIDTH_HAIR / 2 + BORDER_RADIUS_HAIR
        } ${HAIR_ROOT_Y} Q ${CENTER_X - WIDTH_HAIR / 2} ${HAIR_ROOT_Y}, ${
          CENTER_X - WIDTH_HAIR / 2
        } ${HAIR_ROOT_Y - BORDER_RADIUS_HAIR} V ${
          HAIR_ROOT_Y - LENGTH_HAIR + BORDER_RADIUS_HAIR
        } Q ${CENTER_X - WIDTH_HAIR / 2} ${HAIR_ROOT_Y - LENGTH_HAIR}, ${
          CENTER_X - WIDTH_HAIR / 2 + BORDER_RADIUS_HAIR
        }  ${HAIR_ROOT_Y - LENGTH_HAIR} H ${
          CENTER_X + WIDTH_HAIR / 2 - BORDER_RADIUS_HAIR
        } Q ${CENTER_X + WIDTH_HAIR / 2} ${HAIR_ROOT_Y - LENGTH_HAIR}, ${
          CENTER_X + WIDTH_HAIR / 2
        } ${HAIR_ROOT_Y - LENGTH_HAIR + BORDER_RADIUS_HAIR} V ${
          HAIR_ROOT_Y - BORDER_RADIUS_HAIR
        } Q ${CENTER_X + WIDTH_HAIR / 2} ${HAIR_ROOT_Y}, ${
          CENTER_X + WIDTH_HAIR / 2 - BORDER_RADIUS_HAIR
        } ${HAIR_ROOT_Y} Z`}
        fill="#000"
      />
      <path
        d={`M${
          CENTER_X - WIDTH_HAIR / 2 + BORDER_RADIUS_HAIR
        } ${HAIR_ROOT_Y} Q ${CENTER_X - WIDTH_HAIR / 2} ${HAIR_ROOT_Y}, ${
          CENTER_X - WIDTH_HAIR / 2
        } ${HAIR_ROOT_Y - BORDER_RADIUS_HAIR} V ${
          HAIR_ROOT_Y - LENGTH_HAIR + BORDER_RADIUS_HAIR
        } Q ${CENTER_X - WIDTH_HAIR / 2} ${HAIR_ROOT_Y - LENGTH_HAIR}, ${
          CENTER_X - WIDTH_HAIR / 2 + BORDER_RADIUS_HAIR
        }  ${HAIR_ROOT_Y - LENGTH_HAIR} H ${
          CENTER_X + WIDTH_HAIR / 2 - BORDER_RADIUS_HAIR
        } Q ${CENTER_X + WIDTH_HAIR / 2} ${HAIR_ROOT_Y - LENGTH_HAIR}, ${
          CENTER_X + WIDTH_HAIR / 2
        } ${HAIR_ROOT_Y - LENGTH_HAIR + BORDER_RADIUS_HAIR} V ${
          HAIR_ROOT_Y - BORDER_RADIUS_HAIR
        } Q ${CENTER_X + WIDTH_HAIR / 2} ${HAIR_ROOT_Y}, ${
          CENTER_X + WIDTH_HAIR / 2 - BORDER_RADIUS_HAIR
        } ${HAIR_ROOT_Y} Z`}
        fill="#000"
        transform={`rotate(-${HAIR_ROTATE},${CENTER_X},${
          HAIR_ROOT_Y - LENGTH_HAIR / 2
        }) translate(-${HAIR_DISTANCE},0)`}
      />
      <path
        d={`M${
          CENTER_X - WIDTH_HAIR / 2 + BORDER_RADIUS_HAIR
        } ${HAIR_ROOT_Y} Q ${CENTER_X - WIDTH_HAIR / 2} ${HAIR_ROOT_Y}, ${
          CENTER_X - WIDTH_HAIR / 2
        } ${HAIR_ROOT_Y - BORDER_RADIUS_HAIR} V ${
          HAIR_ROOT_Y - LENGTH_HAIR + BORDER_RADIUS_HAIR
        } Q ${CENTER_X - WIDTH_HAIR / 2} ${HAIR_ROOT_Y - LENGTH_HAIR}, ${
          CENTER_X - WIDTH_HAIR / 2 + BORDER_RADIUS_HAIR
        }  ${HAIR_ROOT_Y - LENGTH_HAIR} H ${
          CENTER_X + WIDTH_HAIR / 2 - BORDER_RADIUS_HAIR
        } Q ${CENTER_X + WIDTH_HAIR / 2} ${HAIR_ROOT_Y - LENGTH_HAIR}, ${
          CENTER_X + WIDTH_HAIR / 2
        } ${HAIR_ROOT_Y - LENGTH_HAIR + BORDER_RADIUS_HAIR} V ${
          HAIR_ROOT_Y - BORDER_RADIUS_HAIR
        } Q ${CENTER_X + WIDTH_HAIR / 2} ${HAIR_ROOT_Y}, ${
          CENTER_X + WIDTH_HAIR / 2 - BORDER_RADIUS_HAIR
        } ${HAIR_ROOT_Y} Z`}
        fill="#000"
        transform={`rotate(${HAIR_ROTATE},${CENTER_X},${
          HAIR_ROOT_Y - LENGTH_HAIR / 2
        }) translate(${HAIR_DISTANCE},0)`}
      />
      <path
        d={`M ${CENTER_X} ${FEET_TOP_Y} Q ${CENTER_X + FEET_VALLEY_WIDTH} ${
          FEET_TOP_Y - FEET_VALLEY_DEPTH
        }, ${CENTER_X + 2 * FEET_VALLEY_WIDTH} ${
          FEET_TOP_Y - FEET_VALLEY_DEPTH + FEET_VALLEY_SIDE_TOP
        } Q ${CENTER_X} ${FEET_ROOT_CONTROL_Y}, ${
          CENTER_X - 2 * FEET_VALLEY_WIDTH
        } ${FEET_TOP_Y - FEET_VALLEY_DEPTH + FEET_VALLEY_SIDE_TOP} Q ${
          CENTER_X - FEET_VALLEY_DEPTH
        } ${FEET_TOP_Y - FEET_VALLEY_DEPTH}, ${CENTER_X} ${FEET_TOP_Y}`}
        transform={`rotate(${-FEET_ROTATE}, ${CENTER_X} ${FEET_ROOT_CONTROL_Y}) translate(${FEET_DISITANCE}, 0)`}
        fill={MOUTH_COLOR}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      <path
        d={`M ${CENTER_X} ${FEET_TOP_Y} Q ${CENTER_X + FEET_VALLEY_WIDTH} ${
          FEET_TOP_Y - FEET_VALLEY_DEPTH
        }, ${CENTER_X + 2 * FEET_VALLEY_WIDTH} ${
          FEET_TOP_Y - FEET_VALLEY_DEPTH + FEET_VALLEY_SIDE_TOP
        } Q ${CENTER_X} ${FEET_ROOT_CONTROL_Y}, ${
          CENTER_X - 2 * FEET_VALLEY_WIDTH
        } ${FEET_TOP_Y - FEET_VALLEY_DEPTH + FEET_VALLEY_SIDE_TOP} Q ${
          CENTER_X - FEET_VALLEY_DEPTH
        } ${FEET_TOP_Y - FEET_VALLEY_DEPTH}, ${CENTER_X} ${FEET_TOP_Y}`}
        transform={`rotate(${FEET_ROTATE}, ${CENTER_X} ${FEET_ROOT_CONTROL_Y}) translate(${-FEET_DISITANCE}, 0)`}
        fill={MOUTH_COLOR}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      <g transform="translate(0, 100)">
        <path
          d={`M ${
            CENTER_X - BODY_WIDTH
          } ${BODY_CENTER_Y} A ${BODY_WIDTH} 200 0 0 0 ${
            CENTER_X + BODY_WIDTH
          } ${BODY_CENTER_Y} A ${BODY_WIDTH} 250 1 0 0 ${
            CENTER_X - BODY_WIDTH
          } ${BODY_CENTER_Y}`}
          fill={BODY_COLOR}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
        />
        <ellipse
          rx="200"
          ry="160"
          cx={CENTER_X}
          cy="200"
          fill={BODY_COLOR}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
        />
        <path
          d={`M ${CENTER_X - MOUTH_WIDTH} ${MOUTH_CENTRE_Y} C ${
            CENTER_X - MOUTH_CONTROL_WIDTH_0
          } ${MOUTH_CONTROL_Y_0}, ${
            CENTER_X + MOUTH_CONTROL_WIDTH_0
          } ${MOUTH_CONTROL_Y_0}, ${
            CENTER_X + MOUTH_WIDTH
          } ${MOUTH_CENTRE_Y} Q ${
            CENTER_X + MOUTH_CONTROL_WIDTH_1
          } ${MOUTH_CONTROL_Y_1}, ${
            CENTER_X + MOUTH_POINT_WIDTH_1
          } ${MOUTH_POINT_Y_1} Q ${
            CENTER_X + MOUTH_CONTROL_WIDTH_2
          } ${MOUTH_CONTROL_Y_2}, ${
            CENTER_X + MOUTH_POINT_WIDTH_2
          } ${MOUTH_POINT_Y_2} Q ${
            CENTER_X + MOUTH_CONTROL_WIDTH_3
          } ${MOUTH_CONTROL_Y_3}, ${
            CENTER_X + MOUTH_POINT_WIDTH_3
          } ${MOUTH_POINT_Y_3} Q ${CENTER_X} ${MOUTH_CONTROL_Y_4}, ${
            CENTER_X - MOUTH_POINT_WIDTH_3
          } ${MOUTH_POINT_Y_3} Q ${
            CENTER_X - MOUTH_CONTROL_WIDTH_3
          } ${MOUTH_CONTROL_Y_3}, ${
            CENTER_X - MOUTH_POINT_WIDTH_2
          } ${MOUTH_POINT_Y_2} Q ${
            CENTER_X - MOUTH_CONTROL_WIDTH_2
          } ${MOUTH_CONTROL_Y_2}, ${
            CENTER_X - MOUTH_POINT_WIDTH_1
          } ${MOUTH_POINT_Y_1} Q ${
            CENTER_X - MOUTH_CONTROL_WIDTH_1
          } ${MOUTH_CONTROL_Y_1}, ${CENTER_X - MOUTH_WIDTH} ${MOUTH_CENTRE_Y}`}
          fill={MOUTH_COLOR}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
        />
        <ellipse
          cx={CENTER_X - EYE_CLOEST_WIDTH - EYE_RX}
          cy={EYE_CY}
          rx={EYE_RX}
          ry={EYE_RY}
          fill="#fff"
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
        />
        <ellipse
          cx={CENTER_X + EYE_CLOEST_WIDTH + EYE_RX}
          cy={EYE_CY}
          rx={EYE_RX}
          ry={EYE_RY}
          fill="#fff"
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
        />
        <circle
          cx={CENTER_X - EYE_CLOEST_WIDTH - EYE_RX}
          cy={EYE_CY}
          r={EYE_BALL_R}
          fill="#000"
        />
        <circle
          cx={CENTER_X + EYE_CLOEST_WIDTH + EYE_RX}
          cy={EYE_CY}
          r={EYE_BALL_R}
          fill="#000"
        />
      </g>
      {/* 右手 */}
      <g transform={`translate(${HAND_DISTANCE},0)`}>
        <path
          className={styles.hand}
          d={`M ${CENTER_X} ${HAND_TOP} L ${CENTER_X + HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } L ${CENTER_X + 3 * HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } L ${CENTER_X + WRIST_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH + WIRST_HEIGHT
          } C ${
            CENTER_X + WRIST_WIDTH + WRIST_CONTROL_X
          } ${WRITST_CONTROL_Y}, ${
            CENTER_X - WRIST_WIDTH - WRIST_CONTROL_X
          } ${WRITST_CONTROL_Y}, ${CENTER_X - WRIST_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH + WIRST_HEIGHT
          } L ${CENTER_X - 3 * HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } L ${CENTER_X - HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } Z`}
          fill={BODY_COLOR}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
          transform-origin={`${CENTER_X} ${HAND_ROTATE_Y}`}
          style={{
            animationName: rotateDeg === undefined ? undefined : "none",
            transform:
              rotateDeg === undefined ? undefined : `rotate(${rotateDeg}deg)`,
          }}
        />
        <rect
          width={MESSAGE_BOARD_WIDTH}
          height={MESSAGE_BOARD_HEIGHT}
          x={CENTER_X - 20}
          stroke={MESSAGE_BOARD_STROKE_COLOR}
          y={HAND_TOP - MESSAGE_BOARD_HEIGHT * 0.6}
          fill={MESSAGE_BOARD_COLOR}
          className={styles.hand}
          transform-origin={`${CENTER_X} ${HAND_ROTATE_Y}`}
          style={{
            animationName: rotateDeg === undefined ? undefined : "none",
            transform:
              rotateDeg === undefined ? undefined : `rotate(${rotateDeg}deg)`,
          }}
        />
        <text
          className={cn(styles.boardText, styles.hand)}
          x={CENTER_X - 20 + MESSAGE_BOARD_WIDTH / 2}
          y={HAND_TOP - MESSAGE_BOARD_HEIGHT * 0.1}
          textAnchor="middle"
          dominantBaseline="middle"
          transform-origin={`${CENTER_X} ${HAND_ROTATE_Y}`}
          style={{
            animationName: rotateDeg === undefined ? undefined : "none",
            transform:
              rotateDeg === undefined ? undefined : `rotate(${rotateDeg}deg)`,
          }}
        >
          {RIGHT_BOARD_TEXT}
        </text>
      </g>

      {/* 左手 */}
      <g transform={`translate(-${HAND_DISTANCE},0)`}>
        <path
          className={cn(styles.hand, styles.left)}
          d={`M ${CENTER_X} ${HAND_TOP} L ${CENTER_X + HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } L ${CENTER_X + 3 * HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } L ${CENTER_X + WRIST_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH + WIRST_HEIGHT
          } C ${
            CENTER_X + WRIST_WIDTH + WRIST_CONTROL_X
          } ${WRITST_CONTROL_Y}, ${
            CENTER_X - WRIST_WIDTH - WRIST_CONTROL_X
          } ${WRITST_CONTROL_Y}, ${CENTER_X - WRIST_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH + WIRST_HEIGHT
          } L ${CENTER_X - 3 * HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } L ${CENTER_X - HAND_VALLEY_WIDTH} ${
            HAND_TOP + HAND_VALLEY_DEPTH
          } Z`}
          fill={BODY_COLOR}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
          transform-origin={`${CENTER_X} ${HAND_ROTATE_Y}`}
          style={{
            animationName: rotateDeg === undefined ? undefined : "none",
            transform:
              rotateDeg === undefined
                ? undefined
                : `rotate(-${150 - rotateDeg}deg)`,
          }}
        />
        <rect
          width={MESSAGE_BOARD_WIDTH}
          height={MESSAGE_BOARD_HEIGHT}
          x={CENTER_X + 20 - MESSAGE_BOARD_WIDTH}
          y={HAND_TOP - MESSAGE_BOARD_HEIGHT * 0.6}
          fill={MESSAGE_BOARD_COLOR}
          stroke={MESSAGE_BOARD_STROKE_COLOR}
          className={cn(styles.hand, styles.left)}
          transform-origin={`${CENTER_X} ${HAND_ROTATE_Y}`}
          style={{
            animationName: rotateDeg === undefined ? undefined : "none",
            transform:
              rotateDeg === undefined
                ? undefined
                : `rotate(-${150 - rotateDeg}deg)`,
          }}
        />
        <text
          className={cn(styles.boardText, styles.hand, styles.left)}
          x={CENTER_X + 20 - MESSAGE_BOARD_WIDTH / 2}
          y={HAND_TOP - MESSAGE_BOARD_HEIGHT * 0.1}
          textAnchor="middle"
          dominantBaseline="middle"
          transform-origin={`${CENTER_X} ${HAND_ROTATE_Y}`}
          style={{
            animationName: rotateDeg === undefined ? undefined : "none",
            transform:
              rotateDeg === undefined
                ? undefined
                : `rotate(-${150 - rotateDeg}deg)`,
          }}
        >
          {LEFT_BOARD_TEXT}
        </text>
      </g>
    </svg>
  );
};
