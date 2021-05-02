import React, { Component } from "react";

// Article component maps the body object from an array to render
// each model attribute/JSON key/value pair

class Article extends Component {
// Map the article objects body key to render all objects and data within

  render() {
    return (
        <>
          {this.props.article.body.map((bodyIndex) => {
            return (
                <div>
  
                  {<h1>{bodyIndex.type}</h1>}
                
                  <p>{bodyIndex.model.text}</p>
                    <img
                      src={bodyIndex.model.url}
                      alt={bodyIndex.model.altText}
                      style={{
                        width: bodyIndex.model.width,
                        height: bodyIndex.model.height
                      }}
                    />
                  <p>{bodyIndex.model.type}</p>
                  <p>{bodyIndex.model.items}</p>
                </div>   
            );
          })}
        </>
      );
    }
}

export default Article;
