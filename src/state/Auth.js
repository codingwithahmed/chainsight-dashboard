import {atom} from 'recoil'
const authState = atom({
key: 'auth',
default: false
})

export default authState