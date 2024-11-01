// import { useState } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/shared/layout/footer";
import Header from "./component/shared/layout/header";
import Container from "react-bootstrap/Container";
import SocialMedia from "./component/pages/SocialMedia";

function App() {
  return (
    <>
      <Header/>

      <Container fluid>
        <SocialMedia/>

      </Container>

      <Footer />
    </>
  );
}

export default App;
