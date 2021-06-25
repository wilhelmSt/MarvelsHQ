import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

import styles from './styles/App.module.css';

import Head from './components/Head';
import Comics from './components/Comics';

const publicKey = '89b8d1890bded8e9d37b19288a4ea4fe';
const privateKey = 'c5f280843fdbfcd34ad8031aae72bb6a018feaa1';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

function App() {

  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then(response => console.log(response))
    .catch(erro => console.log(erro));
  }, [])

  return (
    <div className={styles.App}>
      <Head />
      <Comics />
    </div>
  );
}

export default App;
