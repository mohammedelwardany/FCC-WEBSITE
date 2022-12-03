


import { CommendParams, CommendSellection, LeftContainer, RTable, MainHeader, RightContainer, SubHeader, TeleTerminal } from "../../components";
import im from "../../../assets/login.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsStopFill ,BsFillPlayFill } from "react-icons/bs";


function PlayBack(){


    return(
        <>

        <MainHeader />

        <div className='d-flex shadow'>
            <LeftContainer
                insideCode={
                    <>
                        <SubHeader />
                        <div className="d-flex">
                            <div className="col">
                                <CommendSellection />

                            </div>
                            <div className="col-4">
                            
                            <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "8rem", fontFamily: "iceberg" }} type="submit">
                                        get all results
                                    </Button>
                                    <p></p>
                            <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "8rem", fontFamily: "iceberg" }} type="submit">
                                        get file
                                    </Button>
                                    <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "8rem", fontFamily: "iceberg" }} type="submit">
                                        get record
                                    </Button>
                                    <p></p>
                                    <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "8rem", fontFamily: "iceberg" }} type="submit">
                                        share
                                    </Button>


                            </div>
                            
                        </div>
                        <>
                    <div className="d-flex align-items-center justify-content-center">

      <Form.Label className="text-dark my-2 mx-1 ms-3" style={{fontSize:14,fontFamily:"iceberg",fontWeight:"bold"}}>03:01</Form.Label>
      <Form.Range className="mx-2 my-2"  />
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