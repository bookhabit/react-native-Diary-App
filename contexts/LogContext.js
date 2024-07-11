import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  console.log(JSON.stringify(logs, null, 2));

  const onCreate = ({title, body, date}) => {
    const log = {
      // id: uuidv4(),
      id: Math.random() * 10000,
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
