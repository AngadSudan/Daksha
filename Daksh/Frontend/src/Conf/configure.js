const configure={
    Email:String(import.meta.env.VITE_EMAIL),
    Api_Key:String(import.meta.env.VITE_SENDGRID_API),
    Endpoint:String(import.meta.env.VITE_ENDPOINT),
    SERVICE_ID:String(import.meta.env.VITE_SERVICE_ID),
    TEMPLATE_ID:String(import.meta.env.VITE_TEMPLATE_ID),
    PUBLIC_KEY:String(import.meta.env.VITE_PUBLIC_KEY),
    RECIPIENTS_EMAIL:String(import.meta.env.VITE_RECIPIENTS_EMAIL),
    RECIPIENTS_NAME:String(import.meta.env.VITE_RECIPIENTS_NAME)
}
export default configure;