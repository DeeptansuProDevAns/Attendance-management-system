import Link from "next/link";    
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import './layout.css'

export default function Layout({ children }) {
    return (
        <div className="row">
            {/* //for navbar    */}
                {/* <ul>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/about/aboutTeacher'>Teacher About</Link>
                    </li>
                    <li>
                        <Link href='/about/aboutStudent'>About Student</Link>
                    </li>
                    <li>
                        <Link href='/login'>Login</Link>
                    </li>
                </ul>   */}
            {/* //navbar end */}


            <div className="dflex col-2 lists">
                <div className="childlist"><Link href='/components/profile'>Profile</Link></div>
                <div className="childlist">About</div>
                <div className="childlist"><Link href='/components/leave'>Leave Info</Link></div>
                <div className="childlist"><Link href='/components/leaveApplication'>Leave Application</Link></div>
                <div className="childlist">Policy</div>
                <div className="childlist">Holiday</div>
            </div>

            <div className="col-10">{children}</div>
        </div>
    )
}