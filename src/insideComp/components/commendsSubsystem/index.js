
import Subsystems from "../../Service/Root"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { color } from "@mui/system";
import Frame from 'react-frame-component';
import { useDispatch, useSelector } from "react-redux";
import { setCommend, SetCommend, setSubSystem } from "../../redux/DataSlice";
import { REset, setCommendId, setSubsystemId } from "../../redux/FormSlice";

var subid=1;

function CommendButton() {
    // const [defaultBtn] = Subsystems.some(btn => btn.isDefault === true);
    const [defaultBtn, setdefaultBtn] = useState()
    const [activeButtonId, setActiveButtonId] = useState(defaultBtn ? defaultBtn.id : null);
    const {subsystemId} = useSelector(state => state.Form)

    // const [Commend, setCommend] = useState("")
    const dispatch = useDispatch();
    
    var issetted = false;
    useEffect(() => {
        // Update the document title using the browser API
        setdefaultBtn(1);
        
            
        
    });





    return (
        

                    Subsystems[subsystemId].commends.map((commend) => {

                        const handleButtonClick = async event => {
                            setActiveButtonId(Number(event.target.value));   
                            // const commendid=Number(event.target.value)-1
                            const Commend=commend.name
                            issetted = true
                            const commendids=commend.id
                         //   console.log(commendid);
                       //     console.log(Commend);
                      //      console.log(issetted);
                      dispatch(REset())
                            dispatch(SetCommend({Commend,issetted}));
                           
                            dispatch(setCommendId({commendids}))
                            
                        };


                    return (
                        

                        <Button
                            key={commend.id}
                            variant="mt-3 mr-3 primary rounded text-dark"
                            className={commend.id === activeButtonId ? 'btn' : 'text-light'}// Compare the button's id to what we have in state to determine which should be active
                            // style={subsystem.id === activeButtonId ? {} : {}}// Compare the button's id to what we have in state to determine which should be active
                            size="sm"
                            value={commend.id} // Set the value of the button as the button's id
                            onClick={handleButtonClick}
                            style={commend.id === activeButtonId ? {width:"12rem" ,borderColor:"#7b34c2",borderWidth:1.5} : {width:"12rem"}}
                        >
                            {commend.name}
                        </Button>
                      
                    )
                })
              


   

    )
}

var updateCMD = [];

function SubsystemButton() {
    // const [defaultBtn] = Subsystems.some(btn => btn.isDefault === true);
    const [defaultBtn, setdefaultBtn] = useState()
    const [activeButtonId, setActiveButtonId] = useState(defaultBtn ? defaultBtn.id : null);
    const dispatch = useDispatch();

    useEffect(() => {
        // Update the document title using the browser API
        setdefaultBtn(1);
        
        
    });




    return (
        Subsystems.map(subsystem => {
          
            const handleButtonClick = event => {
                setActiveButtonId(Number(event.target.value));
              //  console.log(subsystem.id);
                const Subsystem=subsystem.name;
               // console.log(Subsystem);
               const subsystemids = subsystem.id
                dispatch(setSubSystem({Subsystem}));
                dispatch(setSubsystemId({subsystemids}))
                
                
            };
            return (
                <Button
                    key={subsystem.id}
                    variant="mt-2 mr-3 rounded"
                    className={subsystem.id === activeButtonId ? 'btn btn-outline-light' : 'text-light'}// Compare the button's id to what we have in state to determine which should be active
                    // style={subsystem.id === activeButtonId ? {} : {}}// Compare the button's id to what we have in state to determine which should be active
                    size="sm"
                    value={subsystem.id} // Set the value of the button as the button's id
                    onClick={handleButtonClick}
                    style={{width:"6rem"}}
                >
                    {subsystem.name}
                </Button>

            )
        })

    )
}

function ContainerSubsystem({title}) {



    return (
<div className="d-flex flex-column justify-content-start align-items-start">
<div className='h6 mx-3 ms-4' style={{color:"#7B34C2",fontFamily:"iceberg"}}>{title}</div>

        <div className="d-flex flex-row mx-4 rounded " style={{ backgroundColor: "#ffffff" ,width:"80%",height:"20rem"}}>
            
            <div className="d-flex flex-column p-2  rounded " style={{ width: "8rem", fontFamily: "iceberg", backgroundColor: "#7b34c2" }}>
            <div className='h6 mx-3' style={{color:"#ffffff",fontFamily:"iceberg"}}>subsystem</div>
            <div style={{width:"6rem" ,height:"3px",backgroundColor:"#ffffff"}} className={"rounded mb-2 mx-auto"}></div>
            <div className="overflow-auto">
                <SubsystemButton 
                
                />
                
                </div>
            </div>
            <div className="d-flex flex-column p-2" style={{ width: "15rem", fontFamily: "iceberg", backgroundColor: "#ffffff" }}>
            <div className='h6 mx-5 px-2' style={{color:"#7B34C2",fontFamily:"iceberg"}}>commends</div>
            <div style={{width:"6rem" ,height:"3px",backgroundColor:"#7B34C2"}} className={"rounded mb-2 mx-5 px-2"}></div>
            <div className="overflow-auto">
                <CommendButton
                
                />
                </div>
            </div>
           
        </div>
</div>

    )
}

export { ContainerSubsystem }