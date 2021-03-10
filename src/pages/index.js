import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <>
      <Link to={"/foundation"}>Foundation Link!</Link>
      <h1>Hello Gatsby!</h1>
    </>
  );
}
