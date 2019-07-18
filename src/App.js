import React from "react";
import "./App.css";
import DayGrid from "./Components/DayGrid";
import 'semantic-ui-css/semantic.min.css';
import Media from "./Components/Media";
import styled from "styled-components";

const Mainhead = styled.h1`
  background-color:dodgerblue;
  color: white;
  font-size: 5rem;
  margin-top: 10rem;
  margin-bottom: 3rem;
  height: 15rem;
  text-align: center;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Subhead = styled.h2`
  font-size: 2rem;
  margin-top: 3rem;
`;

const Instructions = styled.p`
  width: 30rem;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: 41rem;
  margin-bottom: 3.5rem;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: dodgerblue;
`;

const Logo = styled.img`
margin-right: 3rem;
`;

const Closingtext = styled.h5`
margin-left: 3rem;
font-size: 1.5rem;
`;



function App() {
  return (
    <div className="App">
      <Mainhead className = "headline">NASA PHOTO OF THE DAY</Mainhead>
      <Subhead className = "subhead">Visit us every day at 9am EST to see new photos from space.</Subhead>
      <Instructions>
        Instructions: Click a date below to see the photo of the day. All images are licensed via creative commons from NASA.
      </Instructions>
      <section>
      <DayGrid limit={10} />
      </section>
      <Footer>
        <div>
          <Logo
                src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4578/s300/untitled.png"
                alt="lambda!"
          />
        </div>
        <div>
          <Closingtext>Created by Lambda Students. Terms 2019.</Closingtext>
        </div>
      </Footer>
    </div>
  );
}

export default App;
