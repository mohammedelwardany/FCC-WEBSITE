
import logo from "../../../assets/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
require('typeface-iceberg')
function SubHeader({RightHandSide}){

    return(
        <div id="header" className="d-flex p-3 px-4 align-items-center justify-content-between">
            <div className="d-flex align-items-center justfy-content-center">
                    <img src={logo} alt={"logo"} className={"mx-2"}/>
                    <p style={{fontFamily:"iceberg",color:"black"}} className={"h2 pt-2"}>fcc <span style={{color:"#7b34c2"}}>system</span></p>
                    </div>
                    <div className="d-flex align-items-center justfy-content-center pt-3">
                            {RightHandSide}
                    </div>
                    </div>
    )
}

export {SubHeader}