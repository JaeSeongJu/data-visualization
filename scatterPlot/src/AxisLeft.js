export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue) => (
    <g
      className="tick"
      transform={`translate(0,${yScale(tickValue)})`}
      key={tickValue}
    >
      <line x2={innerWidth} />
      <text
        key={tickValue}
        style={{ textAnchor: "end" }}
        dy=".32em"
        x={-tickOffset}
      >
        {tickValue}
      </text>
    </g>
  ));
