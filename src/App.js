import React from "react";
import "./App.css";
import DayGrid from "./Components/DayGrid";
import 'semantic-ui-css/semantic.min.css';
import Media from "./Components/Media";

// import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";


function App() {
  return (
    <div className="App">
      <h1 className = "headline">NASA PHOTO OF THE DAY APP</h1>
      <h2 className = "subhead">Check back daily for new photos from space.</h2>
      <p>
        Instructions: Click a day below to see the photo of the day. All images are licensed via creative commons from NASA.
      </p>
      <section>
      <DayGrid limit={10} />
      </section>
    </div>
  );
}

export default App;
