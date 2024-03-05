import '../App.css'


const Navbar = () => {
  return (
    <div className="navbar bg-main-bg text-white flex justify-between p-3">
      <div className="flex items-center">
        <img  src="logo.svg" alt="" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons flex gap-5 mx-10">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="relative flex">
          <img className='' src="/notifications.svg" alt="" />
          <span className='absolute -top-2 -right-4 w-5 h-5 flex items-center justify-center rounded-full bg-red-600'>1</span>
        </div>
        <div className="flex items-center gap-4">
          <img className='w-10 h-10 rounded-full object-cover'
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Nishanth</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
 