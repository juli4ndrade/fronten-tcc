import styles from '../styles/home.module.css'

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Usuários</h1>

      <div>
        <div></div>
        <button>+ Adicionar</button>
      </div>
    </div>
  )
}