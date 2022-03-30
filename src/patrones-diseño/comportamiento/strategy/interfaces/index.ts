export interface PaymentResponse {
    isSuccess: boolean;
    errorMessage?: string;
}

export interface PaymentStrategy {
    execute(userId: string, amount: number): PaymentResponse;
}


export interface PaymentCardStrategy extends PaymentStrategy {
    cardNumber: string;
    cvv: string;
}

export interface PaymentGatewayStrategy extends PaymentStrategy {
    userEmail: string;
}