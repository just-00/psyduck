export const DuckComponent = () => {
  const BODY_COLOR = "#f3d543";
  const MOUTH_COLOR = "#fbf1ae";
  const CENTER_X = 300;
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
  const WIDTH_HAIR = 12;
  const BORDER_RADIUS_HAIR = 6;
  const HAIR_ROOT_Y = 150;
  const HAIR_ROTATE = 15;
  const HAIR_DISTANCE = 17;

  return (
    <svg width={600} height={1000}>
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
        />
        <ellipse rx="200" ry="160" cx={CENTER_X} cy="200" fill={BODY_COLOR} />
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
        />
        <ellipse
          cx={CENTER_X - EYE_CLOEST_WIDTH - EYE_RX}
          cy={EYE_CY}
          rx={EYE_RX}
          ry={EYE_RY}
          fill="#fff"
        />
        <ellipse
          cx={CENTER_X + EYE_CLOEST_WIDTH + EYE_RX}
          cy={EYE_CY}
          rx={EYE_RX}
          ry={EYE_RY}
          fill="#fff"
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
      
    </svg>
  );
};
