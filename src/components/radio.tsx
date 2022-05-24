export const RadioComponent = () => {

    // 主体
    const WIDTH = 100
    const TOP_BOTTOM_HEIGHT = 28
    const MIDDLE_HEIGHT = 14
    const RECT_RADIUS = 12
    const TOTAL_HEIGHT = TOP_BOTTOM_HEIGHT * 2 + MIDDLE_HEIGHT

    // 按钮
    const BUTTON_WIDTH = 8
    const BUTTON_HEIGHT = 4

    // 当中的圈
    const CIRCLE_RADIUS = 22
    const CIRCLE_STROKE_WIDTH = 7

    // 天线
    const ANTENNA_X = 6
    const ANTENNA_Y = 24
    const ANTENNA_WIDTH_TOP = 6
    const ANTENNA_WIDTH_BOTTOM = 6

    return (
        <svg
        //  width={WIDTH}
        //  height={TOP_BOTTOM_HEIGHT * 2 + MIDDLE_HEIGHT}
        //  style={{
        //     borderRadius: 12
        // }}
        >
            {/* 主体 */}
            <g transform={`
                translate(0 ${ANTENNA_Y + ANTENNA_WIDTH_TOP / 2})
            `}
            >
            <path
                fill="red"
                 d={`M 0 ${TOP_BOTTOM_HEIGHT} 
                    V ${RECT_RADIUS} 
                    Q 0 0, ${RECT_RADIUS} 0 
                    H ${WIDTH - RECT_RADIUS} 
                    Q ${WIDTH} 0, ${WIDTH} ${RECT_RADIUS} 
                    V ${TOP_BOTTOM_HEIGHT} 
                    H 0 Z`} />
            <rect width={WIDTH} y={TOP_BOTTOM_HEIGHT} height={MIDDLE_HEIGHT} style={{
                fill: 'black',
            }} />
              <path
                fill="white"
                 d={`M 0 ${TOP_BOTTOM_HEIGHT + MIDDLE_HEIGHT}
                  V ${TOTAL_HEIGHT- RECT_RADIUS} 
                  Q 0 ${TOTAL_HEIGHT}, ${RECT_RADIUS} ${TOTAL_HEIGHT}
                  H ${WIDTH - RECT_RADIUS} 
                  Q ${WIDTH} ${TOTAL_HEIGHT}, ${WIDTH} ${TOTAL_HEIGHT - RECT_RADIUS} 
                  V ${TOP_BOTTOM_HEIGHT + MIDDLE_HEIGHT} 
                  H 0 Z`} />

            {/* 按钮1 */}
            <rect x="28" y={`-${BUTTON_HEIGHT}`} width={BUTTON_WIDTH} height={BUTTON_HEIGHT} style={{
                fill: 'red',
            }} />

            {/* 按钮2 */}
            <rect x="40" y={`-${BUTTON_HEIGHT}`} width={BUTTON_WIDTH} height={BUTTON_HEIGHT} style={{
                fill: 'red',
            }} />
            
            
               {/* 当中的圈 */}
               <circle 
            cx={WIDTH / 2}
             cy={TOP_BOTTOM_HEIGHT + MIDDLE_HEIGHT / 2} 
             r={CIRCLE_RADIUS}
              stroke="black" 
              stroke-width={CIRCLE_STROKE_WIDTH}
              fill="white" />

            </g>
           
            {/* 天线 */}
            <path d={`
                M ${RECT_RADIUS - 3} ${ANTENNA_Y + ANTENNA_WIDTH_TOP / 2}
                H ${RECT_RADIUS + ANTENNA_WIDTH_BOTTOM}
                L ${RECT_RADIUS + ANTENNA_X + ANTENNA_WIDTH_TOP} ${ANTENNA_WIDTH_TOP / 2}
                Q ${RECT_RADIUS + ANTENNA_X + ANTENNA_WIDTH_TOP / 2} 0, ${RECT_RADIUS + ANTENNA_X} ${ANTENNA_WIDTH_TOP / 2}
                Z
            `}/>
        </svg>
    )
}