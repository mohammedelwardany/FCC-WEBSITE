import im from "../../../assets/login.png"


function RightContainer({insideCode}){

    return(
                <>
                <div className="overflow-auto p-1" style={{backgroundColor:"#7b34c2",width:"45rem",height:"35rem" ,borderTopRightRadius:10,borderBottomRightRadius:10 }}>
                    {insideCode}
                    
                </div>
                </>
    )
}
export{RightContainer}