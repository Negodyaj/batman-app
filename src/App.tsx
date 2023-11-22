import React, { useState } from "react";
import "./App.scss";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";

export function App() {
  const [isClosed, setIsClosed] = useState(true);
  const [clicksCount, setClicksCount] = useState(0);

  function toggleBurgerMenu() {
    setIsClosed(!isClosed);
  }

  function handleClicksCountChange() {
    setClicksCount(clicksCount + 1);
  }

  return (
    <div className="App" onClick={toggleBurgerMenu}>
      <Header isClosed={isClosed} buttonClickHandler={toggleBurgerMenu} />
      <HomePage handler={handleClicksCountChange} />
      <CatalogPage clicksCount={clicksCount} />
    </div>
  );
}
