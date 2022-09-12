import React from 'react'
import { Link } from 'react-router-dom'
import bongobondhuNSTU from '../assets/images/bongobondhuNSTU.jpg'
import './Homepage.css'
const HomePage = () => {
    return (
        <React.Fragment>
            <p style={{ height: "20px" }}></p>
            <div className='homeDiv'>
                <div style={{ textAlign: 'justify' }}>
                    Presently, Noakhali Science & Technology University accommodates more than 5000 students and more than 1000 students graduates each session. Each graduate needs academic documents for future work.
                    Our university provides a graduate/post graduate student four to seven documents based on his department/Institute and needs. They are namely- Provisional certificate, Transcript, Date of result publication certificate, Grade to mark conversion, migration, medium of instruction and CSE equivalent certificate. To collect his certificate a student first goes to Exam controller office or Registrar office to collect required form. Then he needs to fill the form where he has to provide his information. His form needs to be forwarded by adhering department/Institute with authorized member signature on it. Also, he needs to ensure clearance from seminar library, central library, hall provost and cyber center. Finally, he needs to pay for the certificate and for that purpose he needs to go to the bank. Thus, just to get one certificate a student is going around place to place which seems inconvenient.
                    To mitigate this hassle, “NSTU Academic Certificate Processing Portal” is proposed. It will automate the whole process of certificate withdrawal. A student will be able to request for certificates easily from anywhere in the world and collect the documents physically or via currier. It is not essential for him to be present in the university.
                    A student can also have digitally signed copy of his academic document if needed.
                    A student will request for his desired certificate through our system and our system will help as a coordinator in the whole process. Using the system not only students but also related authority’s workload will be minimized.
                    Academic documents have some confidential information that should not be known by unauthorized person. To maintain confidentiality, we will be using “Block-Chain”. In general data storing and retrieving procedure, there is a high chance of confidential information being leaked. Also, admin has the ability to manipulate confidential data. Whereas “Block-Chain” is considered as a system of recording information in a distributed way that makes it difficult or impossible to change, hack or manipulate.

                </div>
                <div style={{ marginLeft: '15px', }}>
                    <img src={bongobondhuNSTU} alt="" style={{ height: '450px', width: '530px', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} />
                    <Link to="/registration">
                        <input type="submit" value="Create Account" id="submit-registration"
                            style={{ width: '60%', marginLeft: 'auto' }}
                        />
                    </Link>
                    <p style={{ 'textAlign': 'center', 'marginTop': '15px' }}>Already have an account?</p>
                    <Link to="/login">
                        <input type="submit" value="Login" id="submit-registration"
                            style={{ width: '60%', marginLeft: 'auto' }}
                        />
                    </Link>
                </div>
                {/* <div className='flex-fill'>
                    <h3>signup as a Student</h3>
                    <Link to="/student/signup" className='btn btn-warning'>Signup</Link>
                </div>
                <div className='flex-fill'>
                    <h3>signup as a Chairman</h3>
                    <Link to="/chairman/signup" className='btn btn-warning'>Signup</Link>
                </div> */}
            </div>
        </React.Fragment>
    )
}

export default HomePage