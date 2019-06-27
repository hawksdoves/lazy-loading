import React, { useState, Suspense, lazy } from 'react';
import Headline from './Headline';
import Wrapper from './Wrapper';
import './App.css';

const LazyTweet = lazy(() => import('./Tweet'));
const LazyImage = lazy(() => import('./Image'));

function App() {

  const [article, updateArticle] = useState([Headline]);
  function addBlock(type) {
    updateArticle([ ...article, getBlock(type)])
  }

  function getBlock(type) {
    switch (type) {
      case 'image':
        return LazyImage;
      case 'tweet':
        return LazyTweet;
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
            <Suspense fallback={<div>Loading...</div>}>
              <Block />
            </Suspense>
          </Wrapper>
        ))
        }
      </div>
    </div>
  );
}

export default App;
