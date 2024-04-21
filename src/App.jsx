// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Teach from "./pages/teach";
import Video from "./pages/video";
import Main from "./pages/main";

import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
        <Layout>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/video" element={<Video />} />
          <Route path="/teach" element={<Teach />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />

      </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;