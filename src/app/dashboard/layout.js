import Link from "next/link";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./layout.css";

export default function Layout({ children }) {
    return (
        <div>
            <div className="DashNavbar">
                <div className="navitems">
                    <button className="btn btn-lg ">Home</button>
                    <button className="btn btn-lg ">Profile</button> 
                    <button className="btn btn-lg ">Attendance</button>
                    <button className="btn btn-lg ">Leave</button>
                    <button className="btn btn-lg ">About</button>
                </div>
                <div className="logout">
                <button className="btn btn-lg "><span className="bi bi-power"> </span> Logout</button>
                </div>
            </div>
            <div className="row">
                <div className="dflex col-3 lists">
                    <div className="childlist">
                        <Link href="/components/profile">
                            <span className="bi bi-person-fill"> </span>&nbsp; Profile
                        </Link>
                    </div>
                    <div className="childlist">
                        <Link href="/components/attendance">
                            <span className="bi bi-calendar-check-fill"></span>{" "}
                            &nbsp;Attendance
                        </Link>
                    </div>
                    <div className="childlist">
                        <Link href="/components/timetracker">
                            <span className="bi bi-clock-fill"></span> &nbsp; Time Tracker
                        </Link>
                    </div>
                    <div className="childlist">
                        <Link href="/components/perfomance">
                            <span className="bi bi-pencil-fill"></span>&nbsp; Perfomance
                        </Link>
                    </div>
                    <div className="childlist">
                        <Link href="/components/organisation">
                            <span className="bi bi-buildings-fill"></span>&nbsp; Organization
                        </Link>
                    </div>
                    <div className="childlist">Policy</div>
                    <div className="childlist">Holiday</div>
                    <div className="childlist">About</div>
                </div>

                <div className="col-9">{children}</div>
            </div>
        </div>
    );
}
