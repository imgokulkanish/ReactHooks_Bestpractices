import React , {useState} from 'react'

const Derivedstates = () => {
    const [series, setSeries] = useState([
        {id:1, title:"Naruto",rating:9},
        {id:2, title:"RicknMorty",rating:8},
        {id:3, title:"Jackiechan",rating:8.4},
    ])

    const [selectedId, setSelectedId] = useState(null)
    const selectedSeries = series.find((s)=> s.id === selectedId)

    const handlechoose =(id)=>{
        setSelectedId(id)
    }

    const increment =(id)=>{
        setSeries((prev)=>{
            return prev.map((ser)=>{
                if(ser.id === id){
                 return {...ser, rating: ser.rating + 1}
                }
                else return ser;
            })
        })
         }
         console.log(selectedSeries)
  return (
    <div>
      <h2>Usestate-Derived states</h2>
      {series.map((ser)=>{
        return(
            <>
            <h1>{ser.title}</h1>
            <button onClick={()=>handlechoose(ser.id)}>Choose</button>
            <h2>{ser.rating}</h2>
            <button onClick={()=>increment(ser.id)}>Change</button>
            </>           
        )
      })}
           <h1>Selected Series!</h1>
           <h2>{selectedSeries?.title}</h2>
           <h2>{selectedSeries?.rating}</h2>
    </div>
  )
}

export default Derivedstates
