import { Header } from './components/Header/Header';
import { Post } from './Post';
 
import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar/> 
          <main>
            <Post 
              author="Einon Moraes"
              content="O einon é muito legal"
            />
            <Post 
              author="Maikinho"
              content="Pão de queijo"
            />
          </main>
      </div>
    </div>
  )
}

export default App
