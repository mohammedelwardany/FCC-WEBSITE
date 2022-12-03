import im from "../../../assets/login.png"


function RightContainer({insideCode}){

    return(
                <>
                <div style={{backgroundColor:"#7b34c2",width:"30rem",height:"25rem" ,borderTopRightRadius:10,borderBottomRightRadius:10}}>
                    {insideCode}
                    
                </div>
                </>
    )
}
export{RightContainer}