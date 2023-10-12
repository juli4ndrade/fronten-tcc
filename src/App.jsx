import { Router } from "./Router";
import { Header } from "./components/Header";
import styles from './styles/app.module.css'

export function App() {
  return (
    <div className={styles.appContainer}>
      <Header text="asd" />
      <Router />
    </div>
  )
}
