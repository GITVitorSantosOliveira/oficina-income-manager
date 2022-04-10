import { useEffect, useState } from 'react';
import { Col, Container, Navbar, NavbarBrand, Row} from 'reactstrap';
import BasicTable from './Components/BasicTable';
import styles from './services.module.scss'
import CustomModal from './Components/CustomModal';
import Logo from '../../components/Logo';
import HorizontalScrollMenuItems from './Components/HorizontalScroll-menu-items';
import { api } from '../../services/api';

function ServicesPage(){
  const [dataTable, setDataTable] = useState([])
  
  useEffect(() =>{
    
      async function getAllServices(){
        try {
          await api.get('/getallservices',{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('oficina-income-manager')}`
            }
          }).then((res) => {
            let dataColumn = res?.data.map((x)=>{
              return({
                ...x,
                client: x.client,
                car:x.car,
                date: x.date,
                value: x.value,
                descservice: x.descservice
              })
            })
            setDataTable(dataColumn)
          })
        } catch (error) {
          console.log(error.message)
        }
      }
      getAllServices();
    
  },[])
  
  return (
    <>
    <Container className={styles.body}>
      <Row className={styles.navbarWrapper}>
        <Col>
          <Navbar>
            <NavbarBrand>
              <Logo/>
            </NavbarBrand>
          </Navbar>
        </Col>
        {/* <Col>
            <Nav className={styles.navWrapper} >
              <NavItem className={styles.navItem} > 
                <NavLink
                  active
                  href="#"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                <NavLink href="#">
                Register
                </NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                <NavLink
                  disabled
                  href="#"
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                <NavLink
                  disabled
                  href="#"
                >
                  Serviços
                </NavLink>
              </NavItem>
          </Nav>
        </Col> */}

      </Row>
      <HorizontalScrollMenuItems/>
        <Container>
        <Row className={styles.containerTable}>
          <Row className={styles.initContent}>
            <Col className={styles.inputSearchContainer}>
                <input placeholder='Search' className={styles.inputSearch}/>
            </Col>
            <Col className={styles.buttonModalContainer}>
              <CustomModal/>
            </Col>
          </Row>

          <Row>
          <BasicTable dataTable={dataTable}/>
        </Row>
        </Row>
        </Container>
        
    </Container>
    </>
  )
}

export default ServicesPage;