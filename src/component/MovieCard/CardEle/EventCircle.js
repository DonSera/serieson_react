import {Circle} from "../../Icon/InfoIcon";
import judgeNew from "../../../function/judgeNew";

function EventCircle({obj, size=50}){
    function render() {
        if(obj.hot) {
            return <Circle name={'hot'} size={size}/>
        }
        if(judgeNew(obj.info.open)){
            return <Circle name={'new'} size={size}/>
        }
        if(obj.price === 0){
            return <Circle name={'free'} size={size}/>
        }
        if(obj.event){
            return <Circle name={'event'} size={size}/>
        }

        return <></>
    }

    return render();
}

export default EventCircle;