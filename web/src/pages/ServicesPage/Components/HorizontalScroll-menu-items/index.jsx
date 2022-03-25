import { ButtonDropdown, Col, InputGroup, InputGroupText, Row } from "reactstrap";
import CustomButtonMonths from "../CustomButtonMonths";
import styles from "./horizontalScroll-menu-items.module.scss";
function HorizontalScrollMenuItems(){
  return(
    <Row className={styles.ContainerMenuItems}>
        <Col  className={styles.ContainerItems}>
            <h3>Número de Serviços </h3>
            <div>
              <CustomButtonMonths/>
              <span className={styles.valueText}>20</span>
            </div>
        </Col>

        <Col className={styles.ContainerItems}>
            <h3>Dinheiro Ganho  </h3>
            <div >
              <CustomButtonMonths/>
              <span className={styles.valueText}>R$ 1000,00</span>
            </div>
        </Col>

        <Col className={styles.ContainerItems}>
            <h3>Dinheiro Gasto </h3>
            <div >
              <CustomButtonMonths/>
              <span className={styles.valueText}>R$ 1000,00</span>
            </div>
        </Col>

        <Col className={styles.ContainerItems}>
            <h3>Total </h3>
            <div >
              <CustomButtonMonths/>
              <span className={styles.valueText}>R$ 1000,00</span>
            </div>
        </Col>

        {/* <Col>s
        <h3>Dinheiro Ganho </h3>
        <InputGroup className={styles.inputGroup}>
            <InputGroupText>
            <ButtonDropdown className={styles.buttonDropdown}>Janeiro</ButtonDropdown>
            </InputGroupText>
            <div className={styles.valueField}>
              <span className={styles.valueText}>R$ 1000,00</span>
            </div>
          </InputGroup>
        </Col>

        <Col>
        <h3>Dinheiro Gasto </h3>
        <InputGroup className={styles.inputGroup}>
            <InputGroupText>
            <ButtonDropdown className={styles.buttonDropdown}>Janeiro</ButtonDropdown>
            </InputGroupText>
            <div className={styles.valueField}>
              <span className={styles.valueText}>R$ 1000,00</span>
            </div>
          </InputGroup>
        </Col>

        <Col>
        <h3>Total </h3>
        <InputGroup className={styles.inputGroup}>
            <InputGroupText>
            <ButtonDropdown className={styles.buttonDropdown}>Janeiro</ButtonDropdown>
            </InputGroupText>
            <div className={styles.valueField}>
              <span className={styles.valueText}>R$ 1000,00</span>
            </div>
          </InputGroup>
        </Col> */}
      </Row>
  )
}

export default HorizontalScrollMenuItems;