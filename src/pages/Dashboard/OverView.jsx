import useUserData from "../../hooks/useUSerData"

export const OverView = () => {
  const user = useUserData()
  console.log("overview: ", user)
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-60 rounded-box w-[80% mx-auto] ">
          <img
            src={user?.photoURL ? user?.photoURL : "/src/assets/default user.jpg"}
            alt="user" className="w-[50%] h-[82%] rounded-box " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">
            {user?.name}
            
          </h2>
          <p> <span className="font-bold">Email :</span> {user?.email}</p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Role - {user?.role}</div> */}
            <div className="badge badge-secondary text-xl p-4 text-black font-bold ">{user?.role}</div>
            {/* <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>

    </div>
  )
}
