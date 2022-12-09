
import Subsystems from "../../Service/Root"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { color } from "@mui/system";
import Frame from 'react-frame-component';



function CommendButton(indexery) {
    // const [defaultBtn] = Subsystems.some(btn => btn.isDefault === true);
    const [defaultBtn, setdefaultBtn] = useState()
    const [activeButtonId, setActiveButtonId] = useState(defaultBtn ? defaultBtn.id : null);
    const [indexer,setindexer]=useState(0)



    useEffect(() => {
        // Update the document title using the browser API
        setdefaultBtn(1);
        setindexer(indexery);
    });


    const handleButtonClick = event => {
        setActiveButtonId(Number(event.target.value));
    };

    return (
        

                
                    Subsystems[indexer ? 0 : indexer].commends.map((commend) => {
                    return (
                        

                        <Button
                            key={commend.id}
                            variant="mt-3 mr-3 primary rounded"
                            className={commend.id === activeButtonId ? 'btn btn-outline-danger' : 'text-light'}// Compare the button's id to what we have in state to determine which should be active
                            // style={subsystem.id === activeButtonId ? {} : {}}// Compare the button's id to what we have in state to determine which should be active
                            size="sm"
                            value={commend.id} // Set the value of the button as the button's id
                            onClick={handleButtonClick}
                        >
                            {commend.name}
                        </Button>
                      
                    )
                })
              


   

    )
}




function SubsystemButton() {
    // const [defaultBtn] = Subsystems.some(btn => btn.isDefault === true);
    const [defaultBtn, setdefaultBtn] = useState()
    const [activeButtonId, setActiveButtonId] = useState(defaultBtn ? defaultBtn.id : null);

    useEffect(() => {
        // Update the document title using the browser API

    });




    return (
        Subsystems.map(subsystem => {
            const handleButtonClick = event => {
                setActiveButtonId(Number(event.target.value));
                console.log(subsystem.id);
                
            };
            return (
                <Button
                    key={subsystem.id}
                    variant="mt-3 mr-3 rounded"
                    className={subsystem.id === activeButtonId ? 'btn btn-outline-light' : 'text-light'}// Compare the button's id to what we have in state to determine which should be active
                    // style={subsystem.id === activeButtonId ? {} : {}}// Compare the button's id to what we have in state to determine which should be active
                    size="sm"
                    value={subsystem.id} // Set the value of the button as the button's id
                    onClick={handleButtonClick}
                >
                    {subsystem.name}
                </Button>

            )
        })

    )
}


function ContainerSubsystem() {
    return (

        <div className="d-flex flex-row p-2 m-3 rounded ">
            <div className="d-flex flex-column p-2 m-3 rounded " style={{ width: "7rem", fontFamily: "iceberg", backgroundColor: "#7b34c2" }}>
                <SubsystemButton />
            </div>
            <div className="d-flex flex-column p-2 m-3 rounded " style={{ width: "7rem", fontFamily: "iceberg", backgroundColor: "#ffffff" }}>
                <CommendButton/>
            </div>
           
        </div>


    )
}

export { ContainerSubsystem }