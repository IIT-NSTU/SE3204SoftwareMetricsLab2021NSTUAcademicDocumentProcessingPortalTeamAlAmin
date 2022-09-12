import React from 'react'
import './StudentDashboard.css'
const StudentDashboard = () => {
    return (
        <React.Fragment>
            {/* <p style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '30px', fontWeight: '700' }}>Select your certificate</p> */}
            <div className="form-container" style={{ height: '700px', width: '600px', marginTop: '20px', background: '#efefef' }}>
                <div className="title">NSTU Certificate</div>
                <div class="certificate-type-container">
                    <div class="certificate-type shadow-box" style={{ marginTop: '20px' }}>
                        <p style={{ textAlign: 'center', marginTop: '5px', paddingTop: '10px', color: '#473d3d', fontWeight: '500' }}>provotional certificate</p>
                    </div>
                    <input type="submit" value="choose" id="submit-registration"
                        style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                    />
                </div>

                <div class="certificate-type-container">
                    <div class="certificate-type shadow-box" style={{ marginTop: '50px' }}>
                        <p style={{ textAlign: 'center', marginTop: '5px', paddingTop: '10px', color: '#473d3d', fontWeight: '500' }}>provotional certificate</p>
                    </div>
                    <input type="submit" value="choose" id="submit-registration"
                        style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                    />
                </div>

                <div class="certificate-type-container">
                    <div class="certificate-type shadow-box" style={{ marginTop: '50px' }}>
                        <p style={{ textAlign: 'center', marginTop: '5px', paddingTop: '10px', color: '#473d3d', fontWeight: '500' }}>provotional certificate</p>
                    </div>
                    <input type="submit" value="choose" id="submit-registration"
                        style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                    />
                </div>

                <div class="certificate-type-container">
                    <div class="certificate-type shadow-box" style={{ marginTop: '50px' }}>
                        <p style={{ textAlign: 'center', marginTop: '5px', paddingTop: '10px', color: '#473d3d', fontWeight: '500' }}>provotional certificate</p>
                    </div>
                    <input type="submit" value="choose" id="submit-registration"
                        style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                    />
                </div>

                <div class="certificate-type-container">
                    <div class="certificate-type shadow-box" style={{ marginTop: '50px' }}>
                        <p style={{ textAlign: 'center', marginTop: '5px', paddingTop: '10px', color: '#473d3d', fontWeight: '500' }}>provotional certificate</p>
                    </div>
                    <input type="submit" value="choose" id="submit-registration"
                        style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                    />
                </div>

                <div class="certificate-type-container">
                    <div class="certificate-type shadow-box" style={{ marginTop: '50px' }}>
                        <p style={{ textAlign: 'center', marginTop: '5px', paddingTop: '10px', color: '#473d3d', fontWeight: '500' }}>provotional certificate</p>
                    </div>
                    <input type="submit" value="choose" id="submit-registration"
                        style={{ width: '120px', height: '50px', marginLeft: '20px' }}
                    />
                </div>
            </div>
            <p style={{ height: '20px' }}></p>
        </React.Fragment >
    )
}


export default StudentDashboard

