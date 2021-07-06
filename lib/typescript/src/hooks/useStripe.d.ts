import type { PaymentMethodCreateParams, ApplePay, PaymentSheet, CreatePaymentMethodResult, RetrievePaymentIntentResult, RetrieveSetupIntentResult, ConfirmPaymentMethodResult, HandleCardActionResult, ConfirmSetupIntentResult, CreateTokenForCVCUpdateResult, ApplePayResult, ApplePayError, StripeError, InitPaymentSheetResult, PresentPaymentSheetResult, ConfirmPaymentSheetPaymentResult, ConfirmSetupIntent, CreateTokenResult, Card } from '../types';
/**
 * useStripe hook
 */
export declare function useStripe(): {
    retrievePaymentIntent: (clientSecret: string) => Promise<RetrievePaymentIntentResult>;
    retrieveSetupIntent: (clientSecret: string) => Promise<RetrieveSetupIntentResult>;
    confirmPayment: (paymentIntentClientSecret: string, data: PaymentMethodCreateParams.Params, options?: PaymentMethodCreateParams.Options) => Promise<ConfirmPaymentMethodResult>;
    createPaymentMethod: (data: PaymentMethodCreateParams.Params, options?: PaymentMethodCreateParams.Options) => Promise<CreatePaymentMethodResult>;
    handleCardAction: (paymentIntentClientSecret: string) => Promise<HandleCardActionResult>;
    isApplePaySupported: boolean;
    presentApplePay: (params: ApplePay.PresentParams) => Promise<ApplePayResult>;
    confirmApplePayPayment: (clientSecret: string) => Promise<{
        error?: StripeError<ApplePayError>;
    }>;
    confirmSetupIntent: (paymentIntentClientSecret: string, data: ConfirmSetupIntent.Params, options?: ConfirmSetupIntent.Options) => Promise<ConfirmSetupIntentResult>;
    createTokenForCVCUpdate: (cvc: string) => Promise<CreateTokenForCVCUpdateResult>;
    updateApplePaySummaryItems: (summaryItems: ApplePay.CartSummaryItem[], errorAddressFields?: Array<{
        field: ApplePay.AddressFields;
        message?: string;
    }>) => Promise<{
        error?: StripeError<ApplePayError>;
    }>;
    handleURLCallback: (url: string) => Promise<boolean>;
    confirmPaymentSheetPayment: () => Promise<ConfirmPaymentSheetPaymentResult>;
    presentPaymentSheet: (params?: PaymentSheet.PresentParams | undefined) => Promise<PresentPaymentSheetResult>;
    initPaymentSheet: (params: PaymentSheet.SetupParams) => Promise<InitPaymentSheetResult>;
    createToken: (params: Card.CreateTokenParams) => Promise<CreateTokenResult>;
};
