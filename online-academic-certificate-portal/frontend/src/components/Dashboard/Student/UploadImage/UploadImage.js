import FormData from 'form-data';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { student_upload_ssc } from '../../../../actions/auth';
const UploadImage = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState()
    const [way, setWay] = React.useState('courier');
    const disptach = useDispatch()
    const user = useSelector(state => state.auth.user)
    let email = '';
    if (user) {
        email = user.email;
        console.log(email)
    }
    const submit = (email, way, image) => {
        const uploadData = new FormData()
        uploadData.append('email', email)
        uploadData.append('ssc_certificate', image)
        uploadData.append('way', way)
        console.log(way)
        disptach(student_upload_ssc(uploadData))
        navigate('/student/provisional/pay')

    }
    const handleChange = (event) => {
        setWay(event.target.value)
    }
    return (
        <div>
            <h3>Upload Your ssc Certificate</h3>
            <input type="file" onChange={(evt) => setImage(evt.target.files[0])} />

            <h3>choose certificate collected way</h3>
            <div>
                <input
                    type="radio"
                    value="courier"
                    checked={way === 'courier'}
                    onChange={handleChange}
                /> courier
            </div>
            <div>
                <input
                    type="radio"
                    value="physically"
                    checked={way === 'physically'}
                    onChange={handleChange}
                /> physically
            </div>
            <button onClick={() => submit(email, way, image)}>submit</button>
        </div>
    )
}

export default UploadImage