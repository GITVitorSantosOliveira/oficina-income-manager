import { useState } from 'react';
import { Button } from 'reactstrap';
import styles from './customButtonMonths.module.scss';

function CustomButtonMonths(){
  const [clicked, setClicked] = useState(false)
  const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro',
  'outubro','novembro','dezembro']
  const handleButton = () => {
    setClicked(true);
    months.forEach(elem => {
     return(
       <ul>
         <li>
        { elem}
         </li>
       </ul>
     )
    });
  }
  return(
    <Button className={styles.button} >
      {
        clicked ? handleButton : 'Janeiro'
      }
    </Button>
  )
}

export default CustomButtonMonths;