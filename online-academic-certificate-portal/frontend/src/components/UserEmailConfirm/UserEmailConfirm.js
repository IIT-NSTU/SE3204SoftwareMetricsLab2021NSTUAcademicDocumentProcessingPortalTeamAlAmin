import React from 'react'
import './UserEmailConfirm.css'
const UserEmailConfirm = () => {
    return (


        <>
            <div class="js-container container" style={{ top: '0px !important;' }}></div>

            <div style={{ textAlign: 'center', marginTop: '30px', position: 'fixed', width: '100%', height: '100%', top: '0px;left:0px', }}>
                <div class="checkmark-circle">
                    <div class="background"></div>
                    <div class="checkmark draw"></div>
                </div>
                <h1>Congratulations!</h1>
                <p>You are all set. Well done!</p>
                <button class="submit-btn" type="submit" onclick="alert('🥺🥺🥺🥺🥺\n Oh no you didn\'t!!!!!!!');">Continue</button>
            </div>

        </>



    )
}

export default UserEmailConfirm