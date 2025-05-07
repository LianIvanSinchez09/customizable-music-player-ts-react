import { useContext } from "react"
import type { PropsUserPreview } from "../../custom-types/Types"
import { tokenContext } from "../auth/Login"

const UserPreviewCard = ({ user }: PropsUserPreview) => {
  const token = useContext(tokenContext);

  return token ? (
    <div className="absolute bottom-0 bg-gray-600 rounded-full m-3">
      <div className="flex items-center p-2 m-1">
        <p className="text-xs">Logged as: {user?.email}</p>
        <div className="userpreview-image">
          <img className="rounded-full" src={user?.profilePic} alt="" />
        </div>
      </div>
    </div>
  ) : null;
};

export default UserPreviewCard
