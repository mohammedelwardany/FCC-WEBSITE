import { LeftContainer, LoginForm, MainHeader, RightContainer, SubHeader } from "../../components";
import im from "../../../assets/login.png"




function SigninScreen() {

    return (

        <>

            <MainHeader />

            <div className='d-flex shadow'>
                <LeftContainer
                    insideCode={
                        <>
                            <SubHeader
                                RightHandSide={

                                    <>
                                        <p style={{ fontFamily: "iceberg", color: "#7b34c2" }} className="h6 mx-1">login</p>
                                        <p style={{ fontFamily: "iceberg", color: "black" }} className="h6 mx-1">signup</p>
                                    </>

                                }
                            />
                            <div className='px-4 my-2'>
                                <div className='d-flex flex-column align-items-start px-4'>
                                    <p className='h5' style={{ fontFamily: "iceberg", color: "#000" }}>SIGN IN</p>
                                    <p className='h6' style={{ fontFamily: "iceberg", color: "#000" }}>sign in to contiune to our system</p>
                                </div>
                                <LoginForm />
                            </div>
                        </>}
                />
                <RightContainer
                    insideCode={<>
                        <div className="p-3">
                            <img src={im} className="img-fluid" />
                        </div>
                    </>}
                />
            </div>

        </>
    )

}

export { SigninScreen };