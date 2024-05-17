
import * as React from "react"
import Slider from "./Slider"

React.useEffectEvent = React.experimental_useEffectEvent;

export default function App() {
  const [count, setCount] = React.useState(0)
  const [delay, setDelay] = React.useState(100)
  const [step, setStep] = React.useState(1)

  const handleDelayChange = (d) => setDelay(d)
  const handleStepChange = (s) => setStep(s)

  const onInterval = React.useEffectEvent(() => {
    setCount(count + step)
  })

  React.useEffect(() => {
    const id = window.setInterval(onInterval, delay)

    return () => window.clearInterval(id)
  }, [delay])

  return (
    <main>
      <h1>{count}</h1>
      <Slider
        min={100}
        max={2000}
        step={100}
        onChange={handleDelayChange}
        label="ms delay"
      />
      <Slider
        min={1}
        max={10}
        step={1}
        onChange={handleStepChange}
        label="increment by"
      />
    </main>
  )
}