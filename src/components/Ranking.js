import React, { Component } from "react";
import { Button, Header } from 'semantic-ui-react'

// Ranking component generates vote objects in an array for user voting 
class Ranking extends Component {
  render() {
    
    const votesArray = [
      this.props.vote0,
      this.props.vote1,
      this.props.vote2,
      this.props.vote3,
      this.props.vote4
    ];
    // console.log(votesArray);

    // Map the article objects to the userState storing the votes from votes
    // cast
    return (
      <>
        <h1>Vote For Your Articles</h1>
        {this.props.articles.map((article, index) => {
          const userState = votesArray[index];
          return (
            <>
            <div key={index}>
              <Header as="h3"> <Header>Rating: {userState} </Header> {article.title} </Header>
              
                  
              <Button onClick={() => this.props.upVote(index)}> VOTE UP </Button>

              
                <Button onClick={() => this.props.downVote(index)}> VOTE DOWN </Button>

            </div>
            </>
          );
        })}
          <Button onClick={() => this.props.RankingResult()}>
          Submit Ranking </Button>
      </>
    );
  }
}

export default Ranking;
