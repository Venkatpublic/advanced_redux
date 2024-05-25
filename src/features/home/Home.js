// home component
import { useSelector,useDispatch } from "react-redux"
import { recommendations,setRecommendations,getRecommedationsApi } from "./homeSlice.js"
const Home =()=>{
    const dispatch = useDispatch()
    const recommendList = useSelector(recommendations)
const onNormal =()=>{
    dispatch(setRecommendations([...recommendList,[]]))
}
const onAsync =()=>{
    dispatch(getRecommedationsApi([...recommendList,[]]))
}

    return(
        <div>
            <p>home screen</p>
            <button onClick={onNormal}><p>normal action disaptch</p></button>
            <button onClick={onAsync}><p>async action dispatch</p></button>
        </div>
    )
}
export default Home