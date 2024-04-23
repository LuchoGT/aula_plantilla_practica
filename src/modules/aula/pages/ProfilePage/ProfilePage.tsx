import { useAuthStore } from "@/hooks/useAuthStore";

export const ProfilePage = () => {


  const {user,startLogout} = useAuthStore();
  
  const handleExit=()=>{
    // localStorage.removeItem('virtual');
    startLogout()
  }
  return (
    <div>
        <h1>Profile Page</h1>
        <h3>Hola  ctmre</h3>
        <h3>Hola {user.name} ctmre</h3>
        <button onClick={handleExit}>Salir</button>
    </div>
  )
}
