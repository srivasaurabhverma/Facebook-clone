import userEvent from "@testing-library/user-event";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarRow title="saurabh" src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/07/full/1594108976-8028.jpg" />
      <SidebarRow
        title="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
