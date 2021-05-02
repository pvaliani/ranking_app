import React, { Component } from "react";
import AppHeader from "./AppHeader";


class RankingResult extends Component {
  render() {
    const votesArray = [
      this.props.vote0,
      this.props.vote1,
      this.props.vote2,
      this.props.vote3,
      this.props.vote4
    ];

    // Sort votesArray based on descending order - top down
    const rankedStateSort = votesArray.sort(function(a, b) {
      return b - a;
    });
    
    // Map the article objects based on the ranking order of votesArray
    return (
      <>
          <AppHeader/>
          <h1> Your Ranked Articles </h1>

          {this.props.articles.map((article, index) => {
              const userState = rankedStateSort[index];

            return (
              <div key={index}>
                    {article.title}
                      <p>{userState}</p>   
              </div>
            );
          })}
      </>
    );
  }
}
export default RankingResult;
