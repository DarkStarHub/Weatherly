

export function convertTime(inc) {   
    
    const ctime = inc.split(':');    
    if(ctime[0] === '00')
    {
        ctime[0] = '24';
    }   
    
    let amPm = ctime[0] > 11 ? 'pm' : 'am';  
    if(ctime[0] === '24'){
        amPm ='am';
    }
    const hours = ctime[0]>12? ctime[0]-12 : ctime[0];     
    return parseInt(hours) + amPm;
}

export function convertTimeHM(inc) {    
    const ctime = inc.split(':');    
    if(ctime[0] === '00')
    {
        ctime[0] = '24';
    }
    
    let amPm = ctime[0] > 11 ? 'pm' : 'am'; 
    if(ctime[0] === '24'){
        amPm ='am';
    }
    const hours = ctime[0]>12? ctime[0]-12 : ctime[0];  
    return parseInt(hours) + ':' + ctime[1] + amPm;
}



export function getHour24(inc)
{
    const ctime = inc.split(':');     
    return parseInt(ctime[0]);   
}



export function getDayDate(inc)
{
    const ctime = inc.split('-');     
    return ctime[2];
}



export function getDayFromEpoch(inc) {    
    const a = new Date(inc * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[a.getDay()];
}



export function tempToRgb(temp){ 
    let clamped = Math.min(Math.max(temp, 20), 80) -20;  
    return `rgb(${clamped*4.25},223,${255-clamped*4.25})`;
}