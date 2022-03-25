import styles from './register.module.scss';
import {Form,InputGroup, Input, InputGroupText, Card, CardBody, CardTitle, Button, CardFooter} from 'reactstrap'
import {Key, Mail, User} from 'react-feather'
import RegisterPageController from '../../Controllers/RegisterPageController';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo'

function Register(){
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [current_password,setCurrent_Password] = useState()
  let navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    const result = await RegisterPageController.handle(username,email,current_password)
    if(result===false){navigate('/services')}
  }

  return(
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
       <CardTitle className={styles.cardTitle} tag="h2">CADASTRO</CardTitle>
       
       <InputGroup className={styles.inputGroup}>
          <User className={styles.icon}/>
          <Input className={styles.input} id="username" name="username" placeholder="Username" type="text"
          onChange={(e)=> setUsername(e.target.value)}
          ></Input>
        </InputGroup>

        <InputGroup className={styles.inputGroup}> 
          <InputGroupText className={styles.inputGroupText}>
          <Mail className={styles.icon} />
          </InputGroupText>
          <Input className={styles.input} id="email" name="email" placeholder="E-mail" type="email"
          onChange={(e)=> setEmail(e.target.value)}
          ></Input>
        </InputGroup>

        <InputGroup className={styles.inputGroup}>
          <InputGroupText className={styles.inputGroupText}>
          <Key className={styles.icon} />
          </InputGroupText>
          <Input className={styles.input} id="current-password" name="current-password" placeholder="Senha" type="password"
          onChange={(e)=> setCurrent_Password(e.target.value)}
          ></Input>
        </InputGroup>

         
        <InputGroup className={styles.inputGroupButton}>
        <Button className={styles.buttonSignUp}>Registrar-se</Button>
        </InputGroup>
     </Form>
       </CardBody>
        <CardFooter className={styles.cardFooter}>
        <p>Já possui uma conta?</p>
        <a href="/login">Login</a>
        </CardFooter>
     </Card>
    </div>
  )
}

export default Register;