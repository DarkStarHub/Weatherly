import { useEffect, useState } from 'react';
import { getIcon } from '../assets/weatherIcons';
import VcApi from '../vcApi';
import './prevLoc.css';





function PrevLoc(props){   

    const [data, setData] = useState(null);

    let wData;
    
    function dataFetch(inc) {
        if (inc === Promise) {            
        }
        else {            
            setData(inc);            
        }
    }

   useEffect(() => {
    VcApi(dataFetch,props.loc);    
  }, [props.loc]);
   

    


    return (
        <div className='prevCard' onClick={() => props.clickF(props.loc)}>
            <div className='prevCard__inner'>
                <div>{props.loc}</div>
                <div>{data? data.currentConditions.temp:''}{"\u00B0"}</div>
                <div className='prevCard__inner--ico'>{data? getIcon(data.currentConditions.icon):''}</div>
            </div>
        </div>
    )
}


export default PrevLoc