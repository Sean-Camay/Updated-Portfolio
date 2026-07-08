export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  albumArt: string // URL to album cover
  url: string
}

export interface Playlist {
  id: string
  name: string
  tracks: Track[]
}
