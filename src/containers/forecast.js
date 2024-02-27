import './forecast.css'
import ForeDayCard from "../components/foreDayCard";
import { useEffect, useState } from 'react';
import HourlyTimeLine from './hourlyTimeline';
import CurrentDayTimeline from './currentDayTimeline'
import {apiRetSelectHoursData} from '../vcApi';
import Mchartscroll from './mobile/mchartscroll';
import Mchart from './mobile/mchart';
import Mhourscroll from './mobile/mhourscroll';
import Mhourlytimeline from './mobile/mhourlytimeline';
import React, { Component} from 'react';



function Forecast(props){      
    const [selectedDay,setSelectedDay] = useState(0);
    const [selectedChart,setSelectedChart] = useState(0);    
    const [mobileScreen,setMobileScreen] =  useState(false);

        
    
    useEffect(() => {             
        const handleResize = () => {
            if (window.innerWidth < 481) {
                setMobileScreen(true);
            }
            else {
                setMobileScreen(false)                
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);   

    


    
    if(props.inc === null){
        return;
    }
    
    
    function setLive(inc){        
        setSelectedDay(inc);             
    }

    function selectSummary(){
        setSelectedChart(0);
    }

    function selectHours(){
        setSelectedChart(1);
    }

    function genForeDayCards(){
        const hCards = [];
        for(let i=0;i<7;i++){
            hCards.push(<ForeDayCard day={props.foreData[i].dayofweek}
                daydate={props.foreData[i].daydate}
                high={props.foreData[i].tempmax}
                low={props.foreData[i].tempmin}
                hum={props.foreData[i].humidity}
                icon={props.foreData[i].icon}
                cond={props.inc.days[i].conditions}
                id={i}
                islive={i === selectedDay ? true : false}
                clickF={setLive}  
                key = {i}              
            />)
        }
        return hCards;
    }
    
    
    function getDeskTopChart(){        
        return (
            <div>
                {selectedChart === 1 ? <HourlyTimeLine hourCardData={apiRetSelectHoursData(props.inc, selectedDay)} /> :
                    <CurrentDayTimeline hoursData={apiRetSelectHoursData(props.inc, selectedDay)}></CurrentDayTimeline>}
            </div>
        )
    }

    function getMobileChart(){        
        return(
            <div>
                 {selectedChart === 1 ?
                    <Mhourscroll
                        chart={<Mhourlytimeline hourCardData={apiRetSelectHoursData(props.inc, selectedDay)} />}>
                    </Mhourscroll>
                    :
                    <Mchartscroll
                        chart={<Mchart hoursData={apiRetSelectHoursData(props.inc, selectedDay)}></Mchart>}
                    >
                    </Mchartscroll>}
            </div>
        )
    }

   
        
   
    return (
        <div className='forecast'>
            <div className='forecast__titleBox'>
                <div className='forecast__titleBox__title'>
                    7 day Forecast
                </div>
            </div>
            <div className="forecast__box">
                {genForeDayCards()}   
            </div>
            <div className='forecast__select'>
                <div className='forecast__select__option' onClick={selectSummary}>
                    Summary
                </div>
                <div className='forecast__select__option' onClick={selectHours}>
                    Hourly
                </div>
                <div className='forecast__select__day'>
                    {props.foreData[selectedDay].dayofweek}    {props.foreData[selectedDay].daydate}
                </div>
            </div>
            <div className="forecast__chart">                 
                                
                {mobileScreen? getMobileChart(): getDeskTopChart()}
             


                  
             </div>
        </div>
    );
}

export default Forecast;    