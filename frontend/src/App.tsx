
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'

// async function getData() {
//   const response  = await fetch('http://127.0.0.1:8080/api')
//   const data = await response.json()
//   return data
// }

function App() {
  // const data = await getData()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/").then((response) => response.json())
    .then((data) => {
      setData(data.status);
      console.log(data);
    })
    .catch((error) => console.log(error));
  });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR

        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Backend communitcation: {data}</p>
    </>
  )
}

export default App
