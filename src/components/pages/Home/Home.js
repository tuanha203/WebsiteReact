import React from 'react';
import StatusCard from '../../StatusCard.js';
import {useSelector} from 'react-redux';

import './Home.css';
function Home(props) {

  const users = useSelector(state => state.users);
  return (
    <div className="Home">
      <div className="col-1"></div>
      <div className="col-2">
        {users.map((user, index) => {
          return <StatusCard key={user.id} userState={{user}}  />;
        })}
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Home;
