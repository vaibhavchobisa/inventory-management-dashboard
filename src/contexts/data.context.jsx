import { createContext, useState, useEffect } from 'react';
import { faker } from "@faker-js/faker";
import { data } from '../assets/city-data';

export const DataContext = createContext({ appData: [] });

const DataProvider = ({ children }) => {
  const [appData, setAppData] = useState(data);

  useEffect(() => {
    const savedAppData = localStorage.getItem('appData');
    if (!savedAppData) {
      faker.seed(1);
      const generateDataArr = () => {
        let arr = [];
        for (let i = 0; i < 6; i++) {
          arr.push(
            faker.finance.amount({
              min: 300000,
              max: 870000,
              dec: 0,
              autoFormat: true,
            })
          );
        }
        return arr;
      };

      for (let i = 0; i < data.length; i++) {
        data[i]["stackId"] = faker.finance.accountNumber({ length: 12 });
        data[i]["consumption"] = generateDataArr();
        data[i]["aiForeHis"] = generateDataArr();
        data[i]["finalForeHis"] = generateDataArr();
        data[i]["aiForeFuture"] = generateDataArr();
        data[i]["finalForeFuture"] = generateDataArr();
        data[i]["prevQuarterFore"] = generateDataArr();
      }

      localStorage.setItem('appData', JSON.stringify(data));
      setAppData([...data]);
    } else {
      setAppData(JSON.parse(savedAppData));
    }

  }, [])

  let value = { appData };

  return (
    <DataContext.Provider value={value}>{children}</ DataContext.Provider>
  )
}

export default DataProvider;