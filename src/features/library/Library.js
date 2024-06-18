// library component
import { useState } from "react";
import { addLibrary, getLibrary } from "./librarySlice";
import { useDispatch, useSelector } from "react-redux";
const Library = () => {
  const dispatch = useDispatch();
  const libraries = useSelector(getLibrary);
  const [newlibraryName, setnewlibraryName] = useState("");
  return (
    <div>
      <input
        value={newlibraryName}
        onChange={(e) => setnewlibraryName(e.target.value)}
        placeholder="Give a Name for your library"
      ></input>
      <button
        disabled={!(newlibraryName?.length > 0)}
        onClick={() => dispatch(addLibrary(newlibraryName))}
      >
        <p>Add library action</p>
      </button>
      {libraries.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
export default Library;
