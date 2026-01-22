import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const [data,setdata]=useState({})

    useEffect(()=>{
        // api key of the currency 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then((res)=> res.json())
.then((res)=> setdata(res[currency]))

console.log(data);
    },[currency])

    return data
}


// take a short a
export default useCurrencyInfo;