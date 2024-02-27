import { convertTime, convertTimeHM, getDayDate, getDayFromEpoch, getHour24 } from "./utils";


function VcApi(cb, loc) {
    if (loc === undefined) {
        loc = '90027';
    }

    const f_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=ECSKR3TVKSR4SNP8XWTA332LV&contentType=json`

    async function fetchData() {
        try {
            const response = await fetch(f_URL);
            /* thanks Robert! */
            if (!response.ok) {
                console.error('Network resonse was not ok')
                cb("not found");
                //throw new Error('Network resonse was not ok'); 
            }
            /* thanks Robert! */
            const data = await response.json();
            cb(data);
        } catch (error) {
            console.error('Error fetching data:', error.message)
            //throw error;
        }
    }    
    fetchData();
}


export function apiRetCurData(inc){   
    let retObj = {
        curlocation: '--',
        dayofweek: '--',
        conditiontext: '--',
        temp: '--',
        tempmax: '--',
        tempmin: '--',
        description:'--',
        humidity: '--',
        datetime: '--',
        feelslike: '--',
        wind: '--',       
        visibility: '--',
        UVindex: '--',
        pressure: '--',
        dewpoint: '--',
        winddir: '--',
        icon: '--',
        sunrise:'--',
        sunset: '--'
    };

    if(inc === null)
    {
        return retObj;
    }

    retObj.curlocation = inc.resolvedAddress;
    retObj.dayofweek = getDayFromEpoch(inc.currentConditions.datetimeEpoch);
    retObj.conditiontext = inc.currentConditions.conditions;
    retObj.feelslike = inc.currentConditions.feelslike;
    retObj.description = inc.description;
    retObj.wind = inc.currentConditions.windspeed; 
    retObj.pressure = inc.currentConditions.pressure;
    retObj.wind = inc.currentConditions.windspeed;    
    retObj.dewpoint = inc.currentConditions.dew; 
    retObj.UVindex = inc.currentConditions.uvindex;
    retObj.visibility = inc.currentConditions.visibility;
    retObj.winddir = inc.currentConditions.winddir;

    
    retObj.temp = inc.currentConditions.temp;
    retObj.tempmax = inc.days[0].tempmax;
    retObj.tempmin = inc.days[0].tempmin;
    retObj.icon = inc.currentConditions.icon;

    retObj.sunrise = convertTimeHM(inc.currentConditions.sunrise);
    retObj.sunset = convertTimeHM(inc.currentConditions.sunset);

    
    if(inc.currentConditions.humidity)
    {
        retObj.humidity = inc.currentConditions.humidity;
    }
    if(inc.currentConditions.datetime)
    {        
        retObj.datetime = inc.currentConditions.datetime;
    }
    return retObj;
}




export function apiRetForeData(inc) {      

    let retArr = [];

    for (let i = 0; i < 7; i++) {
        let dayObj = {
            tempmax: '--',
            tempmin: '--',
            humidity: '--',            
            dayofweek: '--',
            daydate: '--',
            icon: '--'
        };
        if (inc === null) {
            retArr.push(dayObj);
            continue;
        }

        if (inc.days[i].tempmax) {
            dayObj.tempmax = inc.days[i].tempmax;
        }
        if (inc.days[i].tempmin) {
            dayObj.tempmin = inc.days[i].tempmin;
        }
        if (inc.days[i].humidity) {
            dayObj.humidity = inc.days[i].precipprob;
        }
       
        dayObj.dayofweek = getDayFromEpoch(inc.days[i].datetimeEpoch);
        dayObj.daydate = getDayDate(inc.days[i].datetime);
        dayObj.icon = inc.days[i].icon;

        retArr.push(dayObj);
    }
    

    return retArr;
}


export function apiRetCurHoursData(inc){   
    if(inc === null) // data not populated yet
    {
        return;
    }

        

    let retArr = [];
    const curHour = getHour24(inc.currentConditions.datetime);  
    
    let hInd = curHour;    
    let dInd = 0;    
    let minT = inc.days[0].hours[0].temp, maxT = minT, range;    
    
    
    for(let i = 0;i<20;i++){
        let hourObj = {
            temp: '--',
            tempnorm: '--',
            precchance: '--',
            hour: '--',
            day: '--'
        };   
        
        
        hourObj.temp = inc.days[dInd].hours[hInd].temp;
        hourObj.precchance = inc.days[dInd].hours[hInd].precipprob;             
        hourObj.hour = convertTime(inc.days[dInd].hours[hInd].datetime);        
        hourObj.day = inc.days[dInd].datetime;

        getDayFromEpoch(inc.days[0].datetimeEpoch);     
        
       
        if (hourObj.temp < minT) {
            minT = hourObj.temp
        }
        if (hourObj.temp > maxT) {
            maxT = hourObj.temp
        }
        
        
      
        hInd ++;
        if(hInd>23)
        {
            hInd = 0;
            dInd = 1;
        }

        retArr.push(hourObj);
    }       

    range = maxT - minT;

    for (let i = 0; i < 20; i++) {      
        retArr[i].tempnorm = ((retArr[i].temp - minT) / range + 1);
    }
    return retArr;
}



export function apiRetSelectHoursData(inc,day){    
    if(inc === null) // data not populated yet
    {
        return;
    }  

    let retArr = [];    
    
    let hInd = 0; //start at midnight
    
    if(day === 0){
        hInd = getHour24(inc.currentConditions.datetime);
    }

    let dInd = day;      
    let minT = inc.days[0].hours[0].temp, maxT = minT, range;    
    
    
    for(let i = 0;i<20;i++){
        let hourObj = {
            temp: '--',
            tempnorm: '--',
            precchance: '--',
            hour: '--',
            day: '--',
            dayofweek: '--',
            icon: '--',
            conditions: '--',
            wind: '--',
            winddir: '--'
        };   
        
        
        hourObj.temp = inc.days[dInd].hours[hInd].temp;
        hourObj.precchance = inc.days[dInd].hours[hInd].precipprob;             
        hourObj.hour = convertTime(inc.days[dInd].hours[hInd].datetime);        
        hourObj.day = inc.days[dInd].datetime;
        hourObj.icon = inc.days[dInd].hours[hInd].icon;
        hourObj.conditions = inc.days[dInd].hours[hInd].conditions;
        hourObj.wind = inc.days[dInd].hours[hInd].windspeed;
        hourObj.winddir = inc.days[dInd].hours[hInd].winddir;

        hourObj.dayofweek = getDayFromEpoch(inc.days[dInd].hours[hInd].datetimeEpoch);     
        
       
        if (hourObj.temp < minT) {
            minT = hourObj.temp
        }
        if (hourObj.temp > maxT) {
            maxT = hourObj.temp
        }
             
      
        hInd ++;
        if(hInd>23)
        {
            hInd = 0;
            dInd ++;
        }
        retArr.push(hourObj);
    }    
    

    range = maxT - minT;

    for (let i = 0; i < 20; i++) { 
        retArr[i].tempnorm = ((retArr[i].temp - minT) / range + 1);
    } 
    return retArr;
}



export default VcApi;