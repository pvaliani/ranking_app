import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import Ranking from "./components/Ranking";
import RankingResult from "./components/RankingResult";
import AppHeader from "./components/AppHeader";
import "./App.css";

// Mock API links using the JSON data provided 
const urls = [
  "https://run.mocky.io/v3/74ff75f9-944c-4d7e-a8e8-e26e7c51111d",
  "https://run.mocky.io/v3/00160158-7485-4e3e-987f-41f8f2567a19",
  "https://run.mocky.io/v3/88d6323f-a180-43d2-8df7-9372a6e141c0",
  "https://run.mocky.io/v3/67a2c223-edc6-47e9-ad32-49ce28897314",
  "https://run.mocky.io/v3/6ebf7d15-1fd5-4ebd-ad99-d31e8eaa1c1d"
];

class App extends Component {
  constructor() {
    super();
    return (
      <>
      Main page
      </>
     );
  }
}

// function App() {
//   return (
//    <>
//    Main page
//    </>
//   );
// }

export default App;
