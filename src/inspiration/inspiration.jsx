import React from 'react';
import getQuote from './getQuote.js'

export function Inspiration() {
  const [quoteAPIReturn, setAPIReturn] = React.useState('Loading...');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  
  React.useEffect(() => {
    setAPIReturn(getQuote())
    setQuote('Keep your nose out the sky, keep your heart to god, and keep your face to the raising sun.');
    setQuoteAuthor('Ye');
  }, []);

  return (
    <main>
        <figure className="mx-auto mt-5 mb-5 justify-content-center overflow-auto" style={{"width":"400px"}}>
            <img src="quote-symbol.svg"></img>
            <blockquote className="blockquote">
              {/* <p>Keep your nose out the sky, keep your heart to god, and keep your face to the raising sun.</p> */}
              {/* <p>{quote}</p> */}
              <p>{quoteAPIReturn[0].q}</p>
            </blockquote>
            {/* <figcaption className="blockquote-footer">Ye</figcaption> */}
            <figcaption className="blockquote-footer">{quoteAPIReturn[0].a}</figcaption>
          </figure>
    </main>
  );
}