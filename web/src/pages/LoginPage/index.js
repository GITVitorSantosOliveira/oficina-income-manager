import styles from './login.module.scss';
import {Form,InputGroup, Input, InputGroupText, Card, CardBody, CardTitle, Button, CardFooter} from 'reactstrap'
import {Key, User} from 'react-feather'
import { useContext, useState } from 'react';
import Logo from '../../components/Logo';
import AuthContext from '../../Contexts/AuthContext';
import {NotificationContainer} from 'react-notifications';
function LoginPage(){
  const [username,setUsername] = useState()
  const [current_passwod,setCurrent_Password] = useState()
  const {handleLogin} = useContext(AuthContext)

  async function handleSubmit(e){
    e.preventDefault();
    handleLogin(username,current_passwod)
  }

  return(
    <>
    <NotificationContainer/>

    <div className={styles.contentWrapper}>
    <div className={styles.wrapper}>
      <Logo/>
      <h1 className={styles.title}>Oficina Income Manager</h1>
      <p className={styles.description}>
      Oficina Income Manager consiste em um programa para fazer o gerenciamento de renda
      com base na relação entre ganho do serviço e gastos mensais.
      </p>
    </div>

     <Card className={styles.card} inverse>
       <CardBody className={styles.cardBody}>
       <Form onSubmit={handleSubmit} className={styles.formWrapper}>
       <CardTitle className={styles.cardTitle} tag="h2">LOGIN</CardTitle>
       
       <InputGroup className={styles.inputGroup}>
          <InputGroupText className={styles.inputGroupText}>
          <User className={styles.icon} />
          </InputGroupText>
          <Input className={styles.input} id="username" name="username" placeholder="Username" type="text"
          onChange={(e)=>setUsername(e.target.value)}
          ></Input>
        </InputGroup>

        <InputGroup className={styles.inputGroup}>
          <InputGroupText className={styles.inputGroupText}>
          <Key className={styles.icon} />
          </InputGroupText>
          <Input className={styles.input} id="current_passwod" name="current_passwod" placeholder="Senha" type="password"
          onChange={(e)=>setCurrent_Password(e.target.value)}
          ></Input>
        </InputGroup>

         
        <InputGroup className={styles.inputGroupButton}>
        <Button className={styles.buttonLogin}>Login</Button>
        </InputGroup>
     </Form>
       </CardBody>
        <CardFooter className={styles.cardFooter}>
        <p>Ainda não tem uma conta?</p>
        <a href='/register' className={styles.buttonAskRegister}>SignUp</a>
        </CardFooter>
     </Card>
     
    </div>
    </>
  )
}

export default LoginPage;