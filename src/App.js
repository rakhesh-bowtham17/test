import Root from "./RootLayout/Route";
import SideBar from "./containers/sideBar/SideBar";
import ConfigsPage from "./pages/configs/ConfigsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/dashboard" />
            <Route path="/reports" />
            <Route path="/stats" />
            <Route path="/user" />
            <Route path="/add-money" />
            <Route path="/events" />
            <Route path="/configs" element={<ConfigsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
