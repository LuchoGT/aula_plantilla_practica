import { User } from "@/interfaces/user";
import api from "@/services/api";
import ApiService from "@/services/ApiService";
import { onCheckingCredentials, onLogin, onLogout,clearErrorMessage, updateUser } from "@/store/slices/authSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {

    const { status,user ,errorMessage} = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const apiService = new ApiService();
    
    const startLogin = async({name,password}:User)=>{
        dispatch(onCheckingCredentials());
        console.log({name,password});
        try {
            // const {data} = await api.post("/api/v1/auth",{name,password});
            // // console.log({resp});
            // localStorage.setItem("token",data.token);
            // localStorage.setItem("token-init-date", new Date().getTime() );
            // dispatch(onLogin({name:data.name}));
            const data = await apiService.getLogin({ name, password }); // Llama al método de ApiService
            if (data && data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime().toString());
                dispatch(onLogin({ name: data.name }));
            } else {
                console.error('La respuesta de la API no contiene un token válido.');
                dispatch(onLogout('Error de autenticación'));
            }
        } catch (error) {
            console.log({error});
            dispatch(onLogout('Credenciales incorrectas'));
            // setTimeout(() => {
            //     dispatch(clearErrorMessage())
            // }, 10);
        }
    }

    const startRegister = async({name,password}:User)=>{
        dispatch(onCheckingCredentials());
        try {
            // const {data} = await api.post("/api/v1/auth/register",{name,password})
            const data = await apiService.register({ name, password }); // Llama al método de ApiService
            if (data && data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime().toString());
                dispatch(onLogin({ name: data.name }));
            } else {
                console.error('La respuesta de la API no contiene un token válido.');
                dispatch(onLogout('Error de autenticación'));
            }
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg));
            dispatch(onLogout("usuario ya existente"));
            // setTimeout(() => {
            //     dispatch(clearErrorMessage())
            // }, 10);
        }
    }

    const startLogout=()=>{
        localStorage.clear();
        dispatch(onLogout())
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            // const { data } = await api.get('/api/v1/auth/renew');
            const data = await apiService.checkAuthToken();
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name:data.name}) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    // const updateUserProfile2 = async ({ name, password, profile }: User) => {
    //     try {
    //       await apiService.updateUser({ name, password, profile });
    //       // Si es necesario, actualizar el estado global del usuario después de la actualización
    //     } catch (error) {
    //       console.error(error);
    //       // Manejar errores de actualización de usuario
    //     }
    // };

    const updateUserProfile = async (userId: string, updateData: Partial<User>) => {
        dispatch(onCheckingCredentials());
        try {
          const data = await apiService.updateUser(userId, updateData);
          dispatch(updateUser(data));
        } catch (error) {
          console.error(error);
        //   dispatch(onLogout('Error al actualizar el usuario'));
        }
      }
    
    return {
        status,
        user,
        errorMessage,

        startLogin,
        startRegister,
        startLogout,
        checkAuthToken,
        updateUserProfile
    }
}
