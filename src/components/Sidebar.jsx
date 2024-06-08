import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { homeOutline, analyticsOutline, peopleOutline, notificationsOutline, personOutline, logOutOutline } from 'ionicons/icons';

export const Sidebar = () => {
    return (
        <div className="d-flex justify-content-center bg-white" id="mySidebar">
      <div className="sidenav-wrapper p-3">
        <span className="text-center">
          <h5 className="fw-bold color-one mt-2 mb-4">My Ref Score</h5>
        </span>
        <ul className="sidenav-nav ps-0 h-100">
            <li className="unactive-item">
                <Link to=''>
                    <IonIcon icon={homeOutline} />
                    <span>Dashboard</span>
                </Link>
            </li>
            <li className="unactive-item">
                <Link to=''>
                    <IonIcon icon={analyticsOutline} />
                    <span>Analysis</span>
                </Link>
            </li>
            <li className="unactive-item">
                <Link to=''>
                    <IonIcon icon={peopleOutline} />
                    <span>Team</span>
                </Link>
            </li>
            <li className="unactive-item">
                <Link to=''>
                    <IonIcon icon={notificationsOutline} />
                    <span>Notifications</span>
                </Link>
            </li>
            <li className="unactive-item">
                <Link to=''>
                    <IonIcon icon={personOutline} />
                    <span>Profile</span>
                </Link>
            </li>
            <li className="unactive-item logout">
                <Link to=''>
                    <IonIcon icon={logOutOutline} />
                    <span>Logout</span>
                </Link>
            </li>
        </ul>
      </div>
    </div>
    )
}