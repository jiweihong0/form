// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;