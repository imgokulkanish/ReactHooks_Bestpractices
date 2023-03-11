import React , {useState} from 'react'

const UseState = () => {
    const [number,setNumber] = useState(0)
    const [user, setUser] = useState({
        name: "Gokul Kanish",
        Role: "Full Stack Developer",
        Age: 25
    })
    const [input,setInput] = useState("")
    const Increasesync =()=>{
        setNumber(number+1)
    }
    const IncreaseAsync =()=>{
        setTimeout(()=>{
            //should not increment like this - need to use functional update approach
        //   setNumber(number+1)
        setNumber((currNumber)=>currNumber+1)
        },2000)
    }
    const changeuser =()=>{
        setUser((prev)=>({...prev, name: input}))
    }
    const [userdet,setuserdet] = useState({
        name:"",
        password:"",
        email:""
    })

    const handleChange =(e)=>{
           setuserdet((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

  return (
    <div>
      <h2>UseState Best Practices!</h2>
      <h1>{number}</h1>
      <button onClick={Increasesync}>Increase</button>
      <button onClick={IncreaseAsync}>Increase Async</button>
      <h1>{user.name}</h1>
      <input onChange={(e)=>setInput(e.target.value)}></input><br/>
      <button onClick={changeuser}>Change Username</button><br/>

      <input type="text" name="name"onChange={handleChange} placeholder="name"/><br/>
      <input type="text" name="password" onChange={handleChange} placeholder="password"/><br/>
      <input type="email" name="email"onChange={handleChange} placeholder="email"/>
    </div>
  )
}

export default UseState
