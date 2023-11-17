import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CatalogPage />
    </div>
  );
}
