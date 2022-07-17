import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { logout } from "~client/store/slices/userSlice";
import { AppState } from "~client/store/store";
function SideAuth(props: any) {
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <>
            {props.user.userInfo && props.user.userInfo !== null ? <div className="flex items-center bg-slate-700 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2" onClick={() => dispatch(logout())}>

                <UserCircleIcon className="h-8 mb-1 group-hover:animate-bounce pr-2" />
                <h2>{props.user.userInfo?.email}</h2>
                <ChevronDownIcon className="h-5 w-5" />
            </div> : <div className="flex items-center bg-slate-700  opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2" onClick={() => router.push('/MyPages/signup')}>
                <UserCircleIcon className="h-8 mb-1 group-hover:animate-bounce pr-2" /> Login
            </div>}
        </>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
});

export default connect(mapStateToProps)(SideAuth)