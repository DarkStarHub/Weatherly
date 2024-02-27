import PrevLoc from '../components/prevLoc';
import './prevLocs.css';



function PrevLocs(props) {
    const ls = JSON.parse(localStorage.getItem("prevLocs"));
    
    if(ls === null){        
        return;
    }

    function clickSearch(inc) {       
        props.update(inc);
    }

    return (
        <div className='prevSec'>
            <div className='prevSec__wrapper'>
                {ls[0] != null &&
                    <PrevLoc loc={ls[0]} clickF={clickSearch} />
                }
                {ls[1] != null &&
                    <PrevLoc loc={ls[1]} clickF={clickSearch} />
                }
                {ls[2] != null &&
                    <PrevLoc loc={ls[2]} clickF={clickSearch} />
                }
            </div>
        </div>
    )
}


export default PrevLocs