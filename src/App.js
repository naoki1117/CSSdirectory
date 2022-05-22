import "./styles.css";
import { StyledConponents } from "./components/StyledConponents";
import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <StyledConponents />
      <Emotion />
    </div>
  );
}
