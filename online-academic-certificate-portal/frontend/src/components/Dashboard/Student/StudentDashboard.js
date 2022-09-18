import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { student_apply_provisional } from "../../../actions/auth";
import './StudentDashboard.css';

const StudentDashboard = () => {
    let navigate = useNavigate();
    const disptach = useDispatch();
    const { email } = useSelector(state => state.auth.user)
    const [certificateData, setCertificateData] = useState({})
    const getData = React.useCallback(async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ 'email': email })
        axios.post(`http://localhost:8000/api/student-details/`, body, config)
            .then(res => {
                setCertificateData(res.data)
                console.log(res.data)
            })
            .catch(err => {

            })
    }, [email])
    useEffect(() => {
        getData()
    }, [getData])
    const applyForProvisional = () => {
        disptach(student_apply_provisional(email))
        navigate('/student/provisional/upload')
    }
    const goToPaymentPage = () => {
        navigate('/student/provisional/pay')
    }
    const goToDetailsPage = () => {
        navigate('/student/provisional/details')
    }
    const goToUploadPage = () => {
        navigate('/student/provisional/upload')
    }
    console.log(email, Object.keys(certificateData).length)
    return (
        <React.Fragment>
            {/* <p style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '30px', fontWeight: '700' }}>Select your certificate</p> */}
            <div className="form-container" style={{ height: '200px', width: '600px', marginTop: '20px', background: '#efefef' }}>
                <div className="title">NSTU Certificate</div>
                <div class="certificate-type-container">
                    <div class="certificate-type shadow-box" style={{ marginTop: '20px' }}>
                        <p style={{ textAlign: 'center', marginTop: '5px', paddingTop: '10px', color: '#473d3d', fontWeight: '500' }}>provisional certificate</p>
                    </div>
                    {Object.keys(certificateData).length > 0 && certificateData && certificateData.is_applied &&
                        certificateData.takeBy && !certificateData.is_paid &&
                        <input type="submit" value="pay" id="submit-registration"
                            style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                            onClick={() => goToPaymentPage()}
                        />
                    }
                    {Object.keys(certificateData).length > 0 && certificateData && certificateData.is_applied && !certificateData.takeBy &&
                        <input type="submit" value="upload info" id="submit-registration"
                            style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                            onClick={() => goToUploadPage()}
                        />
                    }
                    {Object.keys(certificateData).length > 0 && certificateData && certificateData.is_applied && certificateData.takeBy && certificateData.is_paid &&
                        <input type="submit" value="details" id="submit-registration"
                            style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                            onClick={() => goToDetailsPage()}
                        />

                    }
                    {Object.keys(certificateData).length > 0 && certificateData && !certificateData.is_applied &&
                        <input type="submit" value="details" id="submit-registration"
                            style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                            onClick={() => applyForProvisional()}
                        />

                    }
                    {(Object.keys(certificateData).length === 0 || (certificateData && !certificateData.is_applied)) &&
                        <input type="submit" value="apply" id="submit-registration"
                            style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                            onClick={() => applyForProvisional()}
                        />

                    }

                </div>
            </div>
            <p style={{ height: '20px' }}></p>
        </React.Fragment >
    )
}


export default StudentDashboard

