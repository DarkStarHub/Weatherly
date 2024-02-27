import './wLabelData.css';

function WLabelData(props){

    return(
        <div className="labelData">
            <div className="labelData__label">
                {props.label}
            </div>
            <div className="labelData__data">
                {props.data}
            </div>
        </div>
    )
}


export default WLabelData;