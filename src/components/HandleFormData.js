import React,{useState} from 'react'

function HandleFormData() {
    const [name,setName]=useState("");
    const[tnc,setTnc] =useState(false);
    const[interest,setInterest]=useState("")

    function getFormData(event){
     event.preventDefault()
     console.warn(name,tnc,interest);
     setName('');        // when we submit form it will erase the data from form after submit 
     setInterest('')
     setTnc('')
    }

    function handleClear(){
        setName('');
 
    }

  return (
    <div>
        <h1>HandleFormData</h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholder='enter name' value={name} onChange={(event)=>setName(event.target.value)} /> <br /> <br />
             <select value={interest} onChange={(event)=>setInterest(event.target.value)}>
                <option>Select Option</option>
                <option>Marvel</option>
                <option>Dc</option>
             </select><br /><br />
             <input type="checkbox" value={tnc} onChange={(event)=>setTnc(event.target.checked)} /> <span>Accepts terms and conditions </span>
             <button type='submit'>Submit</button>
             <button onClick={handleClear}>Clear</button>
        </form>

    </div>
  )
}

export default HandleFormData