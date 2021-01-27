import "./styles.css";

import Animation from "./Animation";
//https://lottiefiles.com/35875-confetti-on-transparent-background
import confetti from "./lotties/confetti.json";
import { useState } from "react";

export default function App() {
  const [isStopped, SetIsStoped] = useState(true);
  return (
    <div className="App">
      <button onClick={() => SetIsStoped(false)}>Play</button>
      <button onClick={() => SetIsStoped(true)}>Reset</button>
      <Animation
        data={confetti}
        width={100}
        height={200}
        isStopped={isStopped}
      />
      <a href="https://lottiefiles.com/35875-confetti-on-transparent-background" target="_blank">Lottie Files</a>
    </div>
  );
}
