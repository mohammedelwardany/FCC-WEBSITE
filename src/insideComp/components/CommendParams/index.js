import Form from 'react-bootstrap/Form';
import { BsHandIndex } from 'react-icons/bs';
import data from "../../Service/OutsideRoot"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { pushData, SetParams } from '../../redux/DataSlice';
import store from '../../redux/store';


function CommendParams(){
  const {issetted} = useSelector(state => state.Data)
  const {DisplayParams} = useSelector(state => state.Data)
  const {textParamDisplay} = useSelector(state => state.Form)
//,listParamDisplay,CalenParamDisplay,listItems
const {listParamDisplay} = useSelector(state => state.Form)
const {CalenParamDisplay} = useSelector(state => state.Form)
const {listItems} = useSelector(state => state.Form)

 // const {DisplayParams} = useSelector(state => state.Data)

  // const {DisplayParams} = useSelector(state => state.Data)


  const [Repeat, setRepeat] = useState(0);
  const [Delay, setDelay] = useState(0);
  const [Param1, setParam1] = useState("");
  const [Param2, setParam2] = useState("");
  const [Param3, setParam3] = useState("");
  const dispatch = useDispatch()


  const SubmitCommend = (e)=>{
    e.preventDefault();
    
    if (issetted){
    dispatch(SetParams({Repeat,Delay,Param1,Param2,Param3})) ;
     dispatch(pushData())

    } 
    else{
      alert("please select commend");
    }

  }
  

    return(

        <div className={`d-${DisplayParams} flex-column justify-content-start align-items-start`}>
      <div className='h6 mx-3' style={{color:"#7B34C2",fontFamily:"iceberg"}}>Parameters</div>

            <div className="rounded d-flex flex-column align-items-center justify-content-end py-2" style={{height:"20rem",backgroundColor:"#7B34C2",width:"15rem"}}>
            <Form.Group className="d-flex align-items-start justify-content-between">
        <Form.Label className='mt-2 mx-2' style={{fontSize:12,fontFamily:"iceberg"}}>Repeat</Form.Label>
        <Form.Control className='text-center' style={{fontSize:12,width:"10rem"} } placeholder="repeat" onChange={(e)=> setRepeat(e.target.value)}/>
      </Form.Group>
      <Form.Group className="d-flex align-items-start justify-content-between mt-2">
        <Form.Label className='mt-2  ' style={{fontSize:12,fontFamily:"iceberg",marginRight:14,marginLeft:7}}>delay</Form.Label>
        <Form.Control className='text-center' style={{fontSize:12,width:"10rem"}} placeholder="delay" onChange={(e)=> setDelay(e.target.value)}/>
      </Form.Group>
            
            <Form.Group className={`d-${listParamDisplay} flex-row align-items-start justify-content-center mt-2`} >
        <Form.Label className='mt-2 mx-1' style={{fontSize:12,fontFamily:"iceberg"}} onClick={()=>{console.log("sssaaa",listItems)}}>param1</Form.Label>
        <Form.Select className='text-center' style={{fontSize:12,width:"10rem"}} onChange={(e)=> setParam1(e.target.value)} >
          {listItems.map((list,index)=>{
            return(

              <option key={index}>{list.description}</option>
            )
          })}
          
          {/* <option>1</option>
          <option>2</option>
          <option>3</option> */}

        </Form.Select>
      </Form.Group>
      <Form.Group className={`d-${textParamDisplay} flex-row align-items-start justify-content-center mt-2`}>
        <Form.Label className='mt-2 mx-1' style={{fontSize:12,fontFamily:"iceberg"}}>Param 2</Form.Label>
        <Form.Control className='text-center' style={{fontSize:12,width:"10rem"}} placeholder="param2" onChange={(e)=> setParam2(e.target.value)}/>
      </Form.Group>
      <Form.Group className={`d-${CalenParamDisplay} flex-row align-items-start justify-content-center mt-2`}>
        <Form.Label className='mt-2 mx-1' style={{fontSize:12,fontFamily:"iceberg"}}>Param 3</Form.Label>
        <Form.Control className='text-center' style={{fontSize:12,width:"10rem"}} placeholder="param2" onChange={(e)=> setParam3(e.target.value)}/>
      </Form.Group>
      <div style={{width:"10rem" ,height:"3px",backgroundColor:"#ffffff"}} className={"rounded mt-3"}></div>
      <button onClick={SubmitCommend} type="button" class="btn btn-light my-3 " style={{height:"35px",fontFamily:"iceberg",color:"#7B34C2",width:"12rem"}}>add Commend</button>
            </div>
        </div>
    )
}
export {CommendParams}