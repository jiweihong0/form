// react router
import { HashRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;