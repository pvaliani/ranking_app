import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import Ranking from "./components/Ranking";
import RankingResult from "./components/RankingResult";
import AppHeader from "./components/AppHeader";
import "./App.css";

// Mock API links set up using the JSON data provided in the exercise brief
const urls = [
  "https://run.mocky.io/v3/74ff75f9-944c-4d7e-a8e8-e26e7c51111d",
  "https://run.mocky.io/v3/00160158-7485-4e3e-987f-41f8f2567a19",
  "https://run.mocky.io/v3/88d6323f-a180-43d2-8df7-9372a6e141c0",
  "https://run.mocky.io/v3/67a2c223-edc6-47e9-ad32-49ce28897314",
  "https://run.mocky.io/v3/6ebf7d15-1fd5-4ebd-ad99-d31e8eaa1c1d"
];

// App JS is the main container for the app ...could perhaps separate concerns.

class App extends Component {
  constructor() {
    super();
    this.state = {
      vote0: 0,
      vote1: 0,
      vote2: 0,
      vote3: 0,
      vote4: 0,
      articles: [],
      articleIndex: -1,

      ranked: false
    };

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.RankingResult = this.RankingResult.bind(this);
  }

  RankingResult() {

    const articlevotes = Object.entries(this.state);

    // stateKeys defines the vote values stored in state 
    const stateKeys = [
      articlevotes[0],
      articlevotes[1],
      articlevotes[2],
      articlevotes[3],
      articlevotes[4]
    ];

    // Sorting the values of the second items in the stateKeys array
    const arrayStateSort = stateKeys.sort(function(a, b) {
      return b[1] - a[1];
    });

    //mapping arrayStateSort retrieving the item at the 4th position of the string e.g "votes4" == getting 4 and returning as a number
    const keyOfSortedArrayAsNum = arrayStateSort.map((item) => {
      return Number(item[0][4]);
    });

    const currentState = this.state.articles;

    const sortedArray = keyOfSortedArrayAsNum.map(i =>
      currentState.find(o => currentState.indexOf(o) === i)
    );

    this.setState(prevState => {
      return {
        ranked: (prevState.ranked = true),
        articles: (prevState.articles = sortedArray)
      };
    });
  }



  // loadNextArticle fetches the next article and first checks if the article object 
  // exists at the the next articleIndex and if a url exists to load the article from
  loadNextArticle = () => {
    if (
      this.state.articles[this.state.articleIndex + 1] === undefined &&
      urls.length - 1 > this.state.articleIndex
    ) {

      // Upon initialisation of the app the index of the urls will be 0 - error handling enabled
      fetch(urls[this.state.articleIndex + 1])
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error performing fetch");
          }
        })
        .then(article => {
          console.log(article);
          this.setState(prevState => ({
            // Create an array containing the previous articles by spreading and then append a new article
            articles: [...prevState.articles, article],
            articleIndex: prevState.articleIndex + 1
          }));
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // The next article is fetched and finishing extracting from the list of URL's, increment articleIndex
      this.setState(prevState => ({
        articleIndex: prevState.articleIndex + 1
      }));
    }
  };

  
  // Essentially doing the same as useEffect hook - will trigger re-rendering upon a state change
  // to the next article
  componentDidMount() {
    this.loadNextArticle();
  }

   // Loads the previous article in state
   loadPrevArticle = () => {
    if (this.state.articleIndex > -1) {
      this.setState(prevState => {
        return {
          articleIndex: prevState.articleIndex - 1
        };
      });
    } else {
      alert("You are viewing the first article on the app");
    }
  };

  render() {
    return (
      <div>
      <RankingResult
        articles={this.state.articles}
        vote0={this.state.vote0}
        vote1={this.state.vote1}
        vote2={this.state.vote2}
        vote3={this.state.vote3}
        vote4={this.state.vote4}
      />
    </div>
    );
    
    
    }

   
   
  
}

export default App;