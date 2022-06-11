import React from "react";
import { CreateForm } from "../components";

import "./HomePage.scss";
const HomePage = () => {
  return (
    <main className="home-page" aria-label="home page">
      <CreateForm />
    </main>
  );
};

export default HomePage;
