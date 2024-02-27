import './App.css';
import Search from './components/search/search';
import { useEffect, useState } from 'react';
import Currentconditions from './components/currentconditions';
import Forecast from './containers/forecast';
import VcApi, { apiRetCurData, apiRetForeData } from './vcApi';
import PrevLocs from './containers/prevLocs';




function App() {

  const [curWeatherLoc, setCurWeatherLoc] = useState();
  const [curLocData, setCurLocData] = useState(null);  
  
  
  function dataPrep(inc)
  {   
    if(inc === 'not found')
    {         
      return;
    }
    if(inc === Promise)
    {
      ///console.log("prom", inc);
      console.log("not done");
    }
    else{     
      setCurLocData(inc);
      addPrevSearch(inc.address);      
      setBackground(inc.currentConditions.datetime,inc.currentConditions.sunset,inc.currentConditions.sunrise);           
    }    
  }

  function setBackground(a,b,c){    
    if(a>b || a<c)//night
    {
      document.body.style = "background: #324561"; //51 69 97
    }    
    else//day
    {
      document.body.style = "background: #b5c6e0";
    }    
  }

  

  function addPrevSearch(inc) {    
    const lcs = JSON.parse(localStorage.getItem("prevLocs"));
    if (lcs === null) {
      const prevArr = [null,null,null,1];
      prevArr[0]=inc;       
      localStorage.setItem("prevLocs",JSON.stringify(prevArr));      
    }
    else{      
      if(!lcs.includes(inc)){
        lcs[lcs[3]] = inc;
        lcs[3] = lcs[3]+1;
        if(lcs[3]>2){
          lcs[3]=0
        }        
        localStorage.setItem("prevLocs",JSON.stringify(lcs));
      }      
    }    
  }


  
  function getCurConData()
  {       
    return apiRetCurData(curLocData);       
  }

  
  function getForeData()
  {    
    return apiRetForeData(curLocData);         
  }



  function getLocationName()
  {
    if(curLocData != null)
    {
      return(curLocData.resolvedAddress);
    }
    return '';
  }





  useEffect(() => {
    VcApi(dataPrep, curWeatherLoc);
  }, [curWeatherLoc]);



  return (      
    <div className="search-main">      
      <div className='searchSec'>
        <Search 
        onSearchChange={setCurWeatherLoc} 
        loc = {getLocationName()}        
        />        
        <PrevLocs update={setCurWeatherLoc}></PrevLocs>
      </div>
      <Currentconditions curData={getCurConData()} /> 
      <Forecast foreData={getForeData()} inc={curLocData} />      
    </div>   
  );
}

export default App;