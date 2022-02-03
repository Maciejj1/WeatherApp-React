import React from 'react'
import './App.scss';
import Search from './components/Search';
import DateAndTime from './components/DateAndTime';

function App() {

  return (
    <div className="App">
<div className='date-and-time'>
  <DateAndTime />
</div>
<div className='search'>
  <Search />
</div>
<div className='city'></div>
    </div>
  );
}


export default App;
