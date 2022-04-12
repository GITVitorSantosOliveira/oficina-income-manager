import { useMemo } from "react"
import { useTable } from "react-table"
import COLUMNS from "./COLUMNS"
import styles from './basicTable.module.scss'
import ButtonDescService from "../ButtonDescService"
function BasicTable({dataTable}){
  const columns = useMemo(()=> COLUMNS,[])
  const tableInstace =  useTable({columns,data: dataTable})
  
  const {getTableBodyProps,getTableProps,headerGroups,prepareRow,rows} = tableInstace

 return (
   <>
   <table {...getTableProps()} className={styles.basicTable}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map((cell,idx) => {
                 if(idx === 4) {
                  return(
                    <td {...cell.getCellProps()}>
                      <ButtonDescService text={cell.value}/>
                    </td>
                  )
                 }
                 return (
                   
                   <td {...cell.getCellProps()}  >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   </>
  )
}

export default BasicTable;