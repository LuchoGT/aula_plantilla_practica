import { useAuthStore } from "@/hooks/useAuthStore";

export const AulaPage = () => {
  const { user, startLogout } = useAuthStore();

  const handleExit = () => {
    startLogout();
  };
  return (
    <main>
      <h3>Hola {user.name} ctmre</h3>
      <button onClick={handleExit}>Salir</button>
    </main>
  );
};
