import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(){


    return(
        <Form className='p-3'>
        <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
          {/* <Form.Label style={{fontFamily:"iceberg",color:"#7b34c2"}} className='h6'>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Enter email" style={{backgroundColor:"#ffe9d7" ,borderWidth:0,borderBottomWidth:2,borderColor:"#a059b9",fontFamily:"iceberg",color:"#7b34c2"}} className={"rounded"}/>

        </Form.Group>
  
        <Form.Group className="mb-3 d-flex flex-column align-items-end" controlId="formBasicPassword">
          
        <Form.Control type="password"  placeholder="Password" style={{backgroundColor:"#ffe9d7" ,borderWidth:0,borderBottomWidth:2,borderColor:"#a059b9",fontFamily:"iceberg",color:"#7b34c2"}} />
        <a style={{fontFamily:"iceberg",color:"#7b34c2"}} className={"h6 mt-2"}>forget password?</a>
        </Form.Group>

        <Button className='btn btn-lg px-4 shadow ' style={{ background: 'linear-gradient(to right, rgba(123, 52, 194, 1), rgba(123, 52, 194, 0.5))',color:"white" ,width:"15rem" , fontFamily:"iceberg" }} type="submit">
          sign in
        </Button>
      </Form>

    )
}
export{LoginForm}