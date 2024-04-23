export interface User{
    name: string;
    password:string;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireMinLength?: boolean;
}