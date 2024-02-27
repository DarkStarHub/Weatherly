import './mhourscroll.css'


function Mhourscroll(props){
    const ele = document.querySelector('.mchart__main__inner');

    
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        pos = {
            // the current scroll
            left: ele.scrollLeft,
            top: ele.scrollTop,
            //get the current mouse positition
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouse', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        //Scroll the element
        ele.scollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler)

        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
    }




    return(
        <div className='mhchart__main'>
            <div className='mhchart__main__innerscroll'>                
              {props.chart}
            </div>
        </div>
    )
}

export default Mhourscroll