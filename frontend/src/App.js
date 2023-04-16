import "./App.css";
import { MainRoutes } from "./components/Routes/MainRoutes";
import { Navbar } from "./components/pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
