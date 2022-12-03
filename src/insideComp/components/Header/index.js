

function MainHeader(){
    return(
        <div className="d-flex  py-4 align-items-center justify-content-between" style={{width:"55rem"}}>
            <div>
            <p style={{fontFamily:"iceberg",color:"#A059B9"}} className={"shadow-lg h1"}><span className="text-light" >FCC </span>SYSTEMS</p>
            </div>
            <div className="d-flex">
            <p style={{fontFamily:"iceberg"}} className={"h5 mx-2"}>join system</p>
            <p style={{fontFamily:"iceberg"}} className={"h5 mx-2"}>api docs</p>
            <p style={{fontFamily:"iceberg"}} className={"h5 mx-2"}>account</p>
            </div>
        </div>
    )
}
export {MainHeader}