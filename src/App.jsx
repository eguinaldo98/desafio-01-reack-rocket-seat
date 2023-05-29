import { Header } from './components/Header/Header'
import { TaskList } from './components/TaskList/TaskList'
import styles from './App.module.css'
import './Global.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskList/>
      </div>
    </div>
  )
}

export default App
