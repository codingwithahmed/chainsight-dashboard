import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { login, register } from '../../services/Authentication';
import authenticationState from '../../state/Authentication';
import {AuthRouter} from '../../state/DashbaordRouter'


const Input = ({placeholder,value,changeValue,img}) => {
    return <div className='lg:border-[0.5px] border-[0.15px] my-3 lg:my-4  mx-2 rounded border-slate-900 flex flex-row text-slate-900 px-4 py-2'>
             <img alt='' src={`/Icons/${img}.png`} className='w-[25px] mr-2' />
            <input value={value} onChange={(e) => {
                changeValue(e.target.value)
            }} placeholder={placeholder} className='w-full border-none outline-none bg-transparent' />
    </div>
}

export default function Index() {
    const [authRouter,setAuthRouter] = useRecoilState(AuthRouter)
     const [authentication, setAuthentication] = useRecoilState(authenticationState)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')
    const [registerFirstName, setRegisterFirstName] = useState('')
    const [registerLastName, setRegisterLastName] = useState('')


    /* ======== Register Function ======== */
    async function onClickRegister () {

      
        if (registerPassword === registerConfirmPassword) {
            let result = await register(registerEmail, registerFirstName, registerLastName, registerPassword)

            setRegisterEmail('')
            setRegisterConfirmPassword('')
            setRegisterFirstName('')
            setRegisterLastName('')
            setRegisterPassword('')

            console.log(result)

            if (result !== false) {
                login(registerEmail, registerPassword)
            }

                window.location.reload(); 


        }
     
        } 
    /* ================================== */    


     /* ======== Login Function ======== */
     async function onClickLogin () {
      
        let result = await  login(loginEmail, loginPassword)
        if (result !== false) {
          setAuthentication(true)
        }

        setLoginEmail('')
        setLoginPassword('')
    
/*         window.location.reload(); 
 */    } 
    /* ================================== */ 






   
    if(authRouter) { 
       return <section className='bg-slate-900 text-white w-screen h-screen justify-around items-center lg:p-1 flex-col lg:flex-row flex'>


        <div className='flex-col flex justify-between items-center'>

            <div className='flex flex-col justify-evenly shadow shadow-slate-100 bg-slate-100 py-4 lg:py-24 px-6 lg:px-36 rounded-xl'>
                    
                    <h1 className='text-center text-xl  lg:text-3xl font-semibold text-slate-900'> Login</h1>

                    <Input placeholder={'Email'} img={'mail'} value={loginEmail} changeValue={setLoginEmail} />
                    <Input placeholder={'Password'} img={'lock'} value={loginPassword} changeValue={setLoginPassword} />

                    <div className='flex flex-col md:flex-row justify-between items-center'>
                            <button className='bg-slate-800 hover:bg-slate-900 rounded-3xl px-10 lg:py-4 py-3' onClick={onClickLogin}>
                                Login
                            </button>

                            <p className='text-slate-700 mx-8'>Not a member? <span className='font-semibold cursor-pointer hover:text-slate-900' onClick={() => setAuthRouter(!authRouter)}>Register</span></p>
                    </div>
            </div>
        </div>

    </section>
    }

  return (
    <section className='bg-slate-900 text-white w-screen h-screen justify-around items-center lg:p-1 flex-col lg:flex-row flex'>


        <div className='flex-col flex justify-between items-center'>

            <div className='flex flex-col justify-evenly shadow shadow-slate-100 bg-slate-100 py-4 lg:py-24 px-6 lg:px-36 rounded-xl'>
                    
                    <h1 className='text-center text-xl  lg:text-3xl font-semibold text-slate-900'> Register Now</h1>

                    <div className='flex flex-col  md:flex-row'>
                        <Input placeholder={'First Name'} value={registerFirstName} changeValue={setRegisterFirstName} img={'person'}/>
                        <Input placeholder={'Last Name'} value={registerLastName} changeValue={setRegisterLastName}  img={'person'} />
                    </div>
                    
                    <Input placeholder={'Email'} value={registerEmail} changeValue={setRegisterEmail} img={'mail'} />
                    <Input placeholder={'Password'} value={registerPassword} changeValue={setRegisterPassword} img={'lock'} />
                    <Input placeholder={'Confirm Password'} value={registerConfirmPassword} changeValue={setRegisterConfirmPassword} img={'lock'} />

                    <div className='flex flex-col md:flex-row justify-between items-center'>
                            <button className='bg-slate-800 hover:bg-slate-900 rounded-3xl px-10 lg:py-5 py-3' onClick={onClickRegister}>
                                Register
                            </button>

                            <p className='text-slate-700'>Already a member? <span className='font-semibold cursor-pointer hover:text-slate-900'  onClick={() => setAuthRouter(!authRouter)} >Login</span></p>
                    </div>
            </div>
        </div>

    </section>
  )
}
