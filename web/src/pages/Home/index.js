import styles from './home.module.scss'
import imageHome from '../../assets/images/income-manager-home.png'
import Logo from '../../components/Logo'
function Home(){
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.wrapper}>
      <Logo/>
      <h1 className={styles.title}>Oficina Income Manager</h1>
      <p className={styles.description}>
      Oficina Income Manager consiste em um programa para fazer o gerenciamento de renda
      com base na relação entre ganho do serviço e gastos mensais.
      </p>
      <a href="/services" className={styles.buttonHome}>COMEÇAR</a>
      </div>
      <div >
      <img src={imageHome} className={styles.image} alt='Imagem lado direito home'>
      </img>
      </div>
    </div>
  )
}

export default Home;