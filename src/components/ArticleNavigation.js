import React, { Component } from "react";
import { Button } from 'semantic-ui-react'

// ArticleNavigation component renders button components from semantic UI to allow
// navigation between articles

class ArticleNavigation extends Component {
  render() {
    return (
      <>
        <Button onClick={this.props.backwardClick}> Previous Article </Button>
        <Button onClick={this.props.forwardClick}> Next Article </Button>
        </>
    );
  }
}

export default ArticleNavigation;
