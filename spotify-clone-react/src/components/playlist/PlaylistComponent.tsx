import { Playlist } from "../../custom-types/Types"

export const PlaylistCard = (playlist: Playlist) => {
  return (
    <div className="song-card">
        <img className="w-25" src={playlist.images[0].url} alt="" />
        <p>{playlist.name}</p>
    </div>
  )
}