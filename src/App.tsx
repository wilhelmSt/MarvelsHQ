import React from 'react';
import styles from './styles/App.module.css';

import Head from './components/Head';
import Content from './components/Content';

function App() {
  return (
    <div className={styles.App}>
      <Head />
      <Content />
    </div>
  );
}

export default App;
