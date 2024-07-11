import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([
    {
      id: Math.random() * 1000,
      title: 'Log 03',
      body: 'Log 03 설명',
      date: new Date().toISOString(),
    },
    {
      id: Math.random() * 1000,
      title: 'Log 04',
      body: 'Log 04 설명',
      date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    },
    {
      id: Math.random() * 1000,
      title: 'Log 05',
      body: 'Log 05 설명',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    },
  ]);

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
