import { atom } from "recoil";

export const DashboardRouter = atom({
    key: 'dashboardRouter',
    default: 'home'
})

export const Token = atom({
    key: 'token',
    default :false
})

export const AuthRouter = atom({
    key : "authRouter",
    default : 'register'
})