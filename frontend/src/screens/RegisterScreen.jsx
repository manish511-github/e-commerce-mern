import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form ,Button,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import FormContainer from '../components/shared/FormContainer';
import { register } from '../actions/userAction';
const RegisterScreen = ({location,history}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const [confirmpassword,setconfirmPassword]=useState("");
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    const redirect=location.search?location.search.split('=')[1]:'/';
    const dispatch=useDispatch()
   
    const userRegister=useSelector(state=>state.userRegister)
    const {loading,error,userInfo}=userRegister


    useEffect(()=>{
        if(userInfo){
            history.push(redirect)}
        },[history,userInfo,redirect]
    )
    const submitHandler=(e)=>{
        e.preventDefault();
        if(password!==confirmpassword)
        {
            setMessage('Password do  not Match');

        }
        else
        {
            dispatch(register(name,email,password))
        }
        
    }

  return (
   
  <>
<FormContainer>

    <h1> Register</h1>
    {error && <Message varient="danger">{error}</Message>}
    {loading && <Loader></Loader>}
   {message && <Message variant="danger">{message}</Message>}


    <Form onSubmit={submitHandler}>
    <Form.Group controlId='email'>
            <Form.Label>Name

            </Form.Label>
            <Form.Control type="text" placeholder="enter Name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>

        </Form.Group>
        <Form.Group controlId='email'>
            <Form.Label>Email Address

            </Form.Label>
            <Form.Control type="email" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>

        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label>Password

            </Form.Label>
            <Form.Control type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>

        </Form.Group>
        <Form.Group controlId='confirmpassword'>
            <Form.Label>Confirm Password

            </Form.Label>
            <Form.Control type="password" placeholder="Re-enter password" value={confirmpassword} onChange={(e)=>setconfirmPassword(e.target.value)}></Form.Control>

        </Form.Group>
        <Button type="submit" varient="primary">SIGN IN</Button>
        
    </Form>
    <Row>
        <Col>
        Have an account?
        <Link to={redirect?`login?redirect=${redirect}`:'/login'}>Login</Link>
        </Col>
    </Row>
</FormContainer>
  </>
  )
}

export default RegisterScreen