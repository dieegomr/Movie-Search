import React from "react";
import Header from "./components/header";
import Movies from "./components/movies";
import { Wrapper } from "./styles";

function App() {
  return (
    <Wrapper>
      <Header />
      <Movies />
    </Wrapper>
  );

}

export default App;
