


import { CommendParams, CommendSellection, LeftContainer, RTable, MainHeader, RightContainer, SubHeader, TeleTerminal } from "../../components";
import im from "../../../assets/login.png"
import Button from 'react-bootstrap/Button';
import Frame from 'react-frame-component';
 import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { BsStopFill ,BsFillPlayFill } from "react-icons/bs";
import { ContainerSubsystem } from "../../components/commendsSubsystem";


function PlayBack(){

    const[planid,setplanid]=useState("1260")


    function getplanid() {
        let planids = prompt("Please enter plan id", planid);
        setplanid(planids);
      }
    return(
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
                                title={"results"}
                                />

                            </div>
                            <div className="col-5 pt-5">
                            
                            <Button className='btn shadow mt-2' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "12rem", fontFamily: "iceberg" }} type="submit">
                                        get all results
                                    </Button>
                                    <p></p>
                            <Button className='btn shadow mt-4' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "12rem", fontFamily: "iceberg" }} type="submit">
                                        get file
                                    </Button>
                                    <Button className='btn shadow mt-2' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "12rem", fontFamily: "iceberg" }} type="submit">
                                        get record
                                    </Button>
                                    <p></p>
                                    <Button className='btn shadow mt-4' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "12rem", fontFamily: "iceberg" }} type="submit">
                                        share
                                    </Button>


                            </div>
                            
                        </div>
                        <>

                    <div className="d-flex align-items-center justify-content-center mt-5">

      <Form.Label className="text-dark my-2 mx-1 ms-3" style={{fontSize:14,fontFamily:"iceberg",fontWeight:"bold"}}>03:01</Form.Label>
      <Form.Range className="mx-2 my-2" min={0} max={100} value={90} />
      <Button variant="danger" style={{height:25,width:25}}></Button>
      <BsFillPlayFill size={50} color={"black"}/>

                    </div>
    </>
                    </>}
            />
            <RightContainer
                insideCode={<>
                    <div className="p-3">
                        <RTable />
                    </div>
                </>}
            />
        </div>

    </>
    )
}
export {PlayBack}