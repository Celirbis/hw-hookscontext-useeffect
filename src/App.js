import './App.css';
import React, { useEffect, useState } from 'react';
import List from './Components/List';
import Details from './Components/Details';

function App() {

  const [userInfo, setUserInfo] = useState({});
  const [optDetails, setOptDetails] = useState(null);

  useEffect(() => {
    if (userInfo.id) {
      setOptDetails(<Details key={userInfo.id} user={userInfo} />);
    }
  }, [userInfo]);

  return (
    <div className="App">
      <List setUserInfo={setUserInfo} />
      {optDetails}
    </div>
  );
}

export default App;
