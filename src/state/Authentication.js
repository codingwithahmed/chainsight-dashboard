import { atom } from "recoil";

const authenticationState = atom({
    key: 'authentication',
    default: false
})

export default authenticationState