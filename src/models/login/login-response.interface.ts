export interface LoginResponse {
    result? : {
        email?: any;
        uid?: string;
    }
error?: {
    code?: any;
    message?: string;
}    
}