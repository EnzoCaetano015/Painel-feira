import { createBrowserRouter, Outlet } from "react-router";
import { Login } from "../pages/login/login";
import { Projetos } from "../pages/projetos/projetos";
import { Turmas } from "../pages/turmas/turmas";
import { Usuarios } from "../pages/usuarios/usuarios";
import { RouterProvider } from "react-router";

const routes = createBrowserRouter([
    {
        element: <Outlet />,
        children: [
            {
                path: "/",
                element: <Login />

            },
            {
                path: "/projetos",
                element: <Projetos/>
            },
            {
                path: "/turmas",
                element: <Turmas/>
            },
            {
                path: "/usuarios",
                element: <Usuarios/>
            }
        ]
    }
])

const Routes = () => {
    return <RouterProvider router={routes}/>
}

export default Routes