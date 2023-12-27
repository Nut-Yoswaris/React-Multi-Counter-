function App(){
    const [counters , setCounters] = React.useState([{id:1, number: 0}])
    let total = counters.reduce((a,el) => a+el.number,0)
    // console.log(total)
    // const hdlAddCounter = () => {
    //     let newItem = {id: counters.at(-1).id +1 , number : 0}
    //     // console.log(newItem)
    //     // let cloneCounters = [...counters]
    //     // cloneCounters.push(newItem)
    //     // console.log(cloneCounters)
    //     // setCounters(cloneCounters) //แบบไม่ย่อ
    //     setCounters([...counters,newItem]) //แบบย่อ ใช้การแกะ ...counters แล้วเอา let newItem มาใช้
    // }
    //ย่อขึ้นสุด
    const hdlAddCounter = () => setCounters([...counters, {
         id :counters.length ===0 ? 1 : counters.at(-1).id +1 ,
          number: 0}
        ])

    // const hdlUpdate = (id,num) => {
    //         const cloneCounters = [...counters]
    //         let idx = cloneCounters.findIndex(el => el.id===id)
    //         if(cloneCounters[idx].number + num <0) {
    //             return
    //         }
    //         cloneCounters[idx].number +=num
    //         // console.log(cloneCounters)
    //         setCounters(cloneCounters)
    //     }
        const hdlUpdate = (id,num) => setCounters(counters.map(el => ({...el , number : (el.id===id && el.number+num >=0 ? el.number + num : el.number)})))
  
        const hdlRemoveCounter = (id) => setCounters(counters.filter(el => el.id !== id))
            // const cloneCounters = [...counters]
            // let idx = cloneCounters.findIndex(el => el.id===id)
            // cloneCounters.splice(idx,1)
            // setCounters(cloneCounters)
            

    return(
        <>
        <h1 className="text-center">Codecamp Academy 01</h1>
        <button className="text-center" onClick={hdlAddCounter}>Add Counter</button>
        <SumInfo total={total}/>
        {/* <Counter number={counters[0].number}/>
        <Counter number={counters[1].number}/> */}
        {counters.map(el => (
        <Counter key={el.id} item={el} 
        hdlUpdate={hdlUpdate} 
        hdlRemoveCounter={hdlRemoveCounter}/>
        ))}
        </>
    );
}
