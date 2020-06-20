import React from 'react';

import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-list/user-list.component';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
      <UserProfile
        name='Halil Azy'
        email='halloo@gmail.com'
        dataSource='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}

export default App;

//if datasources set in export commands we should use the code below,
//but this approach above and sending datasource from here, not declaring in export is
//far far beyond better!!!
/*
return (
  <div className='App'>
    <UserList />
    <UserProfile
      name='Halil Azy'
      email='halloo@gmail.com'
    />
  </div>
);
*/