import React from 'react';
import Signin from './components/Signin';
// import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Members from './components/Database';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold mt-20'>
        안디옥교회 전교인 현장전도 출석체크
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          {/* <Route path='/signup' element={<Signup />} /> */}
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
                <Members/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
