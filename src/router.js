import Home from './components/Home'
import Scan from "./components/Scan";
import Statistics from "./components/Statistics";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

export const routes = [
    {
        path: '/home',
        name: 'Dashboard',
        component: Home
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },
    {
        path: '/scan',
        name: 'Scan',
        component: Scan
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }
]