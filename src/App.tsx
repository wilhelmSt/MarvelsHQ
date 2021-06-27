import { ConfigProvider } from 'antd';
import pt_BR from 'antd/lib/locale/pt_BR';

import styles from './styles/App.module.css';

import Head from './components/Head';
import Comics from './components/Comics';


function App() {

  return (
      <ConfigProvider locale={pt_BR}>

        <div className={styles.App}>
          <Head />
          <Comics />
        </div>

      </ConfigProvider>

  );
}

export default App;
