// Auth component: To show user name, pending tasks and logout optons.

import { /*BellAlert, Bell,*/ Power } from '../icons/heroIcons/authBar';
import { useSelector } from 'react-redux';


const AuthBar = () => {

    const { auth } = useSelector(store => store);

    return (
        <div className="w-full font-bold bg-gray-500 dark:bg-slate-500 text-slate-400 flex justify-end items-center divide-x divide-slate-500">
            <div className="p-2">{ auth.name }</div>
            {/*<div className="p-2">
                <BellAlert />
            </div>*/}
            <div className="p-2">
                <Power />
            </div>
        </div>
    );
}

export { AuthBar };