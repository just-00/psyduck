export const FlowerComponent = ({
    fillPetal,
    fillStamen,
}: {
    fillPetal: string,
    fillStamen: string,
}) => {
    const PETAL_WODTH = 5
    const BASE_X = PETAL_WODTH * 4
    return (
        <svg width={PETAL_WODTH * 8} height={PETAL_WODTH * 8}>

            <circle r={PETAL_WODTH} fill={fillPetal} cx={BASE_X} cy={BASE_X - PETAL_WODTH * 1.5} />

            <circle r={PETAL_WODTH} fill={fillPetal} cx={BASE_X + PETAL_WODTH * 1.5} cy={BASE_X} />

            <circle r={PETAL_WODTH} fill={fillPetal} cx={BASE_X} cy={BASE_X + PETAL_WODTH * 1.5} />

            <circle r={PETAL_WODTH} fill={fillPetal} cx={BASE_X - PETAL_WODTH * 1.5} cy={BASE_X} />

            <circle r={PETAL_WODTH} fill={fillStamen} cx={BASE_X} cy={BASE_X} />
        </svg>
    )
}