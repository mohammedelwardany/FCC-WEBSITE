
import { CommendParams, CommendSellection, LeftContainer, RTable, MainHeader, RightContainer, SubHeader, TeleTerminal, ContainerSubsystem } from "../../components";
import im from "../../../assets/login.png"
import Button from 'react-bootstrap/Button';




function Telemetry(){
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
                                <p>plan id : 1260</p>
                                <p>date time : (12:49),12-1-2023</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col-7">
                                <ContainerSubsystem
                                title={"results"}
                                />
                    
                            </div>
                            <div className="col-4"><TeleTerminal/></div>
                        </div>
                        <div className="d-flex justify-content-around my-1 mt-5">

<Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "12rem", fontFamily: "iceberg" }} type="submit">
    save to file
</Button>
<Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "12rem", fontFamily: "iceberg" }} type="submit">
    new plan
</Button>
<Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "12rem", fontFamily: "iceberg" }} type="submit">
    start recording
</Button>



</div>
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
export {Telemetry}