import { User } from "@/interfaces/user";
import api from "@/services/api";
import { onCheckingCredentials, onLogin, onLogout,clearErrorMessage } from "@/store/slices/authSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {

    const { status,user ,errorMessage} = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();
    
    const startLogin = async({name,password}:User)=>{
        dispatch(onCheckingCredentials());
        console.log({name,password});
        try {
            const {data} = await api.post("/api/v1/auth",{name,password});
            // console.log({resp});
            localStorage.setItem("token",data.token);
            localStorage.setItem("token-init-date", new Date().getTime() );
            dispatch(onLogin({name:data.name}));
        } catch (error) {
            console.log({error});
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }

    const startRegister = async({name,password}:User)=>{
        dispatch(onCheckingCredentials());
        try {
            const {data} = await api.post("/api/v1/auth/register",{name,password})
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({name:data.name}));

        } catch (error) {
            dispatch(onLogout(error.response.data?.msg));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
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
            const { data } = await api.get('/api/v1/auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name:data.name}) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }
    return {
        status,
        user,
        errorMessage,

        startLogin,
        startRegister,
        startLogout,
        checkAuthToken
    }
}
