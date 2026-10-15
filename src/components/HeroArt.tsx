const INPUTS = [
  { y: 96, label: 'SOS REPORT', tag: 'IN' },
  { y: 240, label: 'SENSOR DATA', tag: 'IN' },
  { y: 384, label: 'WEBCAM', tag: 'IN' },
]
const OUTPUTS = [
  { y: 96, label: 'RESCUE MAP', tag: 'OUT' },
  { y: 240, label: 'CODING', tag: 'OUT' },
  { y: 384, label: 'INTERVIEW', tag: 'OUT' },
]

const LEFT = ['M200 96H228V222H250', 'M200 240H250', 'M200 384H228V258H250']
const RIGHT = ['M350 222H372V96H400', 'M350 240H400', 'M350 258H372V384H400']

/** Inputs flow through one shared core into three kinds of output: the Odylytics idea as a circuit diagram. */
export function HeroArt() {
  return (
    <svg className="heroart" viewBox="0 0 600 480" role="img" aria-label="Diagram: community reports, sensor data and webcam input flow through the Odylytics AI core into a rescue map, coding tools and interview practice.">
      <defs>
        <pattern id="heroart-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" className="heroart__dot" />
        </pattern>
      </defs>
      <rect width="600" height="480" fill="url(#heroart-dots)" className="heroart__grid" />

      {[...LEFT, ...RIGHT].map((d) => (
        <path key={d} d={d} className="heroart__wire" />
      ))}
      {[...LEFT, ...RIGHT].map((d, index) => (
        <path key={`p-${d}`} d={d} className={`heroart__pulse heroart__pulse--${index % 3}`} pathLength={100} />
      ))}

      {INPUTS.map((item) => (
        <g key={item.label} transform={`translate(50 ${item.y - 22})`}>
          <rect width="150" height="44" className="heroart__box" />
          <rect x="14" y="19" width="6" height="6" className="heroart__mark" />
          <text x="30" y="26" className="heroart__text">
            {item.label}
          </text>
        </g>
      ))}
      {OUTPUTS.map((item) => (
        <g key={item.label} transform={`translate(400 ${item.y - 22})`}>
          <rect width="150" height="44" className="heroart__box" />
          <rect x="14" y="19" width="6" height="6" className="heroart__mark heroart__mark--purple" />
          <text x="30" y="26" className="heroart__text">
            {item.label}
          </text>
        </g>
      ))}

      <g transform="translate(250 180)">
        <rect width="100" height="120" className="heroart__core" />
        <image href="/assets/brand/odylytics-symbol-dark.svg" x="26" y="30" width="48" height="48" className="heroart__symbol" />
        <text x="50" y="102" textAnchor="middle" className="heroart__text heroart__text--core">
          AI CORE
        </text>
      </g>

      {[228, 372].flatMap((x) => [222, 258].map((y) => ({ x, y }))).map((n) => (
        <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="3" className="heroart__node" />
      ))}
    </svg>
  )
}
