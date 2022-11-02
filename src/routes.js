/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import BulkUploadUsers from "views/BulkUploadUsers";
import AddUser from "views/AddUser";
import RemoveUser from "views/RemoveUser";
import GrafanaDashboard from "views/GrafanaDashboard";
import StyledDropzone from "views/BulkUploadUsers";
import LoginComponent from "views/Login";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: GrafanaDashboard,
    layout: "/admin"
  },
  {
    path: "/adduser",
    name: "Add User",
    icon: "nc-icon nc-circle-09",
    component: AddUser,
    layout: "/admin"
  },
  {
    path: "/removeuser",
    name: "Remove User",
    icon: "nc-icon nc-fav-remove",
    component: RemoveUser,
    layout: "/admin"
  },
  {
    path: "/bulkuploadusers",
    name: "Add Multiple Users",
    icon: "nc-icon nc-attach-87",
    component: StyledDropzone,
    layout: "/admin"
  }
];

export default dashboardRoutes;
