import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";


export default function CustomerNavBar(){
    const [user, setUser] = useContext(userContext);
    console.log(user);
    
    
    const navigate = useNavigate();


    return(
        <nav>
            <center>
            <h1>Welcome to Your Dashboard</h1>
            <Button onClick={() => navigate("/Food-Items")}>View Our Food Items</Button>
            <Button onClick={() => navigate("/create-an-order")}>Order</Button>
            <Button onClick={() => navigate("/view-my-orders")}>View My Orders</Button>
            <Button onClick={() => navigate("/update-an-order")}>Update Order</Button>
            <Button onClick={() => navigate("/addanaccount")}>create an account</Button>
            <Button onClick={() => navigate("/updateanaccount")}>update an account</Button>
            <Button onClick={() => navigate("/deleteanaccount")}>delete an account</Button>
            <Button onClick={() => navigate("/make-payment")}>pay your balance</Button>
            <Button onClick={() => navigate("/creditcarddashboard")}>Credit Card</Button>
            </center>
        </nav>
    )
}