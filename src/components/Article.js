import React, { Component } from "react";

import { Grid, Divider, Header, Container } from "semantic-ui-react";

// Article component maps the body object from an array to render
// each model attribute/JSON key/value pair

class Article extends Component {
  
  render() {

    



    return (
      <>
       <Grid>
            <Grid.Column textAlign="justified">  
      <Container text>
      <Header><Divider>{this.props.article.title}</Divider></Header>
        {this.props.article.body.map((bodyIndex) => {
          return (
            <>
              <div>
                
                
            
                <Container text> {<h1>{bodyIndex.type}</h1>}</Container>
            
                
              
                <Container text><p>{bodyIndex.model.text}</p></Container>
                  <img
                    src={bodyIndex.model.url}
                    alt={bodyIndex.model.altText}
                    style={{
                      width: bodyIndex.model.width,
                      height: bodyIndex.model.height
                    }}
                  />
                <Container><p>{bodyIndex.model.type}</p></Container>
                <Container><p>{bodyIndex.model.items}</p></Container>
             
              
              </div>  
            </> 
          );
        })}
        </Container>
        </Grid.Column>
              </Grid>
      </>
    );
  }
}

export default Article;
