import { User } from "./user";

export interface Auth{
    status: "checking" | "not-authenticated" | "authenticated";
    user:  User | null;
    errorMessage:null | string;
}