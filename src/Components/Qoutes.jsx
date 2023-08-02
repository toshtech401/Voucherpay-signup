import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Qoutes.css"

const Quotes = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    axios.get('https://api.kanye.rest')
      .then(response => {
        if (response.data && response.data.quote) {
          setQuote(response.data.quote);
        } else {
          setQuote('Failed to retrieve a quote.');
        }
      })
      .catch(error => {
        console.log('Error:', error);
        setQuote('An error occurred.');
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Kanye West Quotes</h1>
      <div id="quote">{quote}</div>
      <button onClick={fetchQuote}>Next</button>
    </div>
  );
};

export default Quotes;
