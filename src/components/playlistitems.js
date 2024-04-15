import React from "react";

const PlaylistItem =({title,singer,ondelete,item})=>{
    return(
        <div>
            <p>{title}</p>
            <p>{singer}</p>
            <button onClick={()=>ondelete(item)}>
                <p>delete</p>
            </button>
        </div>
    )
}
export default PlaylistItem