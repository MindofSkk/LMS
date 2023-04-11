import "./App.css";
import { MainRoutes } from "./components/Routes/MainRoutes";
import { Navbar } from "./components/pages/Navbar";
import { TableData } from "./components/pages/TableData";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      {/* <TableData/> */}
    </div>
  );
}

export default App;
