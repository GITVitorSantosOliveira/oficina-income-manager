import {api} from '../../../../services/api'
import { useState } from 'react';
import { Button, Input, InputGroup, Modal, ModalBody, ModalFooter } from 'reactstrap';
import styles from './customModal.module.scss'

function CustomModal(){
  const [modalOpen,setModalOpen] = useState(false)
  const toggle = ()=> setModalOpen(!modalOpen)

  //variables in modal
  const [client,setClient] = useState()
  const [clientCar,setClientCar] = useState()
  const [dateService,setDateService] = useState()
  const [valueService,setValueService] = useState()
  const [descService,setDescService] = useState()

 async function CreateService(){
    await api.post('/createservice',{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('oficina-income-manager')}`
      }
    },{
      client,car:clientCar,date:dateService,value:valueService,descservice:descService
    })
    .catch(err =>{return err.message})
    .then((res)=>{
      console.log(res)
    })
  }
  return(
      <>
      <Button onClick={()=>toggle()} className={styles.button}>
                Adicionar Serviço
      </Button>

      <Modal isOpen={modalOpen} toggle={toggle} className={styles.modal}>
        <ModalBody className={styles.modalBody}>
          <div>
          <InputGroup className={styles.inputGroup}>
            <span className={styles.clientTitle}>Cliente:</span>
            <Input value={client} onChange={(e)=>setClient(e.target.value)} className={styles.input} placeholder="Nome do cliente"/>
          </InputGroup>

          <InputGroup className={styles.inputGroup}>
            <span >Carro do Cliente:</span>
            <Input value={clientCar} onChange={(e)=>setClientCar(e.target.value)} className={styles.input} placeholder="Carro do cliente"/>
          </InputGroup>

          <InputGroup className={styles.inputGroup}>
            <span >Data do Serviço:</span>
            <Input value={dateService} onChange={(e)=>setDateService(e.target.value)} className={styles.input} placeholder="Data do Serviço EX: 00/00/00"/>
          </InputGroup>
          
          <InputGroup className={styles.inputGroup}>
            <span >Valor do Serviço:</span>
            <Input type="number" value={valueService} onChange={(e)=>setValueService(e.target.value)} className={styles.input} placeholder="Valor do Serviço"/>
          </InputGroup>

          <InputGroup className={styles.inputGroup}>
            <span >Descrição do Serviço:</span>
            <Input className={styles.textArea}  type='textarea' value={descService} onChange={(e)=>setDescService(e.target.value)}  placeholder="Descrição do serviço"/>
          </InputGroup>

          <ModalFooter className={styles.modalFooter}>
              <Button className={styles.buttonFooterCancel} onClick={()=>toggle()}>Cancelar</Button>
              <Button onClick={()=>CreateService()} className={styles.buttonFooterSend}>Enviar</Button>
          </ModalFooter>
          </div>
        </ModalBody>
      </Modal>

      
      </>
  )

}

export default CustomModal;