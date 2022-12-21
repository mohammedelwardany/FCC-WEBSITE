import { CommendParams, CommendSellection, LeftContainer, RTable, MainHeader, RightContainer, SubHeader, ContainerSubsystem } from "../../components";
import im from "../../../assets/login.png"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import data from "../../Service/OutsideRoot"
import { useDispatch, useSelector } from "react-redux";
import { pushparams } from "../../redux/FormSlice";


function CreatePlanScreen() {

    const[planid,setplanid]=useState("1260")
    const[DATA,SETDATA]=useState(data)
    const {DAATAA} = useSelector(state => state.Data)
    const dispatch = useDispatch();
    function getplanid() {
        let planids = prompt("Please enter plan id", planid);
    
      }

      const handleS = () =>{
 
        dispatch(pushparams());
        //  console.log(Subsystemsitems)
         
console.log(DAATAA);
        }

    return (


        <>

            <MainHeader />
            

            <div className='d-flex shadow'>
                <LeftContainer
                    insideCode={
                        <>
                        <div className="d-flex justify-content-between">
                            <SubHeader />
                            <div className="d-flex flex-column h6 text-dark mt-4 mx-5 px-4" style={{fontFamily:"iceberg"}}>
                                <p>plan id : {planid} <a href="#" onClick={getplanid}>change plan</a></p>
                                <p>date time : (12:49),12-1-2023</p>
                            </div>
                        </div>
                            
                            <div className="d-flex">
                                <div className="col-7">
                                    
                                    <ContainerSubsystem
                                    
                                    title={"create plan"}/>
                                    
                                </div>
                                <div className="col-4"><CommendParams /></div>
                            </div>
                            <div className="d-flex justify-content-around my-1 mt-5">

                                        <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "13rem", fontFamily: "iceberg" }} type="submit">
                                            save plan
                                        </Button>
                                        <Button onClick={handleS} className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "13rem", fontFamily: "iceberg" }} type="submit">
                                            execute
                                        </Button>

                                    </div>
                        </>}
                />
                <RightContainer
                    insideCode={<>
                        <div >
                            <RTable data={DAATAA}/>
                        </div>
                    </>}
                />
                
            </div>

        </>
    )

}

export { CreatePlanScreen };