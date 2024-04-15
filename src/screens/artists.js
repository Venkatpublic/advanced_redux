import React, { useState } from "react";

import ArtistItem from "../components/artistItems";
import {connect} from 'react-redux'
import { addArtist,removeArtist,Artist } from "../redux";
import {createSelector} from "reselect"
const getArtists =state=>state.artists
const getFilteredArtists =createSelector([getArtists] ,(artists) => artists.filter(artist =>(artist.name !== 'lil wayne')))
const Artists =({artists,onAdd,onRemove})=>{
    const[state,setState]=useState({name:'',songs:'',})

  const onAddArtist =()=>{
   
  onAdd(state)
  setState({name:'',songs:''})
  }
  const onRemoveArtist =(artist)=>{
  onRemove(artist)

  }


    return(
        <div >
<h1>Artists</h1>
{
    artists.map(artist=>{
        return(
<ArtistItem key={artist.id} ondelete={onRemoveArtist} item={artist}></ArtistItem>
        )
    })
}
<input value={state.name} onChange={(e)=>{setState({name:e.target.value,songs:state.songs})}} placeholder="name"></input>
<input value={state.songs} onChange={(e)=>{setState({songs:e.target.value,name:state.name})}} placeholder="songs"></input>
<button  onClick={onAddArtist} title="add an artist">
    <p>Click here to add a new artist</p>
</button>
        </div>
    )
}
const mapStatetoProps =(state)=>{


    return {artists:getFilteredArtists(state)}
}
const mapDispatchProps =(dispatch)=>{
return {onAdd:(artist)=>dispatch(addArtist(new Artist(Math.random(),artist.name,artist.songs))),onRemove:(artist)=>dispatch(removeArtist(artist))}
}
export default connect(mapStatetoProps,mapDispatchProps)(Artists) 