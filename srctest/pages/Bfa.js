import React, {useState} from 'react'

export default function Bfa() { 
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    function getData(val){
        setData(val.target.value)
        setPrint(false)
        console.write(val.target.value)         
    }

return (
    <body>
        <br/>
        <h2>Bfa feladat ellenőrzése</h2>
        <br/>
        <label>Írd be a fokszámot(t):
        <input type="text" onChange={getData}/>   
        <button onClick={()=>setPrint(true)}>Bead</button> 
        </label>              
        <br/>
        <div>
            {
            print?
            <h3><pre>Fokszám: {data}<br/><br/>Csúcs maximum értéke:{2*data-1}    Gyerek maximum értéke:{2*data}<br/>
            Csúcs minimum értéke:{data-1}     Gyerek minimum értéke:{1*data}</pre></h3>          
            :null                
            }
            <br/><br/>

            <h4>Milyen formában szeretnéd beadni az értékeid?</h4>  

            <label>
                Egy sorba ezt kell hide showba rakni + egyesével beadni 
                <input type="checkbox" />                
            </label>
               <br/><br/>
            <div>
                <label>
                Ide írd:
                <input type="text"/>
                <button>Megadás</button>
                <br/>
                </label>                
            </div>             
             
        </div>
    </body>    
    )
}
