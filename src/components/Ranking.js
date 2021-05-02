import React, { Component } from "react";
import { Divider, Grid, Container, Button, Header } from 'semantic-ui-react'

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
      <Grid>
            <Grid.Column textAlign="center">  
        <Container text>
        <Header as="h1">Vote For Your Favourite Articles</Header>
        {this.props.articles.map((article, index) => {
          const userState = votesArray[index];
          return (
            <>
            <div key={index}>
              <Header as="h4"> {article.title} </Header>  <p>Rating: {userState} </p>
              
              
              <Button color="black" circular onClick={() => this.props.upVote(index)}> VOTE UP </Button>

              
                <Button color= "black" circular onClick={() => this.props.downVote(index)}> VOTE DOWN </Button>
              
            </div>
            </>
          );
        })}
          <Divider><Button color="black" circular onClick={() => this.props.RankingResult()}>
          Submit Votes </Button></Divider>

          </Container>
          </Grid.Column>
            </Grid>
      </>
    );
  }
}

export default Ranking;