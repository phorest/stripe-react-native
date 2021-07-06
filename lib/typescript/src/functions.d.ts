import { ApplePay, ApplePayError, ApplePayResult, ConfirmPaymentMethodResult, ConfirmPaymentSheetPaymentResult, ConfirmSetupIntent, ConfirmSetupIntentResult, CreatePaymentMethodResult, CreateTokenForCVCUpdateResult, CreateTokenResult, HandleCardActionResult, InitPaymentSheetResult, PaymentMethodCreateParams, PaymentSheet, PresentPaymentSheetResult, RetrievePaymentIntentResult, RetrieveSetupIntentResult, StripeError } from './types';
import type { Card } from './types/Card';
export declare const createPaymentMethod: (data: PaymentMethodCreateParams.Params, options?: PaymentMethodCreateParams.Options) => Promise<CreatePaymentMethodResult>;
export declare const createToken: (params: Card.CreateTokenParams) => Promise<CreateTokenResult>;
export declare const retrievePaymentIntent: (clientSecret: string) => Promise<RetrievePaymentIntentResult>;
export declare const retrieveSetupIntent: (clientSecret: string) => Promise<RetrieveSetupIntentResult>;
export declare const confirmPaymentMethod: (paymentIntentClientSecret: string, data: PaymentMethodCreateParams.Params, options?: PaymentMethodCreateParams.Options) => Promise<ConfirmPaymentMethodResult>;
export declare const isApplePaySupported: () => Promise<boolean>;
export declare const presentApplePay: (params: ApplePay.PresentParams) => Promise<ApplePayResult>;
export declare const updateApplePaySummaryItems: (summaryItems: ApplePay.CartSummaryItem[], errorAddressFields?: Array<{
    field: ApplePay.AddressFields;
    message?: string;
}>) => Promise<{
    error?: StripeError<ApplePayError>;
}>;
export declare const confirmApplePayPayment: (clientSecret: string) => Promise<{
    error?: StripeError<ApplePayError>;
}>;
export declare const handleCardAction: (paymentIntentClientSecret: string) => Promise<HandleCardActionResult>;
export declare const confirmSetupIntent: (paymentIntentClientSecret: string, data: ConfirmSetupIntent.Params, options?: ConfirmSetupIntent.Options) => Promise<ConfirmSetupIntentResult>;
export declare const createTokenForCVCUpdate: (cvc: string) => Promise<CreateTokenForCVCUpdateResult>;
export declare const handleURLCallback: (url: string) => Promise<boolean>;
export declare const initPaymentSheet: (params: PaymentSheet.SetupParams) => Promise<InitPaymentSheetResult>;
export declare const presentPaymentSheet: (params?: PaymentSheet.PresentParams | undefined) => Promise<PresentPaymentSheetResult>;
export declare const confirmPaymentSheetPayment: () => Promise<ConfirmPaymentSheetPaymentResult>;
