import React, { useEffect, useState, useRef } from "react";
import { produce,original, isDraft, current ,applyPatches} from "immer";


const Patches = () => {
let state =[{name:"venkat",company:'wac',age:24,hometown:"tiruppur"}]
const[form,setform]=useState({name:"",company:"",age:"",hometown:""})
const nameref = useRef(null)
let changes = []
let inversechanges = []
const onaddmem =()=>{

 state =  produce(state,draft=>{draft.push({name:Math.random().toPrecision(3)})},(patches,inversepatches)=>{
    changes.push(...patches)
    inversechanges.push(...inversepatches)
})

console.log(state,"???")
}
const onundo =()=>{
let h = applyPatches(state,changes)
console.log(h,"???")
// setstate()
}
const oninverse =()=>{
    let i = applyPatches(state,inversechanges)
    console.log(i,"???")
    // setstate()
    }
  return (
    <div>
      <h1>this is Patches screen</h1>
      <div>
      <input ref={nameref} value={form.name}  placeholder="name"></input>
   
   
      <button onClick={()=>onaddmem()}><p>addmember</p></button>
      <button onClick={()=>onundo()}><p>patch</p></button>
      <button onClick={()=>oninverse()}><p>inversepatch</p></button>
       {
        state.map(item=>{
            return(
                <>
                     <p>{item.name}</p>
                     <p>{item.company}</p>
                     <p>{item.age}</p>
                     <p>{item.hometown}</p>
                </>
           
            )
        })
       }
      </div>
    </div>
  );
};

export default Patches;
