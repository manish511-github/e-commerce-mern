import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form ,Button,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import FormContainer from '../components/shared/FormContainer';
import { getUserDetails ,updateUserProfile} from '../actions/userAction';

const ProfileScreen = ({location,history}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const [confirmpassword,setconfirmPassword]=useState("");
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    const dispatch=useDispatch()
    const userLogin=useSelector((state)=>state.userLogin)

    const userDetails=useSelector((state)=>state.userDetails)
    const {loading,error,user}=userDetails;
    const {userInfo}=userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;
    useEffect(()=>{
        if(!userInfo){
            history.push('/login')}

        
        else{
            if(!user.name)
            {
                dispatch(getUserDetails('profile'))
            }
            else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[history,userInfo,user,dispatch]
    );

    const submitHandler=(e)=>{
        e.preventDefault();

        dispatch(updateUserProfile({ id: user._id, name, email, password }));      


        
    }

  return (
   
  <>
  <Row>
    <Col md={3}>
        <h1>Update Information</h1>
        {error && <Message varient="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
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
        <Button type="submit" varient="primary">Update</Button>
        
    </Form>
    </Col>
    <Col md={9}>
        <h1>My Orders</h1>

    </Col>
  </Row>

  </>
  )
}

export default ProfileScreen