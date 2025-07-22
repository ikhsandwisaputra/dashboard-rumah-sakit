import { useState } from 'react'
export default function Task1() {
  // TASK 1 
const [angka, setAngka] = useState(0);
// TASK 2
const dataNama: string[] = ['Ucok', 'Udin', 'Budi'];
// TASK 3
const [visible, setVisible] = useState(true);

  return (
    <>
    {/* TASK 1 */}
        <button onClick={() => setAngka(prev => prev + 1)}>+</button>           
      <h1>{angka}</h1>
        <button onClick={() => setAngka(prev => prev - 1)}>-</button>
        {/* TASK 2 */}
        <ul>       
          {dataNama.map((item, index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* TASK 3 */}
        {visible && <h1>Hello World</h1>}
        <button onClick={()=> setVisible(true)}>Tampilkan</button>
        <button onClick={()=> setVisible(false)}>Sembunyikan</button>
    </>
  )
}


