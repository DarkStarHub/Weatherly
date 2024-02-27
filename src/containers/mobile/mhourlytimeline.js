import MhourCard from './mhourcard';
import './mhourlytimeline.css'


function Mhourlytimeline(props){

    if(props.hourCardData === undefined)
    {
        return;
    }


    function genCards(start,end){
        const hCards = [];
        for(let i=start;i<end;i++){
            hCards.push(<MhourCard
            icon={props.hourCardData[i].icon}
            temp={props.hourCardData[i].temp}
            cond={props.hourCardData[i].conditions}
            prec={props.hourCardData[i].precchance}
            wind={props.hourCardData[i].wind}
            winddir={props.hourCardData[i].winddir}
            hour={props.hourCardData[i].hour}
            key={i}
            ></MhourCard>)
        }
        return hCards;
    }

    return(
        <div className='hourlymain'>
            <div className='hourlymain__sec'>{genCards(0, 19)}</div>
        </div>        
    )
}


export default Mhourlytimeline