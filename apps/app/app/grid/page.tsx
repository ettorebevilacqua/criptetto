import Link from 'next/link';
import '../../styles/globals.css'
import { ChartCandle } from './chart';

async function getData() {
    const index = Math.floor(Math.random() * 10)
    const res = await fetch(`https://catfact.ninja/fact?index=${index}`)
    return res.json();
}


export default async function Page() {
   const data = await getData()
    return (<div style={{ width:"100%", backgroundColor: "white" }} >
        <ChartCandle />
        <p>data : {data.fact}</p>
        <Link href="/breaking">navigate to breaking</Link>
    </div>)
}