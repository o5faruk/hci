import {
  HomeOutlined,
  CalendarTodayOutlined,
  ListOutlined,
  PersonOutline,
  PeopleOutline,
  EmailOutlined,
  NotesOutlined,
  AttachMoneyOutlined,
  InsertDriveFileOutlined,
  SettingsInputComponentOutlined
} from "@material-ui/icons";

const Routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeOutlined,
  },
  {
    path: "/dashboard/calendar",
    name: "Calendar",
    icon: CalendarTodayOutlined,
  },
  {
    path: "/dashboard/services",
    name: "Services",
    icon: ListOutlined,
  },
  {
    path: "/dashboard/staff",
    name: "Staff",
    icon: PersonOutline,
  },
  {
    path: "/dashboard/customers",
    name: "Customers",
    icon: PeopleOutline,
  },
  {
    path: "/dashboard/marketing",
    name: "Marketing",
    icon: EmailOutlined,
  },
  {
    path: "/dashboard/quotes",
    name: "Quotes",
    icon: NotesOutlined,
  },
  {
    path: "/dashboard/invoices",
    name: "Invoices",
    icon: AttachMoneyOutlined,
  },
  {
    path: "/dashboard/reports",
    name: "Reports",
    icon: InsertDriveFileOutlined,
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: SettingsInputComponentOutlined,
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default Routes;
