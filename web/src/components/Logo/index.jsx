import image from '../../assets/images/logo.png';
import styles from './logo.module.scss';

function Logo({children}){
  return(
    <img className={styles.logo} src={image} alt='Logo imagem'>
    {children}
    </img>
  )
}

export default Logo;