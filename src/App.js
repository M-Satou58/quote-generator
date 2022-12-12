import { useState, useEffect } from 'react'
import './App.css';
import  Quote from './Components/Quote'
import  Buttons from './Components/Buttons'

function App() {

  const [data, setData] = useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }

  }

  useEffect(() => {
    updateQuote()
  }, [])

  if (!data) return null
  return (
  

    <div className="container">
      <Quote 
        quote={data.content}
        author={data.author}/>
      
      <Buttons 
        shareUrl="facebook.com"
        title="Quote Generator"
        updateQuote={updateQuote}/>
    </div>
  );
}

export default App;
