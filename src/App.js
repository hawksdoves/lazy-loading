import React, { useState } from 'react';
import Image from './Image';
import Tweet from './Tweet';
import Headline from './Headline';
import Wrapper from './Wrapper';
import './App.css';

function App() {

  const [article, updateArticle] = useState([Headline]);
  function addBlock(type) {
    updateArticle([ ...article, getBlock(type)])
  }

  function getBlock(type) {
    switch (type) {
      case 'image':
        return Image;
      case 'tweet':
        return Tweet;
      case 'text':
        return Headline;
    }
  }
  console.log(article)
  return (
    <div className="App">
      <header className="App-header">
        This is my fake editor
      </header>
      <div>
        { article.map(Block => (
          <Wrapper addBlock={(type) => addBlock(type)} >
            <Block />
          </Wrapper>
        ))
        }
      </div>
    </div>
  );
}

export default App;
