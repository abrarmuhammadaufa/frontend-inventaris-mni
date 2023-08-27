import React, { useState , useEffect } from 'react';
import HijriDate from 'hijri-date';
import './DateTime.css';

const monthNamesHijri = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
    'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
];

export const DateTime = () => {
    var [date,setDate] = useState(new Date());
    const [hijriDate, setHijriDate] = useState('');
    
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    useEffect(() => {
        const hijriDateObj = new HijriDate(date);
        const formattedHijriDate = `${hijriDateObj.getDate()} ${monthNamesHijri[hijriDateObj.getMonth()]} ${hijriDateObj.getFullYear()}`;
        setHijriDate(formattedHijriDate);
    }, [date]);

    const timeOptions = { hour12: false };
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <div>
            <div className="tanggal-waktu">
                <p className="mb-1">{date.toLocaleTimeString([], timeOptions)} WIB</p>
                <p className="mb-1">{date.toLocaleDateString('id-ID', dateOptions)}</p>
                {/* <p>{hijriDate}</p> */}
            </div>
            
        </div>
    )
}

export default DateTime;