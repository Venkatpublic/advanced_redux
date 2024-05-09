import { immerable ,produce,current} from "immer";
export class clock{
[immerable]  = true
constructor(hour,minute){
    this.hour = hour
    this.minute = minute
}

get time (){
    return `${this.hour}:${this.minute}`
}

tick (){
    return produce(this,draft=>{draft.minute++})
}
}
