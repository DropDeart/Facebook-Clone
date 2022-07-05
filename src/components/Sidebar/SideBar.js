import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@material-ui/icons/People'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import StorefrontIcon from '@material-ui/icons/Storefront'
import Subscription from '@material-ui/icons/SubscriptionsOutlined'
import RestoreIcon from '@material-ui/icons/Restore'
import AssessmentIcon from '@material-ui/icons/Assessment'
import FlagIcon from '@material-ui/icons/Flag'
import EventIcon from '@material-ui/icons/Event'
import FiberNewIcon from '@material-ui/icons/FiberNew'


const SideBar = () => {
  return (
    <div className="Sidebar">
      <SidebarRow
        src="https://cdn.pixabay.com/photo/2018/09/14/23/28/avatar-3678347_960_720.png"
        title="Furkan Recep Çınar"
      />
      <SidebarRow Icon={PeopleIcon} title="Find Friends" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={Subscription} title="Watch" />
      <SidebarRow Icon={RestoreIcon} title="Remembers" />
      <SidebarRow Icon={AssessmentIcon} title="Recordings" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={FiberNewIcon} title="The Newests" />
     
    </div>
  )
}

export default SideBar
