import React, { Component } from "react";
import Article from "./Article";
import ArticleNavigation from "./ArticleNavigation";

// ArticleList returns the Article and ArticleNavigation component
// Article component takes in an article object as props 
// ArticleNavigation component takes in the respective articles as props to pass
// to the button components from semantic
class ArticleList extends Component {
 
  render() {

     return (

      <>
        <div className="container">
            <div>
                <Article article={this.props.article} />
            </div>
            <div>
                <ArticleNavigation 
                forwardClick={this.props.loadNextArticle}
                backwardClick={this.props.loadPrevArticle}/>
            </div>
        </div>
      </>
    );
  }
}

export default ArticleList;
