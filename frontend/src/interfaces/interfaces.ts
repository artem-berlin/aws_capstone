export interface Credentials {
    email : string,
    password : string
}

export interface CredentialsRegister {
    email : string,
    password : string,
    passwordAgain : string
}

export interface AuthInterface {
    token : string,
    login : (email: string, password: string) => Promise<void>,
    logout: () => void
}
export interface LineItem{
    productId : string;
    price : string;
}
export interface ShoppingCart{
    id : string;
    items: LineItem[];
}