import CircleIcon from "../../Icon/CircleIcon";

function EventCircle({obj, size=50}){
    function render() {
        if(obj.hot) {
            return <CircleIcon text={'HOT'} diameter={`${size}px`} fontSize={`${(size/10)*3}px`}/>
        }
        if(obj.event){
            return <CircleIcon text={'Event'} diameter={`${size}px`} fontSize={`${(size/10)*3}px`}/>
        }

        return <></>
    }

    return render();
}

export default EventCircle;