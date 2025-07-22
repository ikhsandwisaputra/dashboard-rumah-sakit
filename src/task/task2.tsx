import { error } from "console";
import { stripTypeScriptTypes } from "module";
import { useEffect, useState } from "react"

const Greeting = ({name}: {name: string}) =>{
return(
    <h1>Halo, {name}! Selamat datang di React! </h1>
)
}

const Hitung = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>setCount(prev => prev + 1), 1000);
        return() => clearInterval(timer)
    }, [])

    return <h1>Timer : {count}</h1>
}

type buttonProps = {
    label : string,
    onClick : (pesan: string)=> void;
}

const MyButton = ({label,onClick }: buttonProps)=>{
return(
    <button onClick={()=> onClick('hallo dari child')}>{label}</button>
)
}

const childProps = (pesan: string) =>{
    alert(pesan)
}

const DataApi = () =>{
    const [data, setData] = useState<any[]>([]);

    useEffect(()=>{
        const ambilData = async () =>{
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const finalData = await data.json();
            setData(finalData)
        }
        ambilData()
      
    })

    return(
        <>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </>
    )
}
export const Task2 = () =>{
    return(
        <>
        {/* TASK 1 */}
        <Greeting name="Ikhsan"/>
        <Greeting name="Nawal"/>
        {/* TASK 2 */}
        <Hitung/>
        {/* TASK 3 */}
        <MyButton label="Klik Aku" onClick={childProps}></MyButton>
        <MyButton label="submit" onClick={()=> console.log('Submit')}></MyButton>
        <DataApi></DataApi>
        </>

    )
}