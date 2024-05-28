import { Navigate, Route, Routes } from "react-router-dom"
import { AulaTemplate } from "../template/AulaTemplate"
import { ProfilePage } from "../pages/ProfilePage/ProfilePage"
import { AulaPage } from "../pages/AulaPage/AulaPage"
import { CoursesPage } from "../pages/CoursesPage/CoursesPage"


const navArrayLinks = [
  { title: "Inicio", path: "/" },
  { title: "Cursos", path: "/courses" },
  { title: "Entretenimiento", path: "/profile" },
];

const navArrayLinkUser=[
  { title: "Ver mi perfil", path:"/profile"},
  // { title: "Cerrar sesion", path:"/profile"},
]

export const AulaRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AulaTemplate navArrayLinks={navArrayLinks} navaArrayLinkUser={navArrayLinkUser}/>}>
        <Route path='/' element={<AulaPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
      </Route>
      
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
