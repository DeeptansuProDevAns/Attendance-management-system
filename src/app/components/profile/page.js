import Link from 'next/link'
import './profile.css'


export default function profile() {
    return (
        <div>
            <div className='mainpage'>
                <div className='cards'>
                    <h3>About Me</h3>
                    <ul>
                        <li><span className='bi bi-diagram-3-fill icon-text'></span> internship/Trainee</li>
                        <li><span className='bi bi-person-circle icon-text'></span> Intern</li>
                        <li><span className='bi bi-reception-4 icon-text'></span> 91-7978148631</li>
                        <li><span className='bi bi-geo-alt-fill icon-text'></span> Bangalore</li>
                        <li><span className='bi bi-calendar-plus icon-text'></span> General</li>
                        <li><span className='bi bi-clock-history icon-text'></span> (GMT+05:30)</li>
                    </ul>
                    
                </div>
                <div className='cards'>
                    <h3>Organisation Structure</h3>
                    <ul>
                        <li><span className='bi bi-gear-wide-connected icon-text'></span> Department</li>
                        <li><span className='bi bi-diagram-3-fill icon-text'></span> internship/Trainee</li>
                    </ul>
                    
                </div>
                <div className='cards'>
                    <h3>SkillSet</h3>
                    <ul>
                        <li><span className='bi bi-gear-wide-connected icon-text'></span> Department</li>
                        <li><span className='bi bi-diagram-3-fill icon-text'></span> internship/Trainee</li>
                    </ul>
                    
                </div>
                <div className='cards'>
                    <h3>Basic Details</h3>
                    <div>
                        <div className='basicdetails'>
                            <div className='col-6'>Employee Name</div>
                            <div className='col-6'>Deeptansu Kumar Sahu</div>
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Department</div>
                            <div className='col-6'>Intern/Trainee</div>
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Reporting To</div>
                            <div className='col-6'>Sitikanta Sarangi</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}