import { useState } from 'react';
import HourCard from '../components/hourCard';
import './hourlyTimeline.css'
import { chevron, chevronLeft} from '../assets/weatherIcons';


function HourlyTimeLine(props){   
    
    const [curCarPos,setCurCarPos] = useState(0);       
    

    if(props.hourCardData === undefined)
    {
        return;
    }
    

    function forCar(){       
        setCurCarPos(curCarPos+1);
    }

    function backCar(){        
        setCurCarPos(curCarPos-1);
    }
    

    function genCards(start,end){
        const hCards = [];
        for(let i=start;i<end;i++){
            hCards.push(<HourCard
            icon={props.hourCardData[i].icon}
            temp={props.hourCardData[i].temp}
            cond={props.hourCardData[i].conditions}
            prec={props.hourCardData[i].precchance}
            wind={props.hourCardData[i].wind}
            winddir={props.hourCardData[i].winddir}
            hour={props.hourCardData[i].hour}
            key={i}
            ></HourCard>)
        }
        return hCards;
    }

    function setCarClass(){
        switch (curCarPos) {
            case 0:
                return 'hourlyMain';            
            case 1:
                return 'hourlyMain pos1';           
            case 2:
                return 'hourlyMain pos2';                       
            default:
            return 'hourlyMain';
        } 
    }





    return(
        <div>
            <div className={curCarPos === 2? 'rightChev hidden':'rightChev'} onClick={forCar}>{chevron()} </div>
            <div className={curCarPos === 0? 'leftChev hidden':'leftChev'} onClick={backCar}>{chevronLeft()}</div>
            <div className={setCarClass()}>
                <div className='hourlyMain__sec'>{genCards(0, 8)}</div>
                <div className='hourlyMain__sec'>{genCards(8, 16)}</div>
                <div className='hourlyMain__sec'>{genCards(16, 20)}</div>
            </div>
        </div>
    )
}


export default HourlyTimeLine;