import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/SIdebar/Sidebar'

import styles from './App.module.css'
import './global.css'

function App() {

  return (

    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          <Post />
          <Post />
        </div>

      </div>
    </div>
  )
}

export default App
