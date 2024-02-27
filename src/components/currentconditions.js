import { getIcon, sunriseIco, sunsetIco, thermoIcon, windArrow } from "../assets/weatherIcons";
import { convertTimeHM} from "../utils";
import './currentconditions.css';
import WLabelData from "./wLabelData";

function Currentconditions({curData}){      
    return(
        <div className="curweather">
            <div className="curweather__inner">
                <div className="locbox">
                    <div className="locbox__timebox">
                        <div className="locbox__timebox--title">Current weather</div>
                        <div className="locbox__timebox--time">{curData.dayofweek} {convertTimeHM(curData.datetime)}</div>
                    </div>                
                    <div className="locbox__timebox--loc"> {curData.curlocation}</div>                    
                </div>
                <div className="maindata">
                    <div className="maindata--left">
                        <div className="maindata--iconbox">
                            {getIcon(curData.icon)}
                        </div>
                        <div className="maindata__tempbox">
                            <div className="maindata__tempbox__temp">{curData.temp}</div>
                            <div className="maindata__tempbox__span">{"\u00B0"}F</div>
                        </div>
                        <div className="maindata__condbox">
                            <div className="maindata__condbox__inner">
                                <div className="maindata__condbox__inner--text">{curData.conditiontext}</div>
                                <div>Feels like {curData.feelslike}{"\u00B0"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="maindata--right">
                        <div className="maindata__hilobox">
                            <div className="maindata__hilobox--ico">
                                {thermoIcon(curData.tempmax)}
                            </div>
                            <div className="maindata__hilobox__tempbox">
                                <div className="maindata__hilobox__tempbox__half">
                                    <div className="maindata__hilobox__tempbox__half--name">Hi</div>
                                    <div className="maindata__hilobox__tempbox__half--data">{curData.tempmax}{"\u00B0"}f</div>
                                </div>
                                <div className="maindata__hilobox__tempbox__half">
                                    <div className="maindata__hilobox__tempbox__half--name">Low</div>
                                    <div className="maindata__hilobox__tempbox__half--data">{curData.tempmin}{"\u00B0"}f</div>
                                </div>
                            </div>
                        </div>
                        <div className="maindata__sunbox">
                            <div className="maindata__sunbox__half">
                                <div>{sunriseIco()}</div>
                                <div className="maindata__sunbox__half--title">Sunrise</div>
                                <div className="maindata__sunbox__half--data">{curData.sunrise}</div>
                            </div>
                            <div className="maindata__sunbox__half">
                                <div>{sunsetIco()}</div>
                                <div className="maindata__sunbox__half--title">Sunset</div>
                                <div className="maindata__sunbox__half--data">{curData.sunset}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <span>{curData.description}</span>
                </div>
                <div className="databox">                    
                    <div className="databox__top--sec">
                        <div className="databox__top--wind"> Wind</div>
                        <div className="databox__top--data"> {curData.wind} mph {windArrow(curData.winddir)}</div>
                    </div>
                    <div className="databox__top--sec">
                        <WLabelData
                            label={"Humidity"}
                            data={curData.humidity + " %"}>
                        </WLabelData>
                    </div>
                    <div className="databox__top--sec">
                        <WLabelData
                            label={"UV index"}
                            data={curData.UVindex + "%"}>
                        </WLabelData>
                    </div>
                    <div className="databox__top--sec">
                        <WLabelData
                            label={"Visibility"}
                            data={curData.visibility}>
                        </WLabelData>
                    </div>
                    <div className="databox__top--sec">
                        <WLabelData
                            label={"Dew point"}
                            data={curData.dewpoint + "\u00B0"} >
                        </WLabelData>
                    </div>                   
                </div>
            </div>
        </div> 
    )
}


export default Currentconditions;







