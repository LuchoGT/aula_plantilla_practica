import { useAuthStore } from "@/hooks/useAuthStore";
import { AulaRoutes } from "@/modules/aula/routes/AulaRoutes";
import { AuthRoutes } from "@/modules/auth/routes/AuthRoutes";
import { Loading } from "@/modules/auth/sections/Loading/Loading";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRouter = () => {


  const  {checkAuthToken,status} = useAuthStore();

  useEffect(() => {
    // Simula la verificación de autenticación (sin backend real)
    // const user = localStorage.getItem('virtual');
    // if (user) {
    //   dispatch(onLogin(user));
    // } else {
    //   dispatch(onLogout());
    // }
    checkAuthToken();
  }, []);

  
  if ( status === 'checking' ) {
    return (
      <Loading/>
    )
}

  return (
    <Routes>

      {
        status === "not-authenticated"
        ?
        <>
          {/* <Route path="/auth/*" element={<LoginPage/>}/> */}
          <Route path="/auth/*" element={<AuthRoutes/>}/>       
          <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </>
        :
        <>
          <Route path="/*" element={<AulaRoutes/>}/>
          {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}
        </>
      }
    
    </Routes>
  )
}
