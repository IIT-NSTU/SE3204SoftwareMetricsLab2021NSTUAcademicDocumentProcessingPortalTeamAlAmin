import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='container d-flex justify-content-between mt-5'>
            <div className='flex-fill'>
                <h3>signup as a Student</h3>
                <Link to="/student/signup" className='btn btn-warning'>Signup</Link>
            </div>
            <div className='flex-fill'>
                <h3>signup as a Chairman</h3>
                <Link to="/chairman/signup" className='btn btn-warning'>Signup</Link>
            </div>
        </div>
    )
}

export default HomePage