import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Carlos"
          content="Texto super legal"
          />
        <Post 
          author="Gil"
          content="Texto muito muito legal"
          />
        </main>
      </div>
    </div>
  )
}

