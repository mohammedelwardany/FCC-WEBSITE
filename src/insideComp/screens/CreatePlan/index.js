import { CommendParams, CommendSellection, LeftContainer, RTable, MainHeader, RightContainer, SubHeader } from "../../components";
import im from "../../../assets/login.png"
import Button from 'react-bootstrap/Button';




function CreatePlanScreen() {

    return (

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
                                            save plan
                                        </Button>
                                        <Button className='btn shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))', color: "white", width: "8rem", fontFamily: "iceberg" }} type="submit">
                                            execute
                                        </Button>

                                    </div>
                                </div>
                                <div className="col-4"><CommendParams /></div>
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

export { CreatePlanScreen };