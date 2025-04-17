import type { PropsUserPreview } from "../../custom-types/Types"

const UserPreviewCard = ({user}: PropsUserPreview) => {
    
  return (
    <div className="bg-gray-400 flex">
        <img className="rounded-b-full" src={user?.profilePic} alt="" />
    </div>
  )
}

export default UserPreviewCard
