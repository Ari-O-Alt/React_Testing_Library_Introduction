import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header">{title}</h1>
      <h3>Header 3</h3>
      <h2 title={"Target This"}>Header 3</h2>
    </>
  );
}
