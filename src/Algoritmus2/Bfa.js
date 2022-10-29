import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

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
        <Button onClick={()=>setPrint(true)} variant='primary'>Bead</Button> 
        </label>              
        <br/>
        <div>
            <br/>
            {
            print?
            <p><pre>Fokszám: {data}<br/><br/>Csúcs maximum értéke:{2*data-1}     Gyerek maximum értéke:{2*data}<br/>
            Csúcs minimum értéke:{data-1}     Gyerek minimum értéke:{1*data}</pre></p>          
            :null                
            }
            <br/><br/>
            
            <div className='bfaaddon'>
                <label>
                Elemek beadása:
                <input type="text"/>
                <Button variant='primary'>Megadás</Button>
                <br/>
                </label>                
            </div>             
             
            <div className='bfarajz'>
                <a>dsad</a>
            </div>

        </div>
    </body>    
    )
}
