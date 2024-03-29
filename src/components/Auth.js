import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { LockClosedIcon, QueueList } from '../icons/heroIcons/auth';
import { LockClosedIcon } from '../icons/heroIcons/auth';
import { login, setErrorMsg } from '../redux/features/auth/authSlice';
import logo from '../assets/tama20050.png';

// Login / Register Dialog
const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { auth } = useSelector(store => store);
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        if ((email.length < 9) || (password < 5)) {
            dispatch(setErrorMsg("Email or Password is invalid"));
        } else {
            dispatch(login({email, password}));
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (

        <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
            <div className="flex flex-col justify-center items-center">
                {/*<div className="flex justify-center text-5xl text-[#24478f]/80">
                    <QueueList />
                    <span className="italic text-red-400">TASK MANAGER</span>
                </div>*/}
                <div className="w-[150px] h-auto">
                    <img src={logo} alt="TaskManager logo"/>
                </div>
                <h2 className="mt-2 text-center text-3xl tracking-tight text-gray-400">
                { auth.errorMsg ? <span className="text-red-300 text-xl">{ auth.errorMsg }</span> : <span className="text-xl">Sign in to your account</span>}
                </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            onChange={handleEmail}
                            autoComplete="email"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#24478f]/30 focus:outline-none focus:ring-[#24478f]/30 sm:text-sm"
                            placeholder="Email"
                        />
                    </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handlePassword}
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#24478f]/30 focus:outline-none focus:ring-[#24478f]/30 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#24478f]/80 py-2 px-4 text-sm font-medium text-gray-300 hover:bg-[#24478f]/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-gray-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        SIGN IN
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
}

export { Auth };