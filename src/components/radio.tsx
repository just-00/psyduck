export const RadioComponent = () => {

    // 主体
    const WIDTH = 100
    const TOP_BOTTOM_HEIGHT = 28
    const MIDDLE_HEIGHT = 16
    const RECT_RADIUS = 12
    const TOTAL_HEIGHT = TOP_BOTTOM_HEIGHT * 2 + MIDDLE_HEIGHT

    // 按钮
    const BUTTON_WIDTH = 12
    const BUTTON_HEIGHT = 3
    const BUTTON_LEFT = 28

    // 当中的圈
    const CIRCLE_RADIUS = 22
    const CIRCLE_STROKE_WIDTH = 7
    const CIRCLE_COLOR = '#fff'

    // 圈上的线
    const LINE_SPLIT = 2


    // 天线
    const ANTENNA_X = 10
    const ANTENNA_Y = 38
    const ANTENNA_WIDTH = 10
    const ANTENNA_LEFT = RECT_RADIUS - 3


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
                translate(0 ${ANTENNA_Y + ANTENNA_WIDTH / 2})
            `}
            >
            <path
                fill="#b12623"
                stroke="#666"
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
                fill="#eee"
                stroke="#666"
                 d={`M 0 ${TOP_BOTTOM_HEIGHT + MIDDLE_HEIGHT}
                  V ${TOTAL_HEIGHT- RECT_RADIUS} 
                  Q 0 ${TOTAL_HEIGHT}, ${RECT_RADIUS} ${TOTAL_HEIGHT}
                  H ${WIDTH - RECT_RADIUS} 
                  Q ${WIDTH} ${TOTAL_HEIGHT}, ${WIDTH} ${TOTAL_HEIGHT - RECT_RADIUS} 
                  V ${TOP_BOTTOM_HEIGHT + MIDDLE_HEIGHT} 
                  H 0 Z`} />

            {/* 按钮1 */}
            <rect x={BUTTON_LEFT} y={`-${BUTTON_HEIGHT}`} width={BUTTON_WIDTH} height={BUTTON_HEIGHT} style={{
                fill: '#b12623',
            }} />

            {/* 按钮2 */}
            <rect x={BUTTON_LEFT + BUTTON_WIDTH + 4} y={`-${BUTTON_HEIGHT}`} width={BUTTON_WIDTH} height={BUTTON_HEIGHT} style={{
                fill: '#b12623',
            }} />
            
            
               {/* 当中的圈 */}
               <circle 
            cx={WIDTH / 2}
             cy={TOP_BOTTOM_HEIGHT + MIDDLE_HEIGHT / 2} 
             r={CIRCLE_RADIUS}
              stroke="black" 
              stroke-width={CIRCLE_STROKE_WIDTH}
              fill={CIRCLE_COLOR} />
        
            </g>
           
            {/* 天线 */}
            <path d={`
                M ${ANTENNA_LEFT} ${ANTENNA_Y + ANTENNA_WIDTH / 2}
                H ${ANTENNA_LEFT + ANTENNA_WIDTH}
                L ${ANTENNA_LEFT + ANTENNA_X + ANTENNA_WIDTH} ${ANTENNA_WIDTH / 2}
                Q ${ANTENNA_LEFT + ANTENNA_X + ANTENNA_WIDTH / 2} 0, ${ANTENNA_LEFT + ANTENNA_X} ${ANTENNA_WIDTH / 2}
                Z
            `}/>
        </svg>
    )
}