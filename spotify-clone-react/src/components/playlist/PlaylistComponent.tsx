import { Playlist } from "../../custom-types/Types"

export const PlaylistComponent = (playlist: Playlist) => {
  return (
    <div className="song-card flex justify-center items-center">
        <img src={playlist.images[0].url} alt="" />
        {playlist.name}
    </div>
  )
}