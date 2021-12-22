import React from 'react'
import './topbar.css'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
