import type { PaymentMethodCreateParams, ApplePay, PaymentSheet, ConfirmSetupIntent, InitialiseParams, CreatePaymentMethodResult, RetrievePaymentIntentResult, RetrieveSetupIntentResult, ConfirmPaymentMethodResult, HandleCardActionResult, ConfirmSetupIntentResult, CreateTokenForCVCUpdateResult, InitPaymentSheetResult, PresentPaymentSheetResult, ConfirmPaymentSheetPaymentResult, Card, ApplePayResult } from './types';
declare type NativeStripeSdkType = {
    initialise(params: InitialiseParams): Promise<void>;
    createPaymentMethod(data: PaymentMethodCreateParams.Params, options: PaymentMethodCreateParams.Options): Promise<CreatePaymentMethodResult>;
    handleCardAction(paymentIntentClientSecret: string): Promise<HandleCardActionResult>;
    confirmPaymentMethod(paymentIntentClientSecret: string, data: PaymentMethodCreateParams.Params, options: PaymentMethodCreateParams.Options): Promise<ConfirmPaymentMethodResult>;
    isApplePaySupported(): Promise<boolean>;
    presentApplePay(params: ApplePay.PresentParams): Promise<ApplePayResult>;
    confirmApplePayPayment(clientSecret: string): Promise<void>;
    updateApplePaySummaryItems(summaryItems: ApplePay.CartSummaryItem[], errorAddressFields: Array<{
        field: ApplePay.AddressFields;
        message?: string;
    }>): Promise<void>;
    confirmSetupIntent(paymentIntentClientSecret: string, data: ConfirmSetupIntent.Params, options: ConfirmSetupIntent.Options): Promise<ConfirmSetupIntentResult>;
    retrievePaymentIntent(clientSecret: string): Promise<RetrievePaymentIntentResult>;
    retrieveSetupIntent(clientSecret: string): Promise<RetrieveSetupIntentResult>;
    initPaymentSheet(params: PaymentSheet.SetupParams): Promise<InitPaymentSheetResult>;
    presentPaymentSheet(params?: PaymentSheet.PresentParams): Promise<PresentPaymentSheetResult>;
    confirmPaymentSheetPayment(): Promise<ConfirmPaymentSheetPaymentResult>;
    createTokenForCVCUpdate(cvc: string): Promise<CreateTokenForCVCUpdateResult>;
    handleURLCallback(url: string): Promise<boolean>;
    createToken(params: Card.CreateTokenParams): Promise<Card.Token>;
};
declare const _default: NativeStripeSdkType;
export default _default;
