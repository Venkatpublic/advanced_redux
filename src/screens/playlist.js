import React, { useEffect } from "react";
import PlaylistItem from "../components/playlistitems";
import {connect} from 'react-redux'
import { removeSong,addSong,Song } from "../redux/songs";
import { fectComments } from "../redux";
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
    return(
        <div >
<h1>your playlist</h1>
{
    songs.map(item=>{
        return(
<PlaylistItem ondelete={onRemoveSong} key={item.id} item={item} title={item.title} singer={item.singer} ></PlaylistItem>
        )
    })
}

<button  onClick={onAddsongBox} title="add an song box">
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