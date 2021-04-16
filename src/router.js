import Home from './components/Home'
import Scan from "./components/Scan";

export const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/scan',
        name: 'Scan',
        component: Scan
    }
]