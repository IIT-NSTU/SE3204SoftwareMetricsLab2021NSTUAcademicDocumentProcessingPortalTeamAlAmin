import FormData from 'form-data';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { student_upload_ssc } from '../../../../actions/auth';

const UploadImage = () => {
    const [image, setImage] = useState()
    const disptach = useDispatch()
    const user = useSelector(state => state.auth.user)
    let email = '';
    if (user) {
        email = user.email;
        console.log(email)
    }
    const submit = (email, image) => {
        const uploadData = new FormData()
        uploadData.append('email', email)
        uploadData.append('ssc_certificate', image)
        console.log(uploadData)
        disptach(student_upload_ssc(uploadData))
    }
    return (
        <div>
            <h3>Upload Your ssc Certificate</h3>
            <input type="file" onChange={(evt) => setImage(evt.target.files[0])} />
            <button onClick={() => submit(email, image)}>submit</button>
        </div>
    )
}

export default UploadImage