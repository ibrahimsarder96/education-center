import { getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const authInfo = {
    
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;