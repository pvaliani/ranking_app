import React, { Component } from "react";
import { Grid, Container, Divider } from "semantic-ui-react";
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
        <Grid>
            <Grid.Column textAlign="center">  
        <Container text>
          <AppHeader/>
          <h1> Your Top Reads </h1>

          {this.props.articles.map((article, index) => {
              const userState = rankedStateSort[index];

            return (
              <div key={index}>
                    <Divider>{article.title}</Divider> 
                    <p>Score: {userState}</p>
              </div>
            );
          })}
          </Container>
          </Grid.Column>
          </Grid>
      </>
    );
  }
}
export default RankingResult;