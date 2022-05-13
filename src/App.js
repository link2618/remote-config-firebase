import { useState, useEffect } from 'react';

import './App.css';
import remote_config from './Firebase/controller';

function App() {

  const [dataLanguage, setDataLanguage] = useState(null)
  const [dataCountry, setDataCountry] = useState(null)

  const getData = async () => {
    const testLanguage = await remote_config.get('testLanguage')
    const testcountry = await remote_config.get('testCountry')
    console.log('testLanguage', testLanguage)
    console.log('testcountry', testcountry)
    setDataLanguage(JSON.parse(testLanguage))
    setDataCountry(JSON.parse(testcountry))

    // const test = await remote_config.listAllVersions()
    // console.log('-->', test)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Prueba</p>
      {dataLanguage && (
        <>
          <p>{dataLanguage.text}</p>
        </>
      )}
      {dataCountry && (
        <>
          <p>{dataCountry.text}</p>
        </>
      )}
    </div>
  );
}

export default App;
