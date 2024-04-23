import { User } from "./user";

export interface Auth{
    status: "checking" | "not-authenticated" | "authenticated";
    user: string | null | User;
    errorMessage:undefined | string;
}