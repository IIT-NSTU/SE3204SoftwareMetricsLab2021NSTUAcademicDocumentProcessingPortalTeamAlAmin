import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='container d-flex justify-content-between mt-5'>
            <div style={{ textAlign: 'justify' }}>
                Presently, Noakhali Science & Technology University accommodates more than 5000 students and more than 1000 students graduates each session. Each graduate needs academic documents for future work.
                Our university provides a graduate/post graduate student four to seven documents based on his department/Institute and needs. They are namely- Provisional certificate, Transcript, Date of result publication certificate, Grade to mark conversion, migration, medium of instruction and CSE equivalent certificate. To collect his certificate a student first goes to Exam controller office or Registrar office to collect required form. Then he needs to fill the form where he has to provide his information. His form needs to be forwarded by adhering department/Institute with authorized member signature on it. Also, he needs to ensure clearance from seminar library, central library, hall provost and cyber center. Finally, he needs to pay for the certificate and for that purpose he needs to go to the bank. Thus, just to get one certificate a student is going around place to place which seems inconvenient.
                To mitigate this hassle, “NSTU Academic Certificate Processing Portal” is proposed. It will automate the whole process of certificate withdrawal. A student will be able to request for certificates easily from anywhere in the world and collect the documents physically or via currier. It is not essential for him to be present in the university.
                A student can also have digitally signed copy of his academic document if needed.
                A student will request for his desired certificate through our system and our system will help as a coordinator in the whole process. Using the system not only students but also related authority’s workload will be minimized.
                Academic documents have some confidential information that should not be known by unauthorized person. To maintain confidentiality, we will be using “Block-Chain”. In general data storing and retrieving procedure, there is a high chance of confidential information being leaked. Also, admin has the ability to manipulate confidential data. Whereas “Block-Chain” is considered as a system of recording information in a distributed way that makes it difficult or impossible to change, hack or manipulate.

            </div>
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