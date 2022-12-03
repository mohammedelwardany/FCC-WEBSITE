import Form from 'react-bootstrap/Form';
import { DateTimePicker } from "@progress/kendo-react-dateinputs";



function CommendParams(){



    return(

        <div className='d-flex flex-column justify-content-start align-items-start'>
      <div className='h6 mx-3' style={{color:"#7B34C2",fontFamily:"iceberg"}}>Parameters</div>

            <div className="rounded d-flex flex-column align-items-center justify-content-start py-2" style={{height:"17rem",backgroundColor:"#7B34C2",width:"9rem"}}>
            <Form.Group className="d-flex align-items-start justify-content-between">
        <Form.Label className='mt-2 mx-2' style={{fontSize:12,fontFamily:"iceberg"}}>Repeat</Form.Label>
        <Form.Control c style={{fontSize:12,width:"4rem"}} placeholder="repeat" />
      </Form.Group>
      <Form.Group className="d-flex align-items-start justify-content-between">
        <Form.Label className='mt-2  ' style={{fontSize:12,fontFamily:"iceberg",marginRight:14,marginLeft:7}}>delay</Form.Label>
        <Form.Control  style={{fontSize:12,width:"4rem"}} placeholder="delay" />
      </Form.Group>
            
            <Form.Group className="d-flex flex-column align-items-start justify-content-center" >
        <Form.Label className='mt-2' style={{fontSize:12,fontFamily:"iceberg"}}>param1</Form.Label>
        <Form.Select style={{fontSize:12,width:"6rem"}}>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="d-flex flex-column align-items-start justify-content-center">
        <Form.Label className='mt-2' style={{fontSize:12,fontFamily:"iceberg"}}>Param 2</Form.Label>
        <Form.Control style={{fontSize:12,width:"6rem"}} placeholder="param2" />
      </Form.Group>
      <button type="button" class="btn btn-light my-3 " style={{height:"35px",fontFamily:"iceberg",color:"#7B34C2"}}>add Commend</button>
            </div>
        </div>
    )
}
export {CommendParams}