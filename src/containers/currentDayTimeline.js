/*import DaySlice from '../components/daySlice';*/
import './currentDayTimeline.css';

import React from 'react';
import { AreaChart, Area, XAxis, ResponsiveContainer} from 'recharts';
import { PureComponent } from 'react';
import { tempToRgb } from '../utils';
import { getIcon} from '../assets/weatherIcons';







function CurrentDayTimeline({hoursData}){ 
  if(!hoursData){
    return;
  }
  
  
  function getColor(){
    let retVal = hoursData[0].temp;

    for(let i = 0;i<20;i++){      
      if(hoursData[i].temp> retVal){
        retVal = hoursData[i].temp;        
      }
    }
    
    return retVal;
  }



  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload, temp } = this.props;     

      return (        
        <g transform={`translate(${x},${y-10})`}>
          <text x={0} y={0} dy={-y / 12} textAnchor="middle" fill="white" fontSize={"1.4vw"}>
            {payload.value}
          </text>  
          <g transform={`translate(${-9},${-y/3.2})`}>          
              {getIcon(temp[payload.index].icon,"2vw","2vw")}
          </g>    
          <g>                  
            <svg x={"-1.5vw"} y={-y / 5} xmlns="http://www.w3.org/2000/svg" width=".8vw" height=".8vw" fill="white" viewBox="0 0 16 16">
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
            </svg>
            <text x={'-.6vw'} y={0} dy={-y / 6} textAnchor="start" fill="white" fontSize={"1vw"}>
              {temp[payload.index].precchance + "%"}
            </text>
          </g>
        </g>
      );
    }
  }

          
  class CustomizedAxisTemp extends PureComponent {
    render() {
      const { x, y, stroke, payload, temp } = this.props;     

      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} textAnchor="middle" fill="white" fontSize={"1.4vw"}>
            {temp[payload.index].temp + "\u00B0"}
          </text>                   
        </g>
      );
    }
  }


  class CustomizedAxisDay extends PureComponent {
    render() {
      const { x, y, stroke, payload, temp } = this.props;      
          

      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={-10} textAnchor="middle" fill="white" fontSize={"1.4vw"}>
            {payload.index === 0? "Today": 
            temp[payload.index].hour === "12am"? temp[payload.index].dayofweek: null}            
            
          </text>
        </g>
      );
    }
  }
/*
 class CustomizedAxisDayIco extends PureComponent {
    render() {
      const { x, y, stroke, payload, temp } = this.props;
      let curIco = this.props.temp[0].icon;        

      return (
        <g transform={`translate(${x-10},${y+20})`}>
          <g>
              {getIcon(temp[payload.index].icon,"2vw","2vw")}
            </g>          
        </g>
      );
    }
  }*/



   
 

  return (
    <div className='chartBox'>
      <div className='chartBox__inner'>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            //width={500}
            // height={400}
            data={hoursData}
            margin={{
              top: 0,
              right: 30,
              left: 30,
              bottom: 0,
            }}            
          >           
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={tempToRgb(getColor())} stopOpacity={0.8} />
                <stop offset="95%" stopColor={tempToRgb(getColor())} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="temp" stroke={tempToRgb(getColor())} fillOpacity={1} fill="url(#colorUv)" />

            <XAxis  
              xAxisId={0}
              dataKey="hour"
              axisLine={false}
              tickLine={false}
              height={1}             
              interval={0}  
              tick={<CustomizedAxisTick temp={hoursData} />}
            />
            <XAxis xAxisId={1}
              dataKey = "temp"
              axisLine={false}
              tickLine={false}
              interval={0}            
              orientation='top'
              tick={<CustomizedAxisTemp temp={hoursData} />}
            />     
            <XAxis xAxisId={2}
              dataKey = "temp"
              axisLine={false}
              tickLine={false}
              interval={0}             
              orientation='top'
              tick={<CustomizedAxisDay temp={hoursData} />}>              
              </XAxis>           
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CurrentDayTimeline;



/*
  class CustomizedAxisDayDash extends PureComponent {
    render() {
      const { x, y, stroke, payload, temp } = this.props;
      //const incTemp =  temp[payload.index].temp     
      

      return (
        <g transform={`translate(${x},${y})`}>

          {temp[payload.index].hour === "12am" ?
            <g>
              <svg x={'-1.7vw'} y={-20} width="7" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <line stroke-dasharray="5, 5" x1="0" y1="1" x2="1" y2="239" style={{ strokewidth: "2px", stroke: "white" }}></line>
              </svg>
            </g>
            :
            ''}
        </g>
      );
    }
  }*/


  