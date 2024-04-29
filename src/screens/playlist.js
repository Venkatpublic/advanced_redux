import React, { useEffect } from "react";
import PlaylistItem from "../components/playlistitems";
import {connect} from 'react-redux'
import { removeSong,addSong,Song } from "../redux/songs";
import { fectComments } from "../redux";
import { useDebouncedCallback } from "use-debounce";
import { searchSong } from "../redux/search/action";
import { produce } from "immer";
const PlayList =({dispatch,songs,deleteSong,addSongBox})=>{
  const onAddsongBox =()=>{
    dispatch(addSong(new Song(Math.random(),"Title here","Name of singer here")))
    // addSongBox(new Song(0,"Title here","Name of singer here"))
  

  }
  const onRemoveSong =(id)=>{
    dispatch(removeSong(id))
  }
  useEffect(()=>{
dispatch(fectComments())
  },[])
  const onDebouncerSearch = useDebouncedCallback(
 
    (value) => {
   dispatch(searchSong(value))
    },
   
    500
  );

  const parent = [
    {
      name: "Kent",
      business: "Real Estate",
      finance: {
        lastmonth_income: 50000000,
        lastmonth_expense: 30000000,
        paid_tax: 1200000,
      },
    },
    {
      name: "El-Bahar",
      business: "Retail",
      finance: {
        lastmonth_income: 2000000,
        lastmonth_expense: 500000,
        paid_tax: 200000,
      },
    },
    {
      name: "Greenways",
      business: "Cosntruction",
      finance: {
        lastmonth_income: 800000000,
        lastmonth_expense: 20000000,
        paid_tax: 31200000,
      },
    },
  ];
  const childOne = produce(parent,draft=>{draft[0].finance.lastmonth_income = draft[0].finance.lastmonth_income+100000 })

  console.log(parent,childOne)
    return(
        <div >
<h1>your playlist</h1>
<input onChange={(e)=>{onDebouncerSearch(e.target.value)}} placeholder="search song here"></input>
{
    songs.map(item=>{
        return(
<PlaylistItem ondelete={onRemoveSong} key={item.id} item={item} title={item.title} singer={item.singer} ></PlaylistItem>
        )
    })
}

<button  onClick={onAddsongBox} title="add an song box here">
    <p>Click here to add a new song box</p>
</button>
<button onClick={()=>dispatch(fectComments())}><p>dispatch</p></button>
        </div>
    )
}
const mapStatetoProps =(state,ownprops)=>{

    return {songs:state.songs}
}
const mapDispatchProps =(dispatch)=>{
return{deleteSong:(data)=>dispatch(removeSong(data)),addSongBox:(data)=>dispatch(addSong(data))}
}
export default connect(mapStatetoProps)(PlayList) 