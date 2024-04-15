import React from "react";

const ArtistItem =({item,ondelete})=>{
    return(
        <div>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <p>{item.songs}</p>
            <button onClick={()=>ondelete(item)}>
                <p>delete</p>
            </button>
        </div>
    )
}
export default ArtistItem