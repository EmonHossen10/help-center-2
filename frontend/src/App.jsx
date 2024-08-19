import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar></Navbar>
      <Banner setQuery={setQuery}></Banner>
      <Card query={query}></Card>
      <Footer></Footer>
    </>
  );
}

export default App;
