import { topDealUsers } from "./data"

const Topdeals = () => {
  return (
    <div className="text-soft-color">
      <h1 className="text-2xl font-bold mb-4">Top Deals</h1>
      {
        topDealUsers.map((users) =>(
          <div className="p-2 flex " key={users.id}>
            <img src={users.img} className="w-10 h-10 mr-4 rounded-full object-cover" alt="" />
            <div className="flex w-full justify-between">
            <div className="">
            <h1 className="text-sm">{users.username}</h1>
            <h4 className="text-xs">{users.email}</h4>
            </div>
            <span className="flex items-center justify-end">₹{users.amount}</span>
            </div>
          </div>  
        ) )
      }
      <img></img>
    </div>
  )
}

export default Topdeals
