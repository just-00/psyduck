export const FlowerComponent = ({
  fillPetal,
  fillStamen,
  x,
  y,
  rotate = 0,
}: {
  fillPetal: string;
  fillStamen: string;
  x: number;
  y: number;
  rotate?: number;
}) => {
  const PETAL_WODTH = 5;
  const BASE_X = PETAL_WODTH * 4;
  return (
    <g
      transform={`translate(${x}, ${y}) rotate(${rotate},${BASE_X},${BASE_X})`}
      transform-origin={`${BASE_X} ${BASE_X}`}
    >
      <circle
        r={PETAL_WODTH}
        fill={fillPetal}
        cx={BASE_X}
        cy={BASE_X - PETAL_WODTH * 1.5}
      />

      <circle
        r={PETAL_WODTH}
        fill={fillPetal}
        cx={BASE_X + PETAL_WODTH * 1.5}
        cy={BASE_X}
      />

      <circle
        r={PETAL_WODTH}
        fill={fillPetal}
        cx={BASE_X}
        cy={BASE_X + PETAL_WODTH * 1.5}
      />

      <circle
        r={PETAL_WODTH}
        fill={fillPetal}
        cx={BASE_X - PETAL_WODTH * 1.5}
        cy={BASE_X}
      />

      <circle r={PETAL_WODTH} fill={fillStamen} cx={BASE_X} cy={BASE_X} />
    </g>
  );
};
