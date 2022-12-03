
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from '../signinForm';
import { SubHeader } from '../SubHeader';


function LeftContainer({insideCode}){

    return(
                <>
                <div style={{backgroundColor:"#ffe9d7",width:"30rem",height:"25rem",borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    {insideCode}
                </div>
                </>
    )
}
export{LeftContainer}