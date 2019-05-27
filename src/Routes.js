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
    path: "/dashboard/questions",
    name: "Staff",
    icon: PersonOutline,
  },
  {
    path: "/dashboard/questions",
    name: "Customers",
    icon: PeopleOutline,
  },
  {
    path: "/dashboard/questions",
    name: "Marketing",
    icon: EmailOutlined,
  },
  {
    path: "/dashboard/questions",
    name: "Quotes",
    icon: NotesOutlined,
  },
  {
    path: "/dashboard/questions",
    name: "Invoices",
    icon: AttachMoneyOutlined,
  },
  {
    path: "/dashboard/questions",
    name: "Reports",
    icon: InsertDriveFileOutlined,
  },
  {
    path: "/dashboard/questions",
    name: "Settings",
    icon: SettingsInputComponentOutlined,
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default Routes;
