import { useState } from 'react'
import './App.css'
import CardLists from './components/CardLists';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="header">
            <h1>Spanish Food Words Flashcards</h1>
            <h3>Want to learn Spanish? Learn the vocabulary starting with all you can eat!</h3>           
        </div>

        <div className="container">
          <CardLists />
        </div>
    </div>
  )
}

export default App
