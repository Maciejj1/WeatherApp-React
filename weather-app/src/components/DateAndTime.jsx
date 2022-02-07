import React from 'react';
import Datetime from 'react-datetime'
import "./DateAndTime.scss"
var DateAndTime = () => {
    var showdate= new Date();
    var displaytodaysdate=showdate.getDate()+"/"+(showdate.getMonth()+1)+"/"+showdate.getFullYear();
    var dt=showdate.toDateString();
    var displaytime=showdate.getHours()+":"+showdate.getMinutes();
  return (
  
  <div className='date-and-time'>
<p value={displaytodaysdate} ></p>
{dt}<br />{displaytime}


</div>
)
};

export default DateAndTime;
