import { getIcon } from '../assets/weatherIcons';
import './foreDayCard.css'


function ForeDayCard(props){    

    return(
        <div className ={props.islive? "card__live":"card"} onClick={()=>props.clickF(props.id)}>
            <div className='card__inner'>
                <div className='card__inner__top'>
                    <div>{props.day}{' '}{props.daydate}</div>
                </div>
                <div className='card__inner__bottom'>
                    <div className='card__inner__bottom--ico'>
                    {getIcon(props.icon)}
                    </div>
                    <div className='card__inner__bottom__data'>
                        <div>{props.high +"\u00B0"} </div>
                        <div className='card__inner__bottom__data--low'>{props.low +"\u00B0"}</div>                        
                    </div>
                    {props.islive? 
                        <div className='card__inner__bottom__data--livecond fade-in'> 
                            {props.cond}
                        </div>
                        : null}
                </div>                
            </div>
        </div>
    );
}

export default ForeDayCard;