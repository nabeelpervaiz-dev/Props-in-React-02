
import { useState } from 'react';
import Card from './components/card'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
<div className="parent">
  <Card/>
    <Card/>
      <Card/>
        <Card/>
          <Card/>
            <Card/>
              <Card/>
                <Card/>
                  <Card/>
</div>
  )
}

export default App
