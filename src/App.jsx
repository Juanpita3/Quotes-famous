import { useState } from 'react'
import Quotes from './Quotes.json'
import './App.css'
import Button from './Components/Button'
import QuotesBox from './Components/QuotesBox'

function App() {

  const randomQuotes = Math.floor(Math.random() * Quotes.length)
  const [random, setRandom] = useState(randomQuotes)
  console.log(Quotes);

  const colors = ["#FF6F91", "#F9F871", "#00C9A7", "#FF8066", "#F3C5FF", "#714DAF"]
  const randomColors = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColors]}`

  const chagePhrase = () => {
    const randomQuotes = Math.floor(Math.random() * Quotes.length)
    setRandom(randomQuotes)
  }

  return (
    <div className="App">
      <div className="card">
        <QuotesBox random={random} Quotes={Quotes} colors= "yellow" />
        <Button chagePhrase={chagePhrase} />
      </div>
    </div>
  )
}

export default App
