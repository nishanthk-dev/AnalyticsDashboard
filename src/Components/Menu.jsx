import { Link } from "react-router-dom"
import {menu} from './data'
import '../index.css'


const Menu = () => {
  return (
    <div className="bg-main-bg text-white ">
      {menu.map((item) => (
        <div className=" border-r-2 border-soft-bg text-soft-color " key={item.id}>
          <span className="text-xs uppercase p-2 ">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="flex py-1 px-6 hover:bg-soft-bg" key={listItem.id}>
              <img className="p-1" src={listItem.icon} alt="" />
              <span className=" p-1 listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu
