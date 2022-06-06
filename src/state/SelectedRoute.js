import { atom } from "recoil";

const selectedRouteState = atom({
    key: 'selectedRoute',
    default: 'wallet_analyzer'
})

export default selectedRouteState;