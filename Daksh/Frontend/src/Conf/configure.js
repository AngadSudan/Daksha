const configure={
    Email:String(import.meta.env.VITE_EMAIL),
    Api_Key:String(import.meta.env.VITE_SENDGRID_API),
    Endpoint:String(import.meta.env.VITE_ENDPOINT)
}
export default configure;