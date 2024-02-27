import { useState } from "react";
import './search.css'; 
import { searchIco } from "../../assets/weatherIcons";


function Search(props) {

    const [curLoc, setCurLoc] = useState('');
    
    
    const handleOnChange = (newLoc) => {
        setCurLoc(newLoc);           
    };

   
    const submitNewLoc = (event) => {
        if (event.key === "Enter") {              
            if(curLoc === null)      
            {
                props.onSearchChange('90027');
                return
            }   
            props.onSearchChange(curLoc); 
            setCurLoc("");           
        }
    };

    
    
    /*
    const searchBox = () =>{
        return (
            <input className="searchbox__searchimp" type="text" placeholder="enter city or zip"
                value={curLoc} onChange={(e) => handleOnChange(e.target.value)}
                onKeyDown={submitNewLoc} />
        )
    }*/


    function handleSearchButton(){
        if(curLoc === null)      
            {
                props.onSearchChange('90027');
                return
            }  
        props.onSearchChange(curLoc);  
        setCurLoc("");        
    }
   

    return (
        <div className="searchbox">
            <input className="searchbox__searchimp" type="text" placeholder="enter city or zip"
                 value={props.searchVal? props.searchVal : curLoc} onChange={(e) => handleOnChange(e.target.value)}
                onKeyDown={submitNewLoc} />
            <div className="searchbox__searchbutton">
                <div className="searchbox__searchbutton__button" onClick={handleSearchButton}>
                    {searchIco()}
                </div>
            </div>
        </div>
    );
}

 

export default Search;


