import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./view/admin/overview/Over"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/the-sneaker-house/managemen/overview" element={<Overview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
