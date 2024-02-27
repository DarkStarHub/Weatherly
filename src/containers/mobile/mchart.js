import { LineChart, ResponsiveContainer, XAxis, Line } from 'recharts';
import './mchart.css'
import { PureComponent } from 'react';

function Mchart({hoursData}){

    if(!hoursData){
        return;
      }
    
      class CustomizedAxisTemp extends PureComponent {
        render() {
          const { x, y, stroke, payload, temp } = this.props;     
    
          return (
            <g transform={`translate(${x},${y})`}>
              <text x={0} y={0} textAnchor="middle" fill="white" fontSize={"3.4vw"}>
                {temp[payload.index].temp + "\u00B0"}
              </text>                   
            </g>
          );
        }
      }


      class CustomizedAxisTick extends PureComponent {
        render() {
          const { x, y, stroke, payload, temp } = this.props;
          //const incTemp =  temp[payload.index].temp           
    
          return (        
            <g transform={`translate(${x},${y})`}>
              <text x={0} y={0} dy={-.08*y} textAnchor="middle" fill="white" fontSize={"3.4vw"}>
                {payload.value}
              </text>             
            </g>
          );
        }
      }




    return(
        <div className='chartBox'>
            <div className='chartBox__inner'>
                <ResponsiveContainer width="100%" aspect={6}>
                    <LineChart
                        data={hoursData}
                        margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
                        <XAxis
                            dataKey="temp"
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                            orientation='top'
                            tick={<CustomizedAxisTemp temp={hoursData} />}>
                        </XAxis>  
                        <XAxis
                            xAxisId={1}
                            dataKey="hour"
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                            orientation='bottom'
                            tick={<CustomizedAxisTick temp={hoursData} />}>
                        </XAxis>
                        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>       
    )
}



export default Mchart


