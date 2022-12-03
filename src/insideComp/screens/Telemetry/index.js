
import { CommendParams, CommendSellection, LeftContainer, RTable, MainHeader, RightContainer, SubHeader, TeleTerminal } from "../../components";
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
                        <SubHeader />
                        <div className="d-flex">
                            <div className="col">
                                <CommendSellection />
                                <div className="d-flex justify-content-around my-1">

                                    <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "8rem", fontFamily: "iceberg" }} type="submit">
                                        save into file
                                    </Button>
                                    <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "8rem", fontFamily: "iceberg" }} type="submit">
                                        new plan
                                    </Button>

                                </div>
                            </div>
                            <div className="col-4"><TeleTerminal/></div>
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