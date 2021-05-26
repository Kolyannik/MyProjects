import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, LAB_ROUTE, WORK_ROUTE, COLLECTION_ROUTE } from "./utils/constants"
import Lab from "./pages/Lab";
import Auth from "./pages/Auth";
import Work from "./pages/Work";
import Admin from "./pages/Admin";
import Collection from "./pages/Collection";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: LAB_ROUTE,
        Component: Lab
    },

    {
        path: WORK_ROUTE,
        Component: Work
    },

    {
        path: COLLECTION_ROUTE,
        Component: Collection
    },
]