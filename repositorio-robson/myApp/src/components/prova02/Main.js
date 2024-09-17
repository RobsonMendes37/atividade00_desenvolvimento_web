import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout";

import { Criar } from "./components/aluno/Criar";
import Listar from "./components/aluno/Listar";
import Editar from "./components/aluno/Editar";

import Firebase from "./utils/Firebase"
import FirebaseContext from "./utils/FirebaseContext"
import Home from "./components/Home";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Layout />,
            children: [
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"aluno/listar",
                    element:<Listar />
                },
                {
                    path:"aluno/criar",
                    element:<Criar />
                },
                {
                    path:"aluno/editar/:id",
                    element:<Editar />
                }
            ]
        }
    ]

)

const Main = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <RouterProvider router={router}/>
        </FirebaseContext.Provider >
        
    )
}
export default Main