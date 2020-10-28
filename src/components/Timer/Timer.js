import React, { useState, useEffect } from 'react';
import classes from './Timer.module.css'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    const date = new Date(0);
    date.setSeconds(seconds); 
    const timeString = date.toISOString().substr(14 , 5);

    return (
        <div className={classes.timer}>{timeString}</div>
    );
};

export default Timer;