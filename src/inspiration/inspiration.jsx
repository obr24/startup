import React from 'react';

export function Inspiration() {
  return (
    <main>
        <figure className="mx-auto mt-5 mb-5 justify-content-center overflow-auto" style={{"width":"400px"}}>
            <img src="quote-symbol.svg"></img>
            <blockquote className="blockquote">
              <p>Keep your nose out the sky, keep your heart to god, and keep your face to the raising sun.</p>
            </blockquote>
            <figcaption className="blockquote-footer">Ye</figcaption>
          </figure>
    </main>
  );
}