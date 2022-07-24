import { Post } from './Post'
import './global.css'
import { Header } from './components/Header/Header'
import styles from './App.module.css'
import { Sidebar } from './components/SIdebar/Sidebar'
function App() {

  return (

    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          <Post
            author="Bruno Mateus"
            content="Lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post
            author="Junior"
            content="Lorem ipsum dolor sit amet, consect"
          />
        </div>

      </div>
    </div>
  )
}

export default App
