import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto bg-gray-100">
        <Outlet />
      </main>

      <footer className="text-center text-gray-500 text-xs">Gooter</footer>
    </>
  );
}

export default App;
