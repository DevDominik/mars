import { FormEvent, useEffect, useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
function App() {
  const loadResource = (resource: string) => {
    const savedMegacredit = localStorage.getItem(resource)
    return savedMegacredit ? Number(savedMegacredit) : 0
  }
const [Megacredit, setMegacredit] = useState(loadResource("megacredit"))
const [MegacreditProduction, setMegacreditProduction] = useState(loadResource("mprod"))
const [Steel, setSteel] = useState(loadResource("steel"))
const [SteelProduction, setSteelProduction] = useState(loadResource("sprod"))

const handleIncrement=(increment: number, resource: number, setResource:(value: number) => void) =>
{
  setResource(resource+increment)
}

useEffect(() => {
  localStorage.setItem("megacredit", Megacredit.toString())
  localStorage.setItem("steel", Steel.toString())
  localStorage.setItem("mprod", MegacreditProduction.toString())
  localStorage.setItem("sprod", SteelProduction.toString())
}, [Megacredit, Steel, MegacreditProduction, SteelProduction])

const handlSubmit2=(e:FormEvent)=>{
    e.preventDefault()
    setMegacredit(Megacredit+MegacreditProduction)
    setSteelProduction(Steel+SteelProduction)
}

  return (
    <form onSubmit={handlSubmit2} className="container">
        <PlayerName></PlayerName>
        <Resource 
        name='Megacredit' 
        amount={Megacredit} 
        onchange={(increment: number) => handleIncrement(increment, Megacredit, setMegacredit)}
        production={MegacreditProduction}
        onchangeProductivity={(increment: number) => handleIncrement(increment, MegacreditProduction, setMegacreditProduction)}
        ></Resource>
        <Resource 
        name='Steel' 
        amount={Steel} 
        onchange={(increment: number) => handleIncrement(increment, Steel, setSteel)}
        production={Steel}
        onchangeProductivity={(increment: number) => handleIncrement(increment, SteelProduction, setSteelProduction)}
        ></Resource>
       <button type='submit' className='NextRound'>Next Round</button>
    </form>
  )
}

export default App
