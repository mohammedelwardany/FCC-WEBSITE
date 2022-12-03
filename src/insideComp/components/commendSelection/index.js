import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import * as React from 'react';
import "./style.css"


function CommendSellection() {

    
  return (
    <div className='d-flex flex-column justify-content-center align-items-start'>
      <div className='h6 mx-3' style={{color:"#7B34C2",fontFamily:"iceberg"}}>create commend</div>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className={""}>
      <Row className="mx-2 rounded " style={{border:"solid",borderRightColor:"#7B34C2",borderLeftWidth:0,borderTopColor:"#7B34C2",borderBottomColor:"#7B34C2"}}>
        <Col sm={5}>
          <Nav variant="pills"  className="flex-column rounded" style={{backgroundColor:"#7B34C2",color:"white",fontSize:14,fontFamily:"iceberg"}}>
            <Nav.Item>
              <Nav.Link eventKey="first" ><span className='text-light' id='11'>subsystem1</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" ><span className='text-light' id='22'>subsystem1</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3"><span className='text-light' id='3'>subsystem1</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4"><span className='text-light' id="4">subsystem1</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5"><span className='text-light' id='5'>subsystem1</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6"><span className='text-light' id='6'>subsystem1</span></Nav.Link>
            </Nav.Item>
          
           
            
          </Nav>
        </Col>
        <Col sm={7} >
          <Tab.Content className="flex-column rounded h6 text-dark"  >
            <Tab.Pane eventKey="first">

<select class="form-select" multiple aria-label="multiple select example" style={{height:"14rem",width:"9.5rem",backgroundColor:"#FFE9D7",border:"none",fontSize:12}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
           HELLO  2
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}









export {CommendSellection};