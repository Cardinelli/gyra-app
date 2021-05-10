import Home from './components/Home'
import Scan from "./components/Scan";
import Map from "./components/Map";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Login from "./components/auth/Login";

export const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Home
    },
    {
        path: '/map',
        name: 'Map',
        component: Map
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
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]