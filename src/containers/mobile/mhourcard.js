
import { getIcon,windArrow } from '../../assets/weatherIcons';
import './mhourcard.css'


function MhourCard(props){    
    return(
        <div className='mcardmain'>
            <div className='mcardmain__inner'>
                <div className='mcardmain__inner--icon'>                    
                    {getIcon(props.icon,"5vw","5vw")}
                </div>
                <div className='mcardmain__inner--temp'>
                    {props.temp}{"\u00B0"}
                </div>
                <div className='mcardmain__inner--cond'>
                    {props.cond}
                </div>
                <div className='mcardmain__inner--prec'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4vw" height="1.4vw" fill="white" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
                    </svg>   {props.prec}%
                </div>                
                <div className='mcardmain__inner--wind'>                    
                    {windArrow(props.winddir)}
                    {props.wind} mph
                </div>
                <div className='mcardmain__inner--time'>
                    {props.hour}
                </div>
            </div>
        </div>
    )
}


export default MhourCard;