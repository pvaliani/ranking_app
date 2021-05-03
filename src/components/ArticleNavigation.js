import React, { Component } from "react";
import { Grid, Button } from 'semantic-ui-react'

// Navigation component renders button components from semantic UI to allow
// navigation. Was not able to get the back button to conditionally render
// for the first article
class ArticleNavigation extends Component {
  render() {
    return (
      <>
        <Grid>
        <Grid.Column textAlign="center">
            <Button color="black" circular onClick={this.props.backwardClick}> Previous Article </Button>
            <Button color="black" circular  onClick={this.props.forwardClick}> Next Article </Button>
        </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default ArticleNavigation;
