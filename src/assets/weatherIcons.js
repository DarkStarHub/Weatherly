import { tempToRgb } from "../utils";

export function getIcon(inc,x,y) {

       

    switch (inc) {
        case "snow":
            return snowIco(x,y);            
        case "rain":
            return lightRainIco(x,y);           
        case "fog":
            return fogIco(x,y);            
        case "wind":
            return windyIco(x,y);            
        case "cloudy":
            return cloudyIco(x,y);            
        case "partly-cloudy-day":
            return mostlySunnyDayIco(x,y);            
        case "clear-day":
            return clearDayIco(x,y);            
        case "clear-night":
            return clearNightIco(x,y);            
        default:
        return clearNightIco(x,y);
    }   
}



export function cloudyIco(x,y){
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 58H34.5H36H55.5C64.6127 58 72 50.6127 72 41.5C72 32.3873 64.6127 25 55.5 25C55.1382 25 54.7791 25.0116 54.4231 25.0346C50.6566 17.879 43.1481 13 34.5 13C23.6003 13 14.5107 20.7504 12.4418 31.0409C5.48057 31.5806 0 37.4003 0 44.5C0 51.9558 6.04416 58 13.5 58Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 58H34.5H36H55.5C64.6127 58 72 50.6127 72 41.5C72 32.3873 64.6127 25 55.5 25C55.1382 25 54.7791 25.0116 54.4231 25.0346C50.6566 17.879 43.1481 13 34.5 13C23.6003 13 14.5107 20.7504 12.4418 31.0409C5.48057 31.5806 0 37.4003 0 44.5C0 51.9558 6.04416 58 13.5 58Z" fill="url(#paint0_linear_582_42049)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 58H34.5H36H55.5C64.6127 58 72 50.6127 72 41.5C72 32.3873 64.6127 25 55.5 25C55.1382 25 54.7791 25.0116 54.4231 25.0346C50.6566 17.879 43.1481 13 34.5 13C23.6003 13 14.5107 20.7504 12.4418 31.0409C5.48057 31.5806 0 37.4003 0 44.5C0 51.9558 6.04416 58 13.5 58Z" fill="url(#paint1_linear_582_42049)" />
            <path d="M0 44.5C0 37.0442 6.04416 31 13.5 31H18C27.9411 31 36 39.0589 36 49V58H13.5C6.04416 58 0 51.9558 0 44.5V44.5Z" fill="url(#paint2_radial_582_42049)" />
            <path d="M12 35.5C12 23.0736 22.0736 13 34.5 13V13C46.9264 13 57 23.0736 57 35.5V35.5C57 47.9264 46.9264 58 34.5 58V58C22.0736 58 12 47.9264 12 35.5V35.5Z" fill="url(#paint3_radial_582_42049)" />
            <circle cx="55.5" cy="41.5" r="16.5" fill="url(#paint4_radial_582_42049)" />
            <defs>
                <linearGradient id="paint0_linear_582_42049" x1="22.5" y1="23.5" x2="36" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_582_42049" x1="32.0998" y1="59.5925" x2="31.1538" y2="13" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint2_radial_582_42049" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5 58) rotate(-127.875) scale(28.5044 32.9871)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint3_radial_582_42049" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 53.5) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint4_radial_582_42049" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 53.6) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
            </defs>
        </svg>
    )
}


export function partlySunnyIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36" cy="36" r="30" fill="url(#paint0_linear_281_51023)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z" fill="url(#paint1_linear_281_51023)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z" fill="url(#paint2_linear_281_51023)" />
            <path d="M30 55.125C30 50.7758 33.5258 47.25 37.875 47.25H40.5C46.299 47.25 51 51.951 51 57.75V63H37.875C33.5258 63 30 59.4742 30 55.125Z" fill="url(#paint3_radial_281_51023)" />
            <path d="M37 49.875C37 42.6263 42.8763 36.75 50.125 36.75C57.3737 36.75 63.25 42.6263 63.25 49.875C63.25 57.1237 57.3737 63 50.125 63C42.8763 63 37 57.1237 37 49.875Z" fill="url(#paint4_radial_281_51023)" />
            <circle cx="62.375" cy="53.375" r="9.625" fill="url(#paint5_radial_281_51023)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="url(#paint6_linear_281_51023)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="url(#paint7_linear_281_51023)" />
            <path d="M0 19.125C0 14.7758 3.52576 11.25 7.875 11.25H10.5C16.299 11.25 21 15.951 21 21.75V27H7.875C3.52576 27 0 23.4742 0 19.125Z" fill="url(#paint8_radial_281_51023)" />
            <path d="M7 13.875C7 6.62626 12.8763 0.75 20.125 0.75C27.3737 0.75 33.25 6.62626 33.25 13.875C33.25 21.1237 27.3737 27 20.125 27C12.8763 27 7 21.1237 7 13.875Z" fill="url(#paint9_radial_281_51023)" />
            <circle cx="32.375" cy="17.375" r="9.625" fill="url(#paint10_radial_281_51023)" />
            <defs>
                <linearGradient id="paint0_linear_281_51023" x1="49.5" y1="49" x2="0.579727" y2="-10.7074" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF6D0F" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
                <linearGradient id="paint1_linear_281_51023" x1="43.125" y1="42.875" x2="51" y2="63" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_281_51023" x1="48.7249" y1="63.929" x2="48.1731" y2="36.75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint3_radial_281_51023" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.375 63) rotate(-127.875) scale(16.6276 19.2425)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint4_radial_281_51023" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(51.2187 63) rotate(-120.256) scale(25.3248 26.3211)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint5_radial_281_51023" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.2417 60.4333) rotate(-56.3099) scale(18.5085)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <linearGradient id="paint6_linear_281_51023" x1="13.125" y1="6.875" x2="21" y2="27" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint7_linear_281_51023" x1="18.7249" y1="27.929" x2="18.1731" y2="0.749999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint8_radial_281_51023" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.375 27) rotate(-127.875) scale(16.6276 19.2425)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint9_radial_281_51023" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.2187 27) rotate(-120.256) scale(25.3248 26.3211)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint10_radial_281_51023" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.2417 24.4333) rotate(-56.3099) scale(18.5085)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
            </defs>
        </svg>
    )
}


export function lightRainIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint0_linear_537_36555)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint1_linear_537_36555)" />
            <path d="M0 40.5C0 33.0442 6.04416 27 13.5 27H18C27.9411 27 36 35.0589 36 45V54H13.5C6.04416 54 0 47.9558 0 40.5Z" fill="url(#paint2_radial_537_36555)" />
            <path d="M12 31.5C12 19.0736 22.0736 9 34.5 9C46.9264 9 57 19.0736 57 31.5C57 43.9264 46.9264 54 34.5 54C22.0736 54 12 43.9264 12 31.5Z" fill="url(#paint3_radial_537_36555)" />
            <circle cx="55.5" cy="37.5" r="16.5" fill="url(#paint4_radial_537_36555)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M39 61.5002V41.1006C39 39.2254 41.2709 38.2904 42.5912 39.6219L56.8413 53.9931C58.7903 55.8994 60 58.5585 60 61.5002C60 67.2992 55.299 72.0002 49.5 72.0002C43.701 72.0002 39 67.2992 39 61.5002Z" fill="#C4C4C4" />
            <path fillRule="evenodd" clipRule="evenodd" d="M39 61.5002V41.1006C39 39.2254 41.2709 38.2904 42.5912 39.6219L56.8413 53.9931C58.7903 55.8994 60 58.5585 60 61.5002C60 67.2992 55.299 72.0002 49.5 72.0002C43.701 72.0002 39 67.2992 39 61.5002Z" fill="url(#paint5_linear_537_36555)" />
            <defs>
                <linearGradient id="paint0_linear_537_36555" x1="22.5" y1="19.5" x2="36" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_537_36555" x1="32.0998" y1="55.5925" x2="31.1538" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint2_radial_537_36555" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5 54) rotate(-127.875) scale(28.5044 32.9871)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint3_radial_537_36555" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 49.5) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint4_radial_537_36555" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 49.6) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <linearGradient id="paint5_linear_537_36555" x1="54.7509" y1="69.8232" x2="35.7826" y2="48.9185" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0066FF" />
                    <stop offset="1" stopColor="#65ACFF" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function lightSnowIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint0_linear_537_36597)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint1_linear_537_36597)" />
            <path d="M0 40.5C0 33.0442 6.04416 27 13.5 27H18C27.9411 27 36 35.0589 36 45V54H13.5C6.04416 54 0 47.9558 0 40.5Z" fill="url(#paint2_radial_537_36597)" />
            <path d="M12 31.5C12 19.0736 22.0736 9 34.5 9C46.9264 9 57 19.0736 57 31.5C57 43.9264 46.9264 54 34.5 54C22.0736 54 12 43.9264 12 31.5Z" fill="url(#paint3_radial_537_36597)" />
            <circle cx="55.5" cy="37.5" r="16.5" fill="url(#paint4_radial_537_36597)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M40.5 36C41.3284 36 42 36.6716 42 37.5V39.8787L42.4393 39.4393C43.0251 38.8536 43.9749 38.8536 44.5607 39.4393C45.1465 40.0251 45.1465 40.9749 44.5607 41.5607L42 44.1213V48.4021L45.7077 46.2615L46.6449 42.7639C46.8593 41.9637 47.6818 41.4888 48.482 41.7032C49.2822 41.9176 49.7571 42.7401 49.5426 43.5403L49.3819 44.1402L51.4417 42.951C52.1591 42.5367 53.0765 42.7826 53.4907 43.5C53.9049 44.2174 53.6591 45.1348 52.9417 45.549L50.8815 46.7385L51.482 46.8994C52.2822 47.1138 52.7571 47.9363 52.5426 48.7365C52.3282 49.5367 51.5057 50.0116 50.7055 49.7971L47.2073 48.8598L43.5 51.0002L47.2067 53.1402L50.705 52.2029C51.5052 51.9884 52.3277 52.4633 52.5421 53.2635C52.7565 54.0637 52.2816 54.8862 51.4814 55.1006L50.8809 55.2615L52.941 56.451C53.6585 56.8652 53.9043 57.7826 53.4901 58.5C53.0759 59.2174 52.1585 59.4633 51.441 59.049L49.3814 57.8599L49.5421 58.4597C49.7565 59.2599 49.2816 60.0824 48.4814 60.2968C47.6812 60.5112 46.8587 60.0363 46.6443 59.2361L45.7071 55.7386L42 53.5983V57.8787L44.5607 60.4393C45.1465 61.0251 45.1465 61.9749 44.5607 62.5607C43.9749 63.1464 43.0251 63.1464 42.4393 62.5607L42 62.1213V64.5C42 65.3284 41.3284 66 40.5 66C39.6716 66 39 65.3284 39 64.5V62.1213L38.5607 62.5607C37.9749 63.1464 37.0251 63.1464 36.4393 62.5607C35.8536 61.9749 35.8536 61.0251 36.4393 60.4393L39 57.8787V53.5983L35.293 55.7385L34.3557 59.2365C34.1413 60.0367 33.3188 60.5116 32.5186 60.2971C31.7184 60.0827 31.2435 59.2602 31.4579 58.46L31.6187 57.8598L29.559 59.049C28.8415 59.4633 27.9241 59.2174 27.5099 58.5C27.0957 57.7826 27.3415 56.8652 28.059 56.451L30.1187 55.2618L29.5186 55.101C28.7184 54.8866 28.2435 54.0641 28.4579 53.2639C28.6723 52.4637 29.4948 51.9888 30.295 52.2032L33.7929 53.1405L37.5 51.0002L33.7923 48.8595L30.2945 49.7968C29.4943 50.0112 28.6718 49.5363 28.4574 48.7361C28.243 47.9359 28.7178 47.1134 29.518 46.899L30.1181 46.7382L28.0584 45.549C27.3409 45.1348 27.0951 44.2174 27.5093 43.5C27.9235 42.7826 28.8409 42.5367 29.5584 42.951L31.6182 44.1402L31.4574 43.54C31.243 42.7398 31.7178 41.9173 32.518 41.7029C33.3182 41.4884 34.1407 41.9633 34.3551 42.7635L35.2924 46.2615L39 48.4021V44.1213L36.4393 41.5607C35.8536 40.9749 35.8536 40.0251 36.4393 39.4393C37.0251 38.8536 37.9749 38.8536 38.5607 39.4393L39 39.8787V37.5C39 36.6716 39.6716 36 40.5 36Z" fill="url(#paint5_linear_537_36597)" />
            <defs>
                <linearGradient id="paint0_linear_537_36597" x1="22.5" y1="19.5" x2="36" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_537_36597" x1="32.0998" y1="55.5925" x2="31.1538" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint2_radial_537_36597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5 54) rotate(-127.875) scale(28.5044 32.9871)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint3_radial_537_36597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 49.5) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint4_radial_537_36597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 49.6) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <linearGradient id="paint5_linear_537_36597" x1="40.5" y1="36" x2="40.5" y2="66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A70F0" />
                    <stop offset="1" stopColor="#2D94DE" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function mostlyClearNightIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.9858 45.3627C34.7395 45.3627 47.5105 32.5918 47.5105 16.838C47.5105 13.5946 46.9692 10.4778 45.972 7.5727C45.4794 6.13736 46.7649 4.63671 48.1673 5.21673C59.5953 9.94347 67.636 21.2015 67.636 34.3375C67.636 51.7344 53.533 65.8375 36.136 65.8375C22.775 65.8375 11.3568 57.519 6.77811 45.7785C6.22675 44.3648 7.75309 43.1101 9.17804 43.6319C12.2362 44.7516 15.5396 45.3627 18.9858 45.3627Z" fill="url(#paint0_linear_59_27259)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="url(#paint1_linear_59_27259)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="url(#paint2_linear_59_27259)" />
            <path d="M0 19.125C0 14.7758 3.52576 11.25 7.875 11.25H10.5C16.299 11.25 21 15.951 21 21.75V27H7.875C3.52576 27 0 23.4742 0 19.125Z" fill="url(#paint3_radial_59_27259)" />
            <path d="M7 13.875C7 6.62626 12.8763 0.75 20.125 0.75C27.3737 0.75 33.25 6.62626 33.25 13.875C33.25 21.1237 27.3737 27 20.125 27C12.8763 27 7 21.1237 7 13.875Z" fill="url(#paint4_radial_59_27259)" />
            <circle cx="32.375" cy="17.375" r="9.625" fill="url(#paint5_radial_59_27259)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.97999 27.6H20.362L20.3934 27.6H32.8067C32.809 27.6 32.8114 27.6 32.8137 27.6C38.1971 27.5961 42.56 23.2309 42.56 17.8466C42.56 12.46 38.1933 8.09331 32.8067 8.09331C32.5928 8.09331 32.3806 8.1002 32.1701 8.11375C29.9437 3.88403 25.5053 1 20.3934 1C13.9504 1 8.57749 5.58135 7.35453 11.6641C3.23964 11.9831 0 15.4232 0 19.62C0 24.0272 3.57276 27.6 7.97999 27.6Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.97999 27.6H20.362L20.3934 27.6H32.8067C32.809 27.6 32.8114 27.6 32.8137 27.6C38.1971 27.5961 42.56 23.2309 42.56 17.8466C42.56 12.46 38.1933 8.09331 32.8067 8.09331C32.5928 8.09331 32.3806 8.1002 32.1701 8.11375C29.9437 3.88403 25.5053 1 20.3934 1C13.9504 1 8.57749 5.58135 7.35453 11.6641C3.23964 11.9831 0 15.4232 0 19.62C0 24.0272 3.57276 27.6 7.97999 27.6Z" fill="url(#paint6_linear_59_27259)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.97999 27.6H20.362L20.3934 27.6H32.8067C32.809 27.6 32.8114 27.6 32.8137 27.6C38.1971 27.5961 42.56 23.2309 42.56 17.8466C42.56 12.46 38.1933 8.09331 32.8067 8.09331C32.5928 8.09331 32.3806 8.1002 32.1701 8.11375C29.9437 3.88403 25.5053 1 20.3934 1C13.9504 1 8.57749 5.58135 7.35453 11.6641C3.23964 11.9831 0 15.4232 0 19.62C0 24.0272 3.57276 27.6 7.97999 27.6Z" fill="url(#paint7_linear_59_27259)" />
            <path d="M0 19.62C0 15.2128 3.57277 11.64 7.98 11.64H10.64C16.5163 11.64 21.28 16.4037 21.28 22.28V27.6H7.97999C3.57276 27.6 0 24.0272 0 19.62Z" fill="url(#paint8_radial_59_27259)" />
            <path d="M7.09326 14.3C7.09326 6.95462 13.0479 1 20.3933 1C27.7386 1 33.6933 6.95462 33.6933 14.3C33.6933 21.6454 27.7386 27.6 20.3933 27.6C13.0479 27.6 7.09326 21.6454 7.09326 14.3Z" fill="url(#paint9_radial_59_27259)" />
            <circle cx="32.8066" cy="17.8466" r="9.75333" fill="url(#paint10_radial_59_27259)" />
            <defs>
                <linearGradient id="paint0_linear_59_27259" x1="62.903" y1="63.2805" x2="65.4648" y2="2.96837" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EE7F18" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
                <linearGradient id="paint1_linear_59_27259" x1="13.125" y1="6.875" x2="21" y2="27" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C7DBFF" />
                    <stop offset="1" stopColor="#B5CBDF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_59_27259" x1="18.7249" y1="27.929" x2="18.1731" y2="0.749999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C3D0E7" />
                    <stop offset="0.257422" stopColor="#D0E0EE" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint3_radial_59_27259" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.375 27) rotate(-117.897) scale(16.831 19.4779)">
                    <stop offset="0.629385" stopColor="#B8CDDF" stopOpacity="0" />
                    <stop offset="1" stopColor="#A3B9CC" />
                </radialGradient>
                <radialGradient id="paint4_radial_59_27259" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.125 24.375) rotate(-90) scale(23.625)">
                    <stop offset="0.6875" stopColor="#B8CDDF" stopOpacity="0" />
                    <stop offset="1" stopColor="#A0BCD3" />
                </radialGradient>
                <radialGradient id="paint5_radial_59_27259" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.2417 24.4333) rotate(-56.3099) scale(18.5085)">
                    <stop offset="0.382649" stopColor="#B8CDDF" stopOpacity="0" />
                    <stop offset="1" stopColor="#A3B9CC" />
                </radialGradient>
                <linearGradient id="paint6_linear_59_27259" x1="13.3" y1="7.20667" x2="21.28" y2="27.6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint7_linear_59_27259" x1="18.9745" y1="28.5414" x2="18.4154" y2="0.999999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint8_radial_59_27259" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5267 27.6) rotate(-127.875) scale(16.8493 19.4991)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint9_radial_59_27259" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.3933 24.94) rotate(-90) scale(23.94)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint10_radial_59_27259" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.6048 24.999) rotate(-56.3099) scale(18.7553)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export function mostlyCloudyDayIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="51" cy="28.2814" r="18" fill="url(#paint0_linear_59_27029)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 68.7814H34.5H36H55.5C64.6127 68.7814 72 61.3941 72 52.2814C72 43.1687 64.6127 35.7814 55.5 35.7814C55.1382 35.7814 54.7791 35.793 54.4231 35.816C50.6566 28.6604 43.1481 23.7814 34.5 23.7814C23.6003 23.7814 14.5107 31.5318 12.4418 41.8222C5.48057 42.362 0 48.1816 0 55.2814C0 62.7372 6.04416 68.7814 13.5 68.7814Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 68.7814H34.5H36H55.5C64.6127 68.7814 72 61.3941 72 52.2814C72 43.1687 64.6127 35.7814 55.5 35.7814C55.1382 35.7814 54.7791 35.793 54.4231 35.816C50.6566 28.6604 43.1481 23.7814 34.5 23.7814C23.6003 23.7814 14.5107 31.5318 12.4418 41.8222C5.48057 42.362 0 48.1816 0 55.2814C0 62.7372 6.04416 68.7814 13.5 68.7814Z" fill="url(#paint1_linear_59_27029)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 68.7814H34.5H36H55.5C64.6127 68.7814 72 61.3941 72 52.2814C72 43.1687 64.6127 35.7814 55.5 35.7814C55.1382 35.7814 54.7791 35.793 54.4231 35.816C50.6566 28.6604 43.1481 23.7814 34.5 23.7814C23.6003 23.7814 14.5107 31.5318 12.4418 41.8222C5.48057 42.362 0 48.1816 0 55.2814C0 62.7372 6.04416 68.7814 13.5 68.7814Z" fill="url(#paint2_linear_59_27029)" />
            <path d="M0 55.2814C0 47.8255 6.04416 41.7814 13.5 41.7814H18C27.9411 41.7814 36 49.8402 36 59.7814V68.7814H13.5C6.04416 68.7814 0 62.7372 0 55.2814Z" fill="url(#paint3_radial_59_27029)" />
            <path d="M12 46.2814C12 33.855 22.0736 23.7814 34.5 23.7814C46.9264 23.7814 57 33.855 57 46.2814C57 58.7078 46.9264 68.7814 34.5 68.7814C22.0736 68.7814 12 58.7078 12 46.2814Z" fill="url(#paint4_radial_59_27029)" />
            <circle cx="55.5" cy="52.2814" r="16.5" fill="url(#paint5_radial_59_27029)" />
            <defs>
                <linearGradient id="paint0_linear_59_27029" x1="59.1" y1="36.0814" x2="29.7478" y2="0.256934" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF6D0F" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
                <linearGradient id="paint1_linear_59_27029" x1="22.5" y1="34.2814" x2="36" y2="68.7814" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_59_27029" x1="32.0998" y1="70.3739" x2="31.1538" y2="23.7814" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint3_radial_59_27029" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5 68.7814) rotate(-127.875) scale(28.5044 32.9871)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint4_radial_59_27029" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 64.2814) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint5_radial_59_27029" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 64.3814) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export function mostlyCloudyNightIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.23591 26.8351C18.6619 26.8351 27.1138 18.3528 27.1138 7.88937C27.1138 6.39548 26.9415 4.94198 26.6158 3.54778C26.2214 1.85943 27.7278 0.167238 29.2618 0.975319C35.9033 4.47393 40.4335 11.4621 40.4335 19.5122C40.4335 31.067 31.1 40.434 19.5865 40.434C11.4139 40.434 4.33961 35.7143 0.922322 28.8425C0.149838 27.2892 1.87839 25.8192 3.55912 26.2492C5.0547 26.6317 6.62164 26.8351 8.23591 26.8351Z" fill="url(#paint0_linear_59_27066)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 69H34.5H36H55.5C64.6127 69 72 61.6127 72 52.5C72 43.3873 64.6127 36 55.5 36C55.1382 36 54.7791 36.0116 54.4231 36.0346C50.6566 28.879 43.1481 24 34.5 24C23.6003 24 14.5107 31.7504 12.4418 42.0409C5.48057 42.5806 0 48.4003 0 55.5C0 62.9558 6.04416 69 13.5 69Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 69H34.5H36H55.5C64.6127 69 72 61.6127 72 52.5C72 43.3873 64.6127 36 55.5 36C55.1382 36 54.7791 36.0116 54.4231 36.0346C50.6566 28.879 43.1481 24 34.5 24C23.6003 24 14.5107 31.7504 12.4418 42.0409C5.48057 42.5806 0 48.4003 0 55.5C0 62.9558 6.04416 69 13.5 69Z" fill="url(#paint1_linear_59_27066)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 69H34.5H36H55.5C64.6127 69 72 61.6127 72 52.5C72 43.3873 64.6127 36 55.5 36C55.1382 36 54.7791 36.0116 54.4231 36.0346C50.6566 28.879 43.1481 24 34.5 24C23.6003 24 14.5107 31.7504 12.4418 42.0409C5.48057 42.5806 0 48.4003 0 55.5C0 62.9558 6.04416 69 13.5 69Z" fill="url(#paint2_linear_59_27066)" />
            <path d="M0 55.5C0 48.0442 6.04416 42 13.5 42H18C27.9411 42 36 50.0589 36 60V69H13.5C6.04416 69 0 62.9558 0 55.5Z" fill="url(#paint3_radial_59_27066)" />
            <path d="M12 46.5C12 34.0736 22.0736 24 34.5 24C46.9264 24 57 34.0736 57 46.5C57 58.9264 46.9264 69 34.5 69C22.0736 69 12 58.9264 12 46.5Z" fill="url(#paint4_radial_59_27066)" />
            <circle cx="55.5" cy="52.5" r="16.5" fill="url(#paint5_radial_59_27066)" />
            <defs>
                <linearGradient id="paint0_linear_59_27066" x1="37.3518" y1="38.7644" x2="39.0293" y2="-0.616951" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EE7F18" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
                <linearGradient id="paint1_linear_59_27066" x1="22.5" y1="34.5" x2="36" y2="69" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_59_27066" x1="32.0998" y1="70.5925" x2="31.1538" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint3_radial_59_27066" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5 69) rotate(-127.875) scale(28.5044 32.9871)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint4_radial_59_27066" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 64.5) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint5_radial_59_27066" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 64.6) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export function mostlySunnyDayIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36" cy="36" r="30" fill="url(#paint0_linear_2_21524)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 54H50.1176L50.1248 54L51 54L61.7498 54C61.8092 54 61.8678 53.9965 61.9255 53.9898C62.0744 53.9967 62.2242 54.0001 62.3748 54.0001C67.6905 54.0001 71.9998 49.6909 71.9998 44.3751C71.9998 39.0594 67.6905 34.7501 62.3748 34.7501C62.1637 34.7501 61.9543 34.7569 61.7466 34.7703C59.5495 30.5961 55.1695 27.75 50.1248 27.75C43.7666 27.75 38.4643 32.2711 37.2575 38.2739C33.1969 38.5888 30 41.9836 30 46.125C30 50.4742 33.5258 54 37.875 54Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 54H50.1176L50.1248 54L51 54L61.7498 54C61.8092 54 61.8678 53.9965 61.9255 53.9898C62.0744 53.9967 62.2242 54.0001 62.3748 54.0001C67.6905 54.0001 71.9998 49.6909 71.9998 44.3751C71.9998 39.0594 67.6905 34.7501 62.3748 34.7501C62.1637 34.7501 61.9543 34.7569 61.7466 34.7703C59.5495 30.5961 55.1695 27.75 50.1248 27.75C43.7666 27.75 38.4643 32.2711 37.2575 38.2739C33.1969 38.5888 30 41.9836 30 46.125C30 50.4742 33.5258 54 37.875 54Z" fill="url(#paint1_linear_2_21524)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 54H50.1176L50.1248 54L51 54L61.7498 54C61.8092 54 61.8678 53.9965 61.9255 53.9898C62.0744 53.9967 62.2242 54.0001 62.3748 54.0001C67.6905 54.0001 71.9998 49.6909 71.9998 44.3751C71.9998 39.0594 67.6905 34.7501 62.3748 34.7501C62.1637 34.7501 61.9543 34.7569 61.7466 34.7703C59.5495 30.5961 55.1695 27.75 50.1248 27.75C43.7666 27.75 38.4643 32.2711 37.2575 38.2739C33.1969 38.5888 30 41.9836 30 46.125C30 50.4742 33.5258 54 37.875 54Z" fill="url(#paint2_linear_2_21524)" />
            <path d="M30 46.125C30 41.7758 33.5258 38.25 37.875 38.25H40.5C46.299 38.25 51 42.951 51 48.75V54H37.875C33.5258 54 30 50.4742 30 46.125Z" fill="url(#paint3_radial_2_21524)" />
            <path d="M36.9998 40.875C36.9998 33.6263 42.876 27.75 50.1248 27.75C57.3735 27.75 63.2498 33.6263 63.2498 40.875C63.2498 48.1237 57.3735 54 50.1248 54C42.876 54 36.9998 48.1237 36.9998 40.875Z" fill="url(#paint4_radial_2_21524)" />
            <circle cx="62.3748" cy="44.3751" r="9.625" fill="url(#paint5_radial_2_21524)" />
            <defs>
                <linearGradient id="paint0_linear_2_21524" x1="49.5" y1="49" x2="0.579727" y2="-10.7074" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF6D0F" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
                <linearGradient id="paint1_linear_2_21524" x1="43.1249" y1="33.875" x2="51" y2="54.0001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_2_21524" x1="48.7248" y1="54.9291" x2="48.173" y2="27.75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint3_radial_2_21524" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.375 54) rotate(-127.875) scale(16.6276 19.2425)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint4_radial_2_21524" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.1248 51.375) rotate(-90) scale(23.625)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint5_radial_2_21524" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.2414 51.4335) rotate(-56.3099) scale(18.5085)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export function partlyCloudyNightIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.2209 45.8204C33.692 45.8204 46.2337 33.2337 46.2337 17.7071C46.2337 14.3733 45.6555 11.1751 44.5943 8.20784C44.1411 6.94075 45.2788 5.60971 46.528 6.11021C57.9371 10.6814 65.9985 21.873 65.9985 34.9542C65.9985 52.1003 52.1486 65.9999 35.0639 65.9999C21.8076 65.9999 10.4988 57.6317 6.09622 45.8718C5.62413 44.6108 6.98206 43.502 8.23955 43.9834C11.3402 45.1703 14.7049 45.8204 18.2209 45.8204Z" fill="url(#paint0_linear_59_26918)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z" fill="url(#paint1_linear_59_26918)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z" fill="url(#paint2_linear_59_26918)" />
            <path d="M30 55.125C30 50.7758 33.5258 47.25 37.875 47.25H40.5C46.299 47.25 51 51.951 51 57.75V63H37.875C33.5258 63 30 59.4742 30 55.125Z" fill="url(#paint3_radial_59_26918)" />
            <path d="M37 49.875C37 42.6263 42.8763 36.75 50.125 36.75C57.3737 36.75 63.25 42.6263 63.25 49.875C63.25 57.1237 57.3737 63 50.125 63C42.8763 63 37 57.1237 37 49.875Z" fill="url(#paint4_radial_59_26918)" />
            <circle cx="62.375" cy="53.375" r="9.625" fill="url(#paint5_radial_59_26918)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="url(#paint6_linear_59_26918)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z" fill="url(#paint7_linear_59_26918)" />
            <path d="M0 19.125C0 14.7758 3.52576 11.25 7.875 11.25H10.5C16.299 11.25 21 15.951 21 21.75V27H7.875C3.52576 27 0 23.4742 0 19.125Z" fill="url(#paint8_radial_59_26918)" />
            <path d="M7 13.875C7 6.62626 12.8763 0.75 20.125 0.75C27.3737 0.75 33.25 6.62626 33.25 13.875C33.25 21.1237 27.3737 27 20.125 27C12.8763 27 7 21.1237 7 13.875Z" fill="url(#paint9_radial_59_26918)" />
            <circle cx="32.375" cy="17.375" r="9.625" fill="url(#paint10_radial_59_26918)" />
            <defs>
                <linearGradient id="paint0_linear_59_26918" x1="61.3413" y1="63.4744" x2="63.8808" y2="3.90859" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EE7F18" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
                <linearGradient id="paint1_linear_59_26918" x1="43.125" y1="42.875" x2="51" y2="63" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_59_26918" x1="48.7249" y1="63.929" x2="48.1731" y2="36.75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint3_radial_59_26918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.375 63) rotate(-127.875) scale(16.6276 19.2425)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint4_radial_59_26918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.125 60.375) rotate(-90) scale(23.625)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint5_radial_59_26918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.2417 60.4333) rotate(-56.3099) scale(18.5085)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <linearGradient id="paint6_linear_59_26918" x1="13.125" y1="6.875" x2="21" y2="27" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint7_linear_59_26918" x1="18.7249" y1="27.929" x2="18.1731" y2="0.749999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint8_radial_59_26918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.375 27) rotate(-127.875) scale(16.6276 19.2425)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint9_radial_59_26918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.125 24.375) rotate(-90) scale(23.625)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint10_radial_59_26918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.2417 24.4333) rotate(-56.3099) scale(18.5085)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export function rainSnowIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint0_linear_537_34842)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint1_linear_537_34842)" />
            <path d="M0 40.5C0 33.0442 6.04416 27 13.5 27H18C27.9411 27 36 35.0589 36 45V54H13.5C6.04416 54 0 47.9558 0 40.5Z" fill="url(#paint2_radial_537_34842)" />
            <path d="M12 31.5C12 19.0736 22.0736 9 34.5 9C46.9264 9 57 19.0736 57 31.5C57 43.9264 46.9264 54 34.5 54C22.0736 54 12 43.9264 12 31.5Z" fill="url(#paint3_radial_537_34842)" />
            <circle cx="55.5" cy="37.5" r="16.5" fill="url(#paint4_radial_537_34842)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15 59.4409V43.3306C15 41.4554 17.2709 40.5204 18.5912 41.852L29.5983 52.9527C31.6711 54.6015 33 57.1456 33 60C33 64.9706 28.9706 69 24 69C19.0294 69 15 64.9706 15 60C15 59.8098 15.0059 59.621 15.0175 59.4337L15 59.4409Z" fill="#C4C4C4" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15 59.4409V43.3306C15 41.4554 17.2709 40.5204 18.5912 41.852L29.5983 52.9527C31.6711 54.6015 33 57.1456 33 60C33 64.9706 28.9706 69 24 69C19.0294 69 15 64.9706 15 60C15 59.8098 15.0059 59.621 15.0175 59.4337L15 59.4409Z" fill="url(#paint5_linear_537_34842)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M55.5 36C56.3284 36 57 36.6716 57 37.5V39.8787L57.4393 39.4393C58.0251 38.8536 58.9749 38.8536 59.5607 39.4393C60.1465 40.0251 60.1465 40.9749 59.5607 41.5607L57 44.1213V48.4021L60.7077 46.2615L61.6449 42.7639C61.8593 41.9637 62.6818 41.4888 63.482 41.7032C64.2822 41.9176 64.7571 42.7401 64.5426 43.5403L64.3819 44.1402L66.4417 42.951C67.1591 42.5367 68.0765 42.7826 68.4907 43.5C68.9049 44.2174 68.6591 45.1348 67.9417 45.549L65.8815 46.7385L66.482 46.8994C67.2822 47.1138 67.7571 47.9363 67.5426 48.7365C67.3282 49.5367 66.5057 50.0116 65.7055 49.7971L62.2073 48.8598L58.5 51.0002L62.2067 53.1402L65.705 52.2029C66.5052 51.9884 67.3277 52.4633 67.5421 53.2635C67.7565 54.0637 67.2816 54.8862 66.4814 55.1006L65.8809 55.2615L67.941 56.451C68.6585 56.8652 68.9043 57.7826 68.4901 58.5C68.0759 59.2174 67.1585 59.4633 66.441 59.049L64.3814 57.8599L64.5421 58.4597C64.7565 59.2599 64.2816 60.0824 63.4814 60.2968C62.6812 60.5112 61.8587 60.0363 61.6443 59.2361L60.7071 55.7386L57 53.5983V57.8787L59.5607 60.4393C60.1465 61.0251 60.1465 61.9749 59.5607 62.5607C58.9749 63.1464 58.0251 63.1464 57.4393 62.5607L57 62.1213V64.5C57 65.3284 56.3284 66 55.5 66C54.6716 66 54 65.3284 54 64.5V62.1213L53.5607 62.5607C52.9749 63.1464 52.0251 63.1464 51.4393 62.5607C50.8536 61.9749 50.8536 61.0251 51.4393 60.4393L54 57.8787V53.5983L50.293 55.7385L49.3557 59.2365C49.1413 60.0367 48.3188 60.5116 47.5186 60.2971C46.7184 60.0827 46.2435 59.2602 46.4579 58.46L46.6187 57.8598L44.559 59.049C43.8415 59.4633 42.9241 59.2174 42.5099 58.5C42.0957 57.7826 42.3415 56.8652 43.059 56.451L45.1187 55.2618L44.5186 55.101C43.7184 54.8866 43.2435 54.0641 43.4579 53.2639C43.6723 52.4637 44.4948 51.9888 45.295 52.2032L48.7929 53.1405L52.5 51.0002L48.7923 48.8595L45.2945 49.7968C44.4943 50.0112 43.6718 49.5363 43.4574 48.7361C43.243 47.9359 43.7178 47.1134 44.518 46.899L45.1181 46.7382L43.0584 45.549C42.3409 45.1348 42.0951 44.2174 42.5093 43.5C42.9235 42.7826 43.8409 42.5367 44.5584 42.951L46.6182 44.1402L46.4574 43.54C46.243 42.7398 46.7178 41.9173 47.518 41.7029C48.3182 41.4884 49.1407 41.9633 49.3551 42.7635L50.2924 46.2615L54 48.4021V44.1213L51.4393 41.5607C50.8536 40.9749 50.8536 40.0251 51.4393 39.4393C52.0251 38.8536 52.9749 38.8536 53.5607 39.4393L54 39.8787V37.5C54 36.6716 54.6716 36 55.5 36Z" fill="url(#paint6_linear_537_34842)" />
            <defs>
                <linearGradient id="paint0_linear_537_34842" x1="22.5" y1="19.5" x2="36" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_537_34842" x1="32.0998" y1="55.5925" x2="31.1538" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint2_radial_537_34842" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5 54) rotate(-127.875) scale(28.5044 32.9871)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint3_radial_537_34842" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 49.5) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint4_radial_537_34842" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 49.6) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <linearGradient id="paint5_linear_537_34842" x1="28.5008" y1="67.1682" x2="12.5695" y2="49.2848" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0066FF" />
                    <stop offset="1" stopColor="#65ACFF" />
                </linearGradient>
                <linearGradient id="paint6_linear_537_34842" x1="55.5" y1="36" x2="55.5" y2="66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A70F0" />
                    <stop offset="1" stopColor="#2D94DE" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function snowIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="#E7F1FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint0_linear_537_36598)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z" fill="url(#paint1_linear_537_36598)" />
            <path d="M0 40.5C0 33.0442 6.04416 27 13.5 27H18C27.9411 27 36 35.0589 36 45V54H13.5C6.04416 54 0 47.9558 0 40.5Z" fill="url(#paint2_radial_537_36598)" />
            <path d="M12 31.5C12 19.0736 22.0736 9 34.5 9C46.9264 9 57 19.0736 57 31.5C57 43.9264 46.9264 54 34.5 54C22.0736 54 12 43.9264 12 31.5Z" fill="url(#paint3_radial_537_36598)" />
            <circle cx="55.5" cy="37.5" r="16.5" fill="url(#paint4_radial_537_36598)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M55.5 36C56.3284 36 57 36.6716 57 37.5V39.8787L57.4393 39.4393C58.0251 38.8536 58.9749 38.8536 59.5607 39.4393C60.1465 40.0251 60.1465 40.9749 59.5607 41.5607L57 44.1213V48.4021L60.7077 46.2615L61.6449 42.7639C61.8593 41.9637 62.6818 41.4888 63.482 41.7032C64.2822 41.9176 64.7571 42.7401 64.5426 43.5403L64.3819 44.1402L66.4417 42.951C67.1591 42.5367 68.0765 42.7826 68.4907 43.5C68.9049 44.2174 68.6591 45.1348 67.9417 45.549L65.8815 46.7385L66.482 46.8994C67.2822 47.1138 67.7571 47.9363 67.5426 48.7365C67.3282 49.5367 66.5057 50.0116 65.7055 49.7971L62.2073 48.8598L58.5 51.0002L62.2067 53.1402L65.705 52.2029C66.5052 51.9884 67.3277 52.4633 67.5421 53.2635C67.7565 54.0637 67.2816 54.8862 66.4814 55.1006L65.8809 55.2615L67.941 56.451C68.6585 56.8652 68.9043 57.7826 68.4901 58.5C68.0759 59.2174 67.1585 59.4633 66.441 59.049L64.3814 57.8599L64.5421 58.4597C64.7565 59.2599 64.2816 60.0824 63.4814 60.2968C62.6812 60.5112 61.8587 60.0363 61.6443 59.2361L60.7071 55.7386L57 53.5983V57.8787L59.5607 60.4393C60.1465 61.0251 60.1465 61.9749 59.5607 62.5607C58.9749 63.1464 58.0251 63.1464 57.4393 62.5607L57 62.1213V64.5C57 65.3284 56.3284 66 55.5 66C54.6716 66 54 65.3284 54 64.5V62.1213L53.5607 62.5607C52.9749 63.1464 52.0251 63.1464 51.4393 62.5607C50.8536 61.9749 50.8536 61.0251 51.4393 60.4393L54 57.8787V53.5983L50.293 55.7385L49.3557 59.2365C49.1413 60.0367 48.3188 60.5116 47.5186 60.2971C46.7184 60.0827 46.2435 59.2602 46.4579 58.46L46.6187 57.8598L44.559 59.049C43.8415 59.4633 42.9241 59.2174 42.5099 58.5C42.0957 57.7826 42.3415 56.8652 43.059 56.451L45.1187 55.2618L44.5186 55.101C43.7184 54.8866 43.2435 54.0641 43.4579 53.2639C43.6723 52.4637 44.4948 51.9888 45.295 52.2032L48.7929 53.1405L52.5 51.0002L48.7923 48.8595L45.2945 49.7968C44.4943 50.0112 43.6718 49.5363 43.4574 48.7361C43.243 47.9359 43.7178 47.1134 44.518 46.899L45.1181 46.7382L43.0584 45.549C42.3409 45.1348 42.0951 44.2174 42.5093 43.5C42.9235 42.7826 43.8409 42.5367 44.5584 42.951L46.6182 44.1402L46.4574 43.54C46.243 42.7398 46.7178 41.9173 47.518 41.7029C48.3182 41.4884 49.1407 41.9633 49.3551 42.7635L50.2924 46.2615L54 48.4021V44.1213L51.4393 41.5607C50.8536 40.9749 50.8536 40.0251 51.4393 39.4393C52.0251 38.8536 52.9749 38.8536 53.5607 39.4393L54 39.8787V37.5C54 36.6716 54.6716 36 55.5 36Z" fill="url(#paint5_linear_537_36598)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.5 42C20.3284 42 21 42.6716 21 43.5V45.8787L21.4393 45.4393C22.0251 44.8536 22.9749 44.8536 23.5607 45.4393C24.1465 46.0251 24.1465 46.9749 23.5607 47.5607L21 50.1213V54.4021L24.7077 52.2615L25.6449 48.7639C25.8593 47.9637 26.6818 47.4888 27.482 47.7032C28.2822 47.9176 28.7571 48.7401 28.5426 49.5403L28.3819 50.1402L30.4417 48.951C31.1591 48.5367 32.0765 48.7826 32.4907 49.5C32.9049 50.2174 32.6591 51.1348 31.9417 51.549L29.8815 52.7385L30.482 52.8994C31.2822 53.1138 31.7571 53.9363 31.5426 54.7365C31.3282 55.5367 30.5057 56.0116 29.7055 55.7971L26.2073 54.8598L22.5 57.0002L26.2067 59.1402L29.705 58.2029C30.5052 57.9884 31.3277 58.4633 31.5421 59.2635C31.7565 60.0637 31.2816 60.8862 30.4814 61.1006L29.8809 61.2615L31.941 62.451C32.6585 62.8652 32.9043 63.7826 32.4901 64.5C32.0759 65.2174 31.1585 65.4633 30.441 65.049L28.3814 63.8599L28.5421 64.4597C28.7565 65.2599 28.2816 66.0824 27.4814 66.2968C26.6812 66.5112 25.8587 66.0363 25.6443 65.2361L24.7071 61.7386L21 59.5983V63.8787L23.5607 66.4393C24.1465 67.0251 24.1465 67.9749 23.5607 68.5607C22.9749 69.1464 22.0251 69.1464 21.4393 68.5607L21 68.1213V70.5C21 71.3284 20.3284 72 19.5 72C18.6716 72 18 71.3284 18 70.5V68.1213L17.5607 68.5607C16.9749 69.1464 16.0251 69.1464 15.4393 68.5607C14.8536 67.9749 14.8536 67.0251 15.4393 66.4393L18 63.8787V59.5983L14.293 61.7385L13.3557 65.2365C13.1413 66.0367 12.3188 66.5116 11.5186 66.2971C10.7184 66.0827 10.2435 65.2602 10.4579 64.46L10.6187 63.8598L8.55897 65.049C7.84153 65.4633 6.92415 65.2174 6.50993 64.5C6.09572 63.7826 6.34153 62.8652 7.05897 62.451L9.11869 61.2618L8.51858 61.101C7.71839 60.8866 7.24351 60.0641 7.45792 59.2639C7.67234 58.4637 8.49484 57.9888 9.29504 58.2032L12.7929 59.1405L16.5 57.0002L12.7923 54.8595L9.29448 55.7968C8.49429 56.0112 7.67178 55.5363 7.45737 54.7361C7.24295 53.9359 7.71783 53.1134 8.51803 52.899L9.11809 52.7382L7.05836 51.549C6.34092 51.1348 6.0951 50.2174 6.50932 49.5C6.92353 48.7826 7.84092 48.5367 8.55836 48.951L10.6182 50.1402L10.4574 49.54C10.243 48.7398 10.7178 47.9173 11.518 47.7029C12.3182 47.4884 13.1407 47.9633 13.3551 48.7635L14.2924 52.2615L18 54.4021V50.1213L15.4393 47.5607C14.8536 46.9749 14.8536 46.0251 15.4393 45.4393C16.0251 44.8536 16.9749 44.8536 17.5607 45.4393L18 45.8787V43.5C18 42.6716 18.6716 42 19.5 42Z" fill="url(#paint6_linear_537_36598)" />
            <defs>
                <linearGradient id="paint0_linear_537_36598" x1="22.5" y1="19.5" x2="36" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C6D8F5" />
                    <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_537_36598" x1="32.0998" y1="55.5925" x2="31.1538" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#547DDA" />
                    <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint2_radial_537_36598" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5 54) rotate(-127.875) scale(28.5044 32.9871)">
                    <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <radialGradient id="paint3_radial_537_36598" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 49.5) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#6B97E6" />
                </radialGradient>
                <radialGradient id="paint4_radial_537_36598" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 49.6) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
                    <stop offset="1" stopColor="#5582D3" />
                </radialGradient>
                <linearGradient id="paint5_linear_537_36598" x1="55.5" y1="36" x2="55.5" y2="66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A70F0" />
                    <stop offset="1" stopColor="#2D94DE" />
                </linearGradient>
                <linearGradient id="paint6_linear_537_36598" x1="19.5" y1="42" x2="19.5" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A70F0" />
                    <stop offset="1" stopColor="#2D94DE" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function clearDayIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36" cy="36" r="30" fill="url(#paint0_linear_2_21523)" />
            <defs>
                <linearGradient id="paint0_linear_2_21523" x1="49.5" y1="49" x2="0.579727" y2="-10.7074" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF6D0F" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function clearNightIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.4433 46.8025C33.4615 46.8025 47.2574 32.957 47.2574 15.8778C47.2574 12.4428 46.6994 9.13869 45.6693 6.05166C45.1205 4.40697 46.5938 2.69636 48.1904 3.37255C60.4169 8.5509 68.9982 20.6946 68.9982 34.8497C68.9982 53.7104 53.7633 69 34.9701 69C20.6204 69 8.34527 60.0858 3.34277 47.4743C2.70311 45.8617 4.44875 44.4257 6.08196 45.0107C9.32002 46.1708 12.8082 46.8025 16.4433 46.8025Z" fill="url(#paint0_linear_2_21555)" />
            <defs>
                <linearGradient id="paint0_linear_2_21555" x1="63.8836" y1="66.2269" x2="66.6719" y2="0.818446" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d6d6d6" />
                    <stop offset="0.56298" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffffff" stopOpacity="0.78" />
                </linearGradient>
            </defs>

           { /*<defs>
                <linearGradient id="paint0_linear_2_21555" x1="63.8836" y1="66.2269" x2="66.6719" y2="0.818446" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EE7F18" />
                    <stop offset="0.56298" stopColor="#EEB82E" />
                    <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
                </linearGradient>
            </defs>*/}
        </svg>
    )
}

export function fogIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 45H34.5H36H55.5C64.6127 45 72 37.6127 72 28.5C72 19.3873 64.6127 12 55.5 12C55.1382 12 54.7791 12.0116 54.4231 12.0346C50.6566 4.87901 43.1481 0 34.5 0C23.6003 0 14.5107 7.75043 12.4418 18.0409C5.48057 18.5806 0 24.4003 0 31.5C0 38.9558 6.04416 45 13.5 45Z" fill="#A3B2BD" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 45H34.5H36H55.5C64.6127 45 72 37.6127 72 28.5C72 19.3873 64.6127 12 55.5 12C55.1382 12 54.7791 12.0116 54.4231 12.0346C50.6566 4.87901 43.1481 0 34.5 0C23.6003 0 14.5107 7.75043 12.4418 18.0409C5.48057 18.5806 0 24.4003 0 31.5C0 38.9558 6.04416 45 13.5 45Z" fill="url(#paint0_linear_294_38801)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 45H34.5H36H55.5C64.6127 45 72 37.6127 72 28.5C72 19.3873 64.6127 12 55.5 12C55.1382 12 54.7791 12.0116 54.4231 12.0346C50.6566 4.87901 43.1481 0 34.5 0C23.6003 0 14.5107 7.75043 12.4418 18.0409C5.48057 18.5806 0 24.4003 0 31.5C0 38.9558 6.04416 45 13.5 45Z" fill="url(#paint1_linear_294_38801)" />
            <path d="M0 31.5C0 24.0442 6.04416 18 13.5 18H18C27.9411 18 36 26.0589 36 36V45H13.5C6.04416 45 0 38.9558 0 31.5V31.5Z" fill="url(#paint2_radial_294_38801)" />
            <path d="M12 22.5C12 10.0736 22.0736 0 34.5 0V0C46.9264 0 57 10.0736 57 22.5V22.5C57 34.9264 46.9264 45 34.5 45V45C22.0736 45 12 34.9264 12 22.5V22.5Z" fill="url(#paint3_radial_294_38801)" />
            <circle cx="55.5" cy="28.5" r="16.5" fill="url(#paint4_radial_294_38801)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 54C0 52.3431 1.34315 51 3 51H43.8C45.4569 51 46.8 52.3431 46.8 54C46.8 55.6569 45.4569 57 43.8 57H3C1.34314 57 0 55.6569 0 54ZM54 54C54 52.3431 55.3431 51 57 51H69C70.6569 51 72 52.3431 72 54C72 55.6569 70.6569 57 69 57H57C55.3431 57 54 55.6569 54 54ZM3 63C1.34315 63 0 64.3431 0 66C0 67.6569 1.34315 69 3 69H69C70.6569 69 72 67.6569 72 66C72 64.3431 70.6569 63 69 63H3Z" fill="url(#paint5_linear_294_38801)" />
            <defs>
                <linearGradient id="paint0_linear_294_38801" x1="22.5" y1="10.5" x2="36" y2="45" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AAB3BD" />
                    <stop offset="1" stopColor="#DBD0BF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_294_38801" x1="32.0998" y1="46.5925" x2="31.1538" y2="-1.98278e-06" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0208333" stopColor="#859CC4" />
                    <stop offset="0.328125" stopColor="#AAC2EA" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint2_radial_294_38801" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 40) rotate(-159.193) scale(26.7442 30.9501)">
                    <stop offset="0.548" stopColor="#658CD0" stopOpacity="0" />
                    <stop offset="1" stopColor="#A7A7A7" />
                </radialGradient>
                <radialGradient id="paint3_radial_294_38801" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5 40.5) rotate(-90) scale(40.5)">
                    <stop offset="0.598765" stopColor="#AAC2EA" stopOpacity="0" />
                    <stop offset="1" stopColor="#A7A7A7" />
                </radialGradient>
                <radialGradient id="paint4_radial_294_38801" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7 40.6) rotate(-56.3099) scale(31.7288)">
                    <stop offset="0.47771" stopColor="#658CD0" stopOpacity="0" />
                    <stop offset="1" stopColor="#A7A7A7" />
                </radialGradient>
                <linearGradient id="paint5_linear_294_38801" x1="43.0435" y1="69" x2="44.4725" y2="51.5313" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7F92B3" />
                    <stop offset="1" stopColor="#A8B4BD" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function windyIco(x,y) {
    return (
        <svg width={x} height={y} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M38.75 36C44.8251 36 49.75 31.0751 49.75 25C49.75 18.9249 44.8251 14 38.75 14C32.6749 14 27.75 18.9249 27.75 25C27.75 27.0036 28.2857 28.882 29.2216 30.5H5.75C4.23122 30.5 3 31.7312 3 33.25C3 34.7688 4.23122 36 5.75 36H38.75ZM66.25 38.75C66.25 43.3063 62.5564 47 58 47H54.7806C55.0846 47.8601 55.25 48.7858 55.25 49.75C55.25 54.3064 51.5564 58 47 58C42.4436 58 38.75 54.3064 38.75 49.75C38.75 48.7858 38.9154 47.8601 39.2194 47H5.75C4.23122 47 3 45.7688 3 44.25C3 42.7312 4.23122 41.5 5.75 41.5H47H50.2194C49.9154 40.6399 49.75 39.7142 49.75 38.75C49.75 34.1937 53.4436 30.5 58 30.5C62.5564 30.5 66.25 34.1937 66.25 38.75Z" fill="url(#paint0_linear_174_193873)" />
            <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M47 53.8656C44.727 53.8656 42.8844 52.023 42.8844 49.75C42.8844 48.6929 43.2829 47.7289 43.9379 47H39.2194C38.9154 47.8601 38.75 48.7858 38.75 49.75C38.75 54.3063 42.4437 58 47 58C51.5563 58 55.25 54.3063 55.25 49.75C55.25 48.7858 55.0846 47.8601 54.7806 47H50.0622C50.7172 47.7289 51.1157 48.6929 51.1157 49.75C51.1157 52.023 49.273 53.8656 47 53.8656Z" fill="url(#paint1_linear_174_193873)" />
            <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M66.25 38.75C66.25 39.7142 66.0846 40.6399 65.7806 41.5H61.0621C61.7171 40.7711 62.1157 39.8071 62.1157 38.75C62.1157 36.477 60.273 34.6343 58 34.6343C55.727 34.6343 53.8844 36.477 53.8844 38.75C53.8844 39.8071 54.283 40.7711 54.938 41.5H50.2194C49.9154 40.6399 49.75 39.7142 49.75 38.75C49.75 34.1937 53.4437 30.5 58 30.5C62.5563 30.5 66.25 34.1937 66.25 38.75Z" fill="url(#paint2_linear_174_193873)" />
            <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M49.75 25C49.75 27.0036 49.2143 28.882 48.2784 30.5H38.75C41.7876 30.5 44.25 28.0376 44.25 25C44.25 21.9624 41.7876 19.5 38.75 19.5C35.7124 19.5 33.25 21.9624 33.25 25C33.25 28.0376 35.7124 30.5 38.75 30.5H29.2216C28.2857 28.882 27.75 27.0036 27.75 25C27.75 18.9249 32.6749 14 38.75 14C44.8251 14 49.75 18.9249 49.75 25Z" fill="url(#paint3_linear_174_193873)" />
            <defs>
                <linearGradient id="paint0_linear_174_193873" x1="48.375" y1="58" x2="36" y2="22.25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#62839F" />
                    <stop offset="1" stopColor="#9CB5D6" />
                </linearGradient>
                <linearGradient id="paint1_linear_174_193873" x1="48.375" y1="48.375" x2="34.625" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint2_linear_174_193873" x1="58" y1="40.125" x2="49.75" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint3_linear_174_193873" x1="41.5" y1="29.125" x2="33.25" y2="14" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    )
}







export function rainDrop() {
    return (
        <svg width="80px" height="80px" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">


            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                <g id="Icon-Set-Filled" transform="translate(-316.000000, -829.000000)" fill="#000000">
                    <path d="M326,829 C322.917,832.731 316,845.478 316,851 C316,856.523 320.478,861 326,861 C331.522,861 336,856.523 336,851 C336,845.478 329.012,832.66 326,829" id="raindrop">

                    </path>
                </g>
            </g>
        </svg>
    )
}
    

export function windArrow(inc){
    return(
        <svg width="2.6vw" height="2.6vw" viewBox="0 0 10 14" style={{ transform: `rotate(${inc}deg)` }}>
            <path d="M5 0L9.66895 14L5 9.33105L0.331055 14L5 0Z" fill="white">
            </path>
        </svg>
    )
}


export function thermoIcon(a) {

    const hColor = tempToRgb(a);
    //const lColor = tempToRgb(0);

    return (
        <svg width="3vw" height="100%" viewBox="0 0 72 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/*<path d="M35.5 20.2778C35.7761 20.2778 36 20.054 36 19.7778C36 19.5017 35.7761 19.2778 35.5 19.2778V20.2778ZM34.5139 19.2778C34.2377 19.2778 34.0139 19.5017 34.0139 19.7778C34.0139 20.054 34.2377 20.2778 34.5139 20.2778V19.2778ZM32.5417 20.2778C32.8178 20.2778 33.0417 20.054 33.0417 19.7778C33.0417 19.5017 32.8178 19.2778 32.5417 19.2778V20.2778ZM30.5694 19.2778C30.2933 19.2778 30.0694 19.5017 30.0694 19.7778C30.0694 20.054 30.2933 20.2778 30.5694 20.2778V19.2778ZM28.5972 20.2778C28.8734 20.2778 29.0972 20.054 29.0972 19.7778C29.0972 19.5017 28.8734 19.2778 28.5972 19.2778V20.2778ZM26.625 19.2778C26.3489 19.2778 26.125 19.5017 26.125 19.7778C26.125 20.054 26.3489 20.2778 26.625 20.2778V19.2778ZM24.6528 20.2778C24.9289 20.2778 25.1528 20.054 25.1528 19.7778C25.1528 19.5017 24.9289 19.2778 24.6528 19.2778V20.2778ZM22.6806 19.2778C22.4044 19.2778 22.1806 19.5017 22.1806 19.7778C22.1806 20.054 22.4044 20.2778 22.6806 20.2778V19.2778ZM20.7083 20.2778C20.9845 20.2778 21.2083 20.054 21.2083 19.7778C21.2083 19.5017 20.9845 19.2778 20.7083 19.2778V20.2778ZM18.7361 19.2778C18.46 19.2778 18.2361 19.5017 18.2361 19.7778C18.2361 20.054 18.46 20.2778 18.7361 20.2778V19.2778ZM16.7639 20.2778C17.04 20.2778 17.2639 20.054 17.2639 19.7778C17.2639 19.5017 17.04 19.2778 16.7639 19.2778V20.2778ZM14.7917 19.2778C14.5155 19.2778 14.2917 19.5017 14.2917 19.7778C14.2917 20.054 14.5155 20.2778 14.7917 20.2778V19.2778ZM12.8194 20.2778C13.0956 20.2778 13.3194 20.054 13.3194 19.7778C13.3194 19.5017 13.0956 19.2778 12.8194 19.2778V20.2778ZM10.8472 19.2778C10.5711 19.2778 10.3472 19.5017 10.3472 19.7778C10.3472 20.054 10.5711 20.2778 10.8472 20.2778V19.2778ZM8.875 20.2778C9.15115 20.2778 9.375 20.054 9.375 19.7778C9.375 19.5017 9.15115 19.2778 8.875 19.2778V20.2778ZM6.90278 19.2778C6.62664 19.2778 6.40278 19.5017 6.40278 19.7778C6.40278 20.054 6.62664 20.2778 6.90278 20.2778V19.2778ZM4.93056 20.2778C5.2067 20.2778 5.43056 20.054 5.43056 19.7778C5.43056 19.5017 5.2067 19.2778 4.93056 19.2778V20.2778ZM2.95834 19.2778C2.6822 19.2778 2.45834 19.5017 2.45834 19.7778C2.45834 20.054 2.6822 20.2778 2.95834 20.2778V19.2778ZM0.986118 20.2778C1.26226 20.2778 1.48612 20.054 1.48612 19.7778C1.48612 19.5017 1.26226 19.2778 0.986118 19.2778V20.2778ZM35.5 19.2778H34.5139V20.2778H35.5V19.2778ZM32.5417 19.2778H30.5694V20.2778H32.5417V19.2778ZM28.5972 19.2778H26.625V20.2778H28.5972V19.2778ZM24.6528 19.2778H22.6806V20.2778H24.6528V19.2778ZM20.7083 19.2778H18.7361V20.2778H20.7083V19.2778ZM16.7639 19.2778H14.7917V20.2778H16.7639V19.2778ZM12.8194 19.2778H10.8472V20.2778H12.8194V19.2778ZM8.875 19.2778H6.90278V20.2778H8.875V19.2778ZM4.93056 19.2778H2.95834V20.2778H4.93056V19.2778ZM0.986118 19.2778H0V20.2778H0.986118V19.2778Z" fill="white" fillOpacity="0.3" />*/}
            <path d="M71 43.9446C71.2761 43.9446 71.5 43.7207 71.5 43.4446C71.5 43.1684 71.2761 42.9446 71 42.9446V43.9446ZM70.0139 42.9446C69.7377 42.9446 69.5139 43.1684 69.5139 43.4446C69.5139 43.7207 69.7377 43.9446 70.0139 43.9446V42.9446ZM68.0417 43.9446C68.3178 43.9446 68.5417 43.7207 68.5417 43.4446C68.5417 43.1684 68.3178 42.9446 68.0417 42.9446V43.9446ZM66.0694 42.9446C65.7933 42.9446 65.5694 43.1684 65.5694 43.4446C65.5694 43.7207 65.7933 43.9446 66.0694 43.9446V42.9446ZM64.0972 43.9446C64.3734 43.9446 64.5972 43.7207 64.5972 43.4446C64.5972 43.1684 64.3734 42.9446 64.0972 42.9446V43.9446ZM62.125 42.9446C61.8489 42.9446 61.625 43.1684 61.625 43.4446C61.625 43.7207 61.8489 43.9446 62.125 43.9446V42.9446ZM60.1528 43.9446C60.4289 43.9446 60.6528 43.7207 60.6528 43.4446C60.6528 43.1684 60.4289 42.9446 60.1528 42.9446V43.9446ZM58.1806 42.9446C57.9044 42.9446 57.6806 43.1684 57.6806 43.4446C57.6806 43.7207 57.9044 43.9446 58.1806 43.9446V42.9446ZM56.2083 43.9446C56.4845 43.9446 56.7083 43.7207 56.7083 43.4446C56.7083 43.1684 56.4845 42.9446 56.2083 42.9446V43.9446ZM54.2361 42.9446C53.96 42.9446 53.7361 43.1684 53.7361 43.4446C53.7361 43.7207 53.96 43.9446 54.2361 43.9446V42.9446ZM52.2639 43.9446C52.54 43.9446 52.7639 43.7207 52.7639 43.4446C52.7639 43.1684 52.54 42.9446 52.2639 42.9446V43.9446ZM50.2917 42.9446C50.0155 42.9446 49.7917 43.1684 49.7917 43.4446C49.7917 43.7207 50.0155 43.9446 50.2917 43.9446V42.9446ZM48.3194 43.9446C48.5956 43.9446 48.8194 43.7207 48.8194 43.4446C48.8194 43.1684 48.5956 42.9446 48.3194 42.9446V43.9446ZM46.3472 42.9446C46.0711 42.9446 45.8472 43.1684 45.8472 43.4446C45.8472 43.7207 46.0711 43.9446 46.3472 43.9446V42.9446ZM44.375 43.9446C44.6511 43.9446 44.875 43.7207 44.875 43.4446C44.875 43.1684 44.6511 42.9446 44.375 42.9446V43.9446ZM42.4028 42.9446C42.1266 42.9446 41.9028 43.1684 41.9028 43.4446C41.9028 43.7207 42.1266 43.9446 42.4028 43.9446V42.9446ZM40.4306 43.9446C40.7067 43.9446 40.9306 43.7207 40.9306 43.4446C40.9306 43.1684 40.7067 42.9446 40.4306 42.9446V43.9446ZM71 42.9446H70.0139V43.9446H71V42.9446ZM68.0417 42.9446H66.0694V43.9446H68.0417V42.9446ZM64.0972 42.9446H62.125V43.9446H64.0972V42.9446ZM60.1528 42.9446H58.1806V43.9446H60.1528V42.9446ZM56.2083 42.9446H54.2361V43.9446H56.2083V42.9446ZM52.2639 42.9446H50.2917V43.9446H52.2639V42.9446ZM48.3194 42.9446H46.3472V43.9446H48.3194V42.9446ZM44.375 42.9446H42.4028V43.9446H44.375V42.9446ZM40.4306 42.9446H39.4444V43.9446H40.4306V42.9446Z" fill="white" fillOpacity="0.3" />
            <path d="M71 109.028C71.2761 109.028 71.5 108.804 71.5 108.528C71.5 108.252 71.2761 108.028 71 108.028V109.028ZM70.0139 108.028C69.7377 108.028 69.5139 108.252 69.5139 108.528C69.5139 108.804 69.7377 109.028 70.0139 109.028V108.028ZM68.0417 109.028C68.3178 109.028 68.5417 108.804 68.5417 108.528C68.5417 108.252 68.3178 108.028 68.0417 108.028V109.028ZM66.0694 108.028C65.7933 108.028 65.5694 108.252 65.5694 108.528C65.5694 108.804 65.7933 109.028 66.0694 109.028V108.028ZM64.0972 109.028C64.3734 109.028 64.5972 108.804 64.5972 108.528C64.5972 108.252 64.3734 108.028 64.0972 108.028V109.028ZM62.125 108.028C61.8489 108.028 61.625 108.252 61.625 108.528C61.625 108.804 61.8489 109.028 62.125 109.028V108.028ZM60.1528 109.028C60.4289 109.028 60.6528 108.804 60.6528 108.528C60.6528 108.252 60.4289 108.028 60.1528 108.028V109.028ZM58.1806 108.028C57.9044 108.028 57.6806 108.252 57.6806 108.528C57.6806 108.804 57.9044 109.028 58.1806 109.028V108.028ZM56.2083 109.028C56.4845 109.028 56.7083 108.804 56.7083 108.528C56.7083 108.252 56.4845 108.028 56.2083 108.028V109.028ZM54.2361 108.028C53.96 108.028 53.7361 108.252 53.7361 108.528C53.7361 108.804 53.96 109.028 54.2361 109.028V108.028ZM52.2639 109.028C52.54 109.028 52.7639 108.804 52.7639 108.528C52.7639 108.252 52.54 108.028 52.2639 108.028V109.028ZM50.2917 108.028C50.0155 108.028 49.7917 108.252 49.7917 108.528C49.7917 108.804 50.0155 109.028 50.2917 109.028V108.028ZM48.3194 109.028C48.5956 109.028 48.8194 108.804 48.8194 108.528C48.8194 108.252 48.5956 108.028 48.3194 108.028V109.028ZM71 108.028H70.0139V109.028H71V108.028ZM68.0417 108.028H66.0694V109.028H68.0417V108.028ZM64.0972 108.028H62.125V109.028H64.0972V108.028ZM60.1528 108.028H58.1806V109.028H60.1528V108.028ZM56.2083 108.028H54.2361V109.028H56.2083V108.028ZM52.2639 108.028H50.2917V109.028H52.2639V108.028ZM48.3194 108.028H47.3333V109.028H48.3194V108.028Z" fill="white" fillOpacity="0.3" />
            {/*<path d="M25.6406 132.695C25.9168 132.695 26.1406 132.471 26.1406 132.195C26.1406 131.918 25.9168 131.695 25.6406 131.695V132.695ZM24.5723 131.695C24.2962 131.695 24.0723 131.918 24.0723 132.195C24.0723 132.471 24.2962 132.695 24.5723 132.695V131.695ZM22.4358 132.695C22.7119 132.695 22.9358 132.471 22.9358 132.195C22.9358 131.918 22.7119 131.695 22.4358 131.695V132.695ZM20.2992 131.695C20.023 131.695 19.7992 131.918 19.7992 132.195C19.7992 132.471 20.023 132.695 20.2992 132.695V131.695ZM18.1626 132.695C18.4388 132.695 18.6626 132.471 18.6626 132.195C18.6626 131.918 18.4388 131.695 18.1626 131.695V132.695ZM16.026 131.695C15.7499 131.695 15.526 131.918 15.526 132.195C15.526 132.471 15.7499 132.695 16.026 132.695V131.695ZM13.8895 132.695C14.1656 132.695 14.3895 132.471 14.3895 132.195C14.3895 131.918 14.1656 131.695 13.8895 131.695V132.695ZM11.7529 131.695C11.4768 131.695 11.2529 131.918 11.2529 132.195C11.2529 132.471 11.4768 132.695 11.7529 132.695V131.695ZM9.61632 132.695C9.89246 132.695 10.1163 132.471 10.1163 132.195C10.1163 131.918 9.89246 131.695 9.61632 131.695V132.695ZM7.47975 131.695C7.2036 131.695 6.97975 131.918 6.97975 132.195C6.97975 132.471 7.2036 132.695 7.47975 132.695V131.695ZM5.34317 132.695C5.61931 132.695 5.84317 132.471 5.84317 132.195C5.84317 131.918 5.61931 131.695 5.34317 131.695V132.695ZM3.2066 131.695C2.93046 131.695 2.7066 131.918 2.7066 132.195C2.7066 132.471 2.93046 132.695 3.2066 132.695V131.695ZM1.07002 132.695C1.34617 132.695 1.57002 132.471 1.57002 132.195C1.57002 131.918 1.34617 131.695 1.07002 131.695V132.695ZM25.6406 131.695H24.5723V132.695H25.6406V131.695ZM22.4358 131.695H20.2992V132.695H22.4358V131.695ZM18.1626 131.695H16.026V132.695H18.1626V131.695ZM13.8895 131.695H11.7529V132.695H13.8895V131.695ZM9.61632 131.695H7.47975V132.695H9.61632V131.695ZM5.34317 131.695H3.2066V132.695H5.34317V131.695ZM1.07002 131.695H0.00173569V132.695H1.07002V131.695Z" fill="white" fillOpacity="0.3" />*/}
            <g filter="url(#filter0_d_5101_78542)">
                <path fillRule="evenodd" clipRule="evenodd" d="M47.3331 156.217C50.9646 159.467 53.25 164.191 53.25 169.448C53.25 179.251 45.3031 187.198 35.5 187.198C25.6969 187.198 17.75 179.251 17.75 169.448C17.75 164.191 20.0352 159.468 23.6665 156.218L23.6665 15.8333C23.6665 9.29791 28.9644 3.99994 35.4998 3.99994C42.0352 3.99994 47.3331 9.29791 47.3331 15.8333L47.3331 156.217Z" fill="#C2DBF2" fillOpacity="0.2" />
                <path fillRule="evenodd" clipRule="evenodd" d="M41.4178 156.971C46.0819 159.187 49.3064 163.941 49.3064 169.448C49.3064 177.072 43.1255 183.253 35.5009 183.253C27.8763 183.253 21.6953 177.072 21.6953 169.448C21.6953 163.94 24.9202 159.186 29.5846 156.971L29.5845 15.8334C29.5845 12.5657 32.2334 9.91673 35.5011 9.91673C38.7688 9.91673 41.4177 12.5657 41.4177 15.8334L41.4178 156.971Z" fill="url(#paint0_linear_5101_78542)" />
            </g>
            <path d="M24.5469 32.5972H27.5269C27.8175 32.5972 28.053 32.8327 28.053 33.1233V34.9647C28.053 35.2553 27.8175 35.4908 27.5269 35.4908H24.5469V32.5972Z" fill="url(#paint1_linear_5101_78542)" fillOpacity="0.3" />
            <path d="M24.5469 59.1575H27.5269C27.8175 59.1575 28.053 59.393 28.053 59.6836V61.525C28.053 61.8156 27.8175 62.0511 27.5269 62.0511H24.5469V59.1575Z" fill="url(#paint2_linear_5101_78542)" fillOpacity="0.3" />
            <path d="M24.5469 85.7183H27.5269C27.8175 85.7183 28.053 85.9538 28.053 86.2444V88.0858C28.053 88.3764 27.8175 88.6119 27.5269 88.6119H24.5469V85.7183Z" fill="url(#paint3_linear_5101_78542)" fillOpacity="0.3" />
            <path d="M24.5469 112.279H27.5269C27.8175 112.279 28.053 112.514 28.053 112.805V114.646C28.053 114.937 27.8175 115.172 27.5269 115.172H24.5469V112.279Z" fill="url(#paint4_linear_5101_78542)" fillOpacity="0.3" />
            <path d="M24.5469 138.111H27.5269C27.8175 138.111 28.053 138.347 28.053 138.637V140.479C28.053 140.769 27.8175 141.005 27.5269 141.005H24.5469V138.111Z" fill="url(#paint5_linear_5101_78542)" fillOpacity="0.3" />
            <defs>
                <filter id="filter0_d_5101_78542" x="11.75" y="-0.00012207" width="45.5" height="193.198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5101_78542" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5101_78542" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_5101_78542" x1="22.001" y1="-0.500119" x2="60.001" y2="191.5" gradientUnits="userSpaceOnUse">
                    {/*<stop stopColor="#3CCBF4" />
                    <stop offset="1" stopColor="#148ADF" />*/}
                    <stop stopColor={hColor} />
                    <stop offset="1" stopColor="#148ADF" />
                </linearGradient>
                <linearGradient id="paint1_linear_5101_78542" x1="24.6651" y1="33.1687" x2="36.8497" y2="33.1687" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.232154" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint2_linear_5101_78542" x1="24.6651" y1="59.729" x2="36.8497" y2="59.729" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.232154" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint3_linear_5101_78542" x1="24.6651" y1="86.2898" x2="36.8497" y2="86.2898" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.232154" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint4_linear_5101_78542" x1="24.6651" y1="112.85" x2="36.8497" y2="112.85" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.232154" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint5_linear_5101_78542" x1="24.6651" y1="138.683" x2="36.8497" y2="138.683" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.232154" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>


    )
}



export function chevron() {
    return(
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.57107 11.8403C6.90803 12.2987 6 11.8271 6 11.0244V4.97557C6 4.17283 6.90803 3.70129 7.57106 4.1597L11.3555 6.77618C12.2133 7.3693 12.2134 8.63066 11.3555 9.22378L7.57107 11.8403Z" fill="#1A1A1A"></path></svg> 
    )    
}

export function chevronLeft() {
    return(
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: 'rotate(180deg)' }}><path d="M7.57107 11.8403C6.90803 12.2987 6 11.8271 6 11.0244V4.97557C6 4.17283 6.90803 3.70129 7.57106 4.1597L11.3555 6.77618C12.2133 7.3693 12.2134 8.63066 11.3555 9.22378L7.57107 11.8403Z" fill="#1A1A1A"></path></svg> 
    )    
}


export function testArrow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='16' viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <path d="M150 10.582v229.525L11.036 289.419 150 10.581z" fill="#90caf9" />
            <path d="M150 10.582v229.525l138.964 49.312L150 10.581z" fill="#2196f3" />
        </svg>
    )
}



export function sunriseIco(){
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="white" fillOpacity="0.3"
            ></circle>
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8H16Z" fill="#FEC80A">
            </path>
        </svg>
    )
}

export function sunsetIco(){
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" transform="rotate(-180 8 8)" fill="white" fillOpacity="0.3">
            </circle>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8L0 8Z" fill="#FEC80A">
            </path>
        </svg>
    )
}


export function searchIco(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
                <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search" fill="white"/>
            </g>
        </svg>
    )
}