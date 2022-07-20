import HeaderItem from "./HeaderItem";
import { HomeIcon, CollectionIcon, ServerIcon, PlusIcon } from "@heroicons/react/outline";
import SideAuth from "./SideAuth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getAllItems } from "~client/store/slices/itemActions";
function Header() {
  const router = useRouter();
  const dispatch = useDispatch()
  const click = () => {
    router.push('/MyPages/createCategory')
  }

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Menu" Icon={CollectionIcon} click={() => { dispatch(getAllItems()) }} />
        <HeaderItem title="Add" Icon={PlusIcon} click={click} />
        <HeaderItem title="Server" Icon={ServerIcon} />
      </div>
      <SideAuth />
    </header>
  )
}



export default (Header)
