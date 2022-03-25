import { useState } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
function ButtonDescService({text}){
  const [dropdownOpen,setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(!dropdownOpen)

  return(
    <>
   <ButtonDropdown>
     {text}
   </ButtonDropdown>
    </>
  )
}

export default ButtonDescService;