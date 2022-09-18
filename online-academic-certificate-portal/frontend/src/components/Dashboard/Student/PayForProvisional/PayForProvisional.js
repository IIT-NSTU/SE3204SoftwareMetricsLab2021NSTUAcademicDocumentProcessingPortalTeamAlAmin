import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { student_pay_provisional } from "../../../../actions/auth";
const PayForProvisional = () => {
    const disptach = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.user)
    let email = '';
    if (user) {
        email = user.email;
        console.log(email)
    }
    const submit = (email) => {
        disptach(student_pay_provisional(email))
        navigate('/student/provisional/details')
    }
    return (
        <div>
            <h1>pay for provisional</h1>
            <input type="submit" value="pay" id="submit-registration"
                style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                onClick={() => submit(email)}
            />
        </div>
    )
}

export default PayForProvisional