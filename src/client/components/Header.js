import HeaderItem from "./HeaderItem";
import { HomeIcon, CollectionIcon, BadgeCheckIcon, ServerIcon } from "@heroicons/react/outline";
import SideAuth from "./SideAuth";
function Header() {
 
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Collection" Icon={CollectionIcon} />
        <HeaderItem title="Bagde" Icon={BadgeCheckIcon} />
        <HeaderItem title="Server" Icon={ServerIcon} />
      </div>
      <SideAuth/>
      {/* <Image className="object-contain" src='https://links.papareact.com/ua6' height={100} width={200} /> */}
    </header>
  )
}



export default (Header)
