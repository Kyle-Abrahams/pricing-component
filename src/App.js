import PriceCards from "./PriceCards";
import PriceToggle from "./PriceToggle";
import { useState } from "react";

function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <>
      <main>
        <PriceToggle setIsMonthly={setIsMonthly} isMonthly={isMonthly} />
        <PriceCards isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      </main>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
