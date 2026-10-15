const INPUTS = ['SOS report', 'Sensor data', 'Webcam']
const OUTPUTS = ['Rescue map', 'Coding', 'Interview']

/** Phone version of the circuit diagram: inputs, one core, outputs, stacked so the labels stay readable. */
export function HowFlow() {
  return (
    <div className="flow" role="img" aria-label="Community reports, sensor data and webcam input flow through the Odylytics AI core into a rescue map, coding tools and interview practice.">
      <ul className="flow__row">
        {INPUTS.map((item) => (
          <li key={item} className="flow__chip">
            <span className="flow__mark" />
            {item}
          </li>
        ))}
      </ul>
      <span className="flow__wire" />
      <div className="flow__core">
        <img src="/assets/brand/odylytics-symbol-dark.svg" alt="" width="28" height="28" />
        AI core
      </div>
      <span className="flow__wire" />
      <ul className="flow__row">
        {OUTPUTS.map((item) => (
          <li key={item} className="flow__chip">
            <span className="flow__mark flow__mark--purple" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
