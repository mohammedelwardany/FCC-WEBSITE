
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
// import data from ".././../Service/OutsideRoot"
function RTable({data}){

  //const {DAATAA} = useSelector(state => state.Data)

  const [isExecuted, setisExecuted] = useState(false)
    return(
<div >
        <Table responsive="sm" className='h6 text-light table table-hover' style={{fontSize:14,fontFamily:"iceberg"}}>
        <thead>
          <tr>
            <th>n</th>
            <th >Subsystem</th>
            <th>commend</th>
            <th>repeat</th>
            <th>delay</th>
            <th>param1</th>
            <th>param2</th>
            <th>param3</th>
          </tr>
        </thead>
        <tbody >
          {data.map(datas=>{
            
            return(
             
  <tr className={isExecuted?'overflow-auto bg-success':"overflow-auto"} key={datas.arrange}>
            <td>{datas.arrange}</td>
            <td>{datas.subsysemName}</td>
            <td>{datas.commend}</td>
            <td>{datas.repeat}</td>
            <td>{datas.delay}</td>
            <td>{datas.param1}</td>
            <td>{datas.param2}</td>
            <td>{datas.param3}</td>
          </tr>
    

            )
          })}

    
        </tbody>
      </Table>
      </div>
    )
}
export {RTable}