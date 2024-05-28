export interface User{
    name: string;
    password:string;
    // requireUppercase?: boolean;
    // requireLowercase?: boolean;
    // requireNumber?: boolean;
    // requireMinLength?: boolean;
    names?:string;
    surname?:string;
    email? :string;
    phone? :number;
    photo?:string
    profile?:string;
}