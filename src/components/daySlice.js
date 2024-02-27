import "./daySlice.css";

function DaySlice(props){

    

    return(
        <div className="daySlice">

            <div className="daySlice__temp">
                34f
            </div>

            <div className="daySlice__tempBar" style={{height:props.height}}>

            </div>



            <div className="daySlice__overlay">
                <div className="daySlice__overlay__icon">
                    icon
                </div>
                <div className="daySlice__overlay__precchance">
                    90%
                </div>
                <div className="daySlice__overlay__day">
                    now
                </div>
                
            </div>



        </div>
    )
}


export default DaySlice;