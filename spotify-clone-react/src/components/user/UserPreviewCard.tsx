import type { PropsUserPreview } from "../../custom-types/Types"

const UserPreviewCard = ({user}: PropsUserPreview) => {
    
  return (
    <div className="absolute bottom-0 bg-gray-600 rounded-full m-3">
      <div className="flex  items-center p-2 m-1">
        {
          user ?         
          <>
            <p className="text-xs">Logged as: {user?.email}</p>
            <div className="userpreview-image">
              <img className="rounded-full" src={user?.profilePic} alt="" />
            </div>
          </>
          :
          <p className="text-xs">Cargando usuario...</p>
        }


      </div>
    </div>
  )
}

export default UserPreviewCard
