import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './StudentDetails.css';
// import { student_apply_provisional } from "../../../actions/auth";
const StudentProvisionalDetails = () => {
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
                toast.error("something went wrong")
            })
    }, [email])
    useEffect(() => {
        getData()
    }, [getData])
    return (
        <div>
            {certificateData.student_details &&

                <React.Fragment >

                    <div className='student__whole__container'>
                        {/* student details */}
                        <div class="studnet__container" style={{ height: '450px' }}>
                            <div class="title" style={{ marginTop: '10px' }}>courier details</div>
                            <table>
                                <thead>
                                    <tr>
                                        <th> Authority </th>
                                        <th> Action Date</th>
                                        <th> Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th> Chairman </th>
                                        <td> {certificateData.chairman_action_date ? certificateData.chairman_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.chairman_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.chairman_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                    <tr>
                                        <th> Hall Provost </th>
                                        <td> {certificateData.provost_action_date ? certificateData.provost_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.provost_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.provost_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                    <tr>
                                        <th> Librarian </th>
                                        <td> {certificateData.librarian_action_date ? certificateData.librarian_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.librarian_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.librarian_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                    <tr>
                                        <th> Exam controller </th>
                                        <td> {certificateData.examController_action_date ? certificateData.examController_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.examController_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.examController_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        {/* authority details */}
                        <div class="studnet__container">
                            <div class="title" style={{ marginTop: '10px' }}>Approval Details</div>
                            <table>
                                <thead>
                                    <tr>
                                        <th> Authority </th>
                                        <th> Action Date</th>
                                        <th> Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th> Chairman </th>
                                        <td> {certificateData.chairman_action_date ? certificateData.chairman_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.chairman_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.chairman_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                    <tr>
                                        <th> Hall Provost </th>
                                        <td> {certificateData.provost_action_date ? certificateData.provost_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.provost_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.provost_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                    <tr>
                                        <th> Librarian </th>
                                        <td> {certificateData.librarian_action_date ? certificateData.librarian_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.librarian_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.librarian_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                    <tr>
                                        <th> Exam controller </th>
                                        <td> {certificateData.examController_action_date ? certificateData.examController_action_date : <p>pending</p>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {certificateData.examController_status === 'approved' ?
                                                <i class='bx bxs-check-circle' style={{ fontSize: '24px', color: 'green' }}></i> :
                                                certificateData.examController_status === 'rejected' ? <i class='bx bxs-x-circle' style={{ fontSize: '24px', color: 'red' }}></i> :
                                                    <i class='bx bx-loader' style={{ fontSize: '24px', color: '#c8ab2c' }}></i>
                                            }
                                        </td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    {/* {certificateData.ssc_certificate && <div className="certificate_container">
                        <img src={`http://localhost:8000${certificateData.ssc_certificate}`} alt="" />
                    </div>
                    } */}

                    <div style={{ textAlign: 'center', marginTop: '30px' }}>

                        <input type="submit" value="download" id="accept"
                            style={{ width: '15%', marginLeft: 'auto' }}
                            disabled={certificateData.examController_status !== "approved"}
                        />

                        {/* <input type="submit" value="Reject" id="reject"
                            onClick={rejectChairman}
                            style={{ width: '15%', marginLeft: '60px' }}
                            disabled={certificateData.examController_status !== null}
                        /> */}

                    </div>
                </React.Fragment >
            }
        </div>
    )
}

export default StudentProvisionalDetails