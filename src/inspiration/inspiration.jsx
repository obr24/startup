import React from 'react';
import getQuote from './getQuote.js'

export function Inspiration() {
  const [quoteAPIReturn, setAPIReturn] = React.useState({quote: "loading", author: "loading Author"});
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  
  React.useEffect(() => {
  async function fetchQuote() {
    try {
      const data = await getQuote();
      setAPIReturn(data);
    } catch (error) {
      console.error("Error getting quote: ", error);
    }
  }
    fetchQuote();
  }, []);

  return (
    <main>
        <figure className="mx-auto mt-5 mb-5 justify-content-center overflow-auto" style={{"width":"400px"}}>
            <img src="quote-symbol.svg"></img>
            <blockquote className="blockquote">
              <p>{quoteAPIReturn.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">{quoteAPIReturn.author}</figcaption>
          </figure>
    </main>
  );
}