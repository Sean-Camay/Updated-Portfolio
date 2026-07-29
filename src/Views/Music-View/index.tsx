import { Header } from '../../components/Header/HeaderComponent'
import { MyMusicShop } from '../../components/MusicPlayer/MyMusicShop'
import {
  PlaylistPlayer,
  PlaylistPlayerRef,
} from '../../components/MusicPlayer/PlaylistPlayer'
import { Footer } from '../../components/Footer/FooterComponent'
import { useTracklist } from '../../hooks/useTracklist'
import { useRef } from 'react'

export const MusicView = () => {
  const { tracks, loading, error } = useTracklist()

  const playerRef = useRef<PlaylistPlayerRef>(null)

  const handleTrackClick = (trackId: string) => {
    if (playerRef.current) {
      playerRef.current.playTrack(trackId)
    }
  }

  return (
    <div className='flex flex-col bg-[#FFFCF9] w-screen h-screen'>
      <Header />
      <div className='flex-1 overflow-y-auto pb-96'>
        <MyMusicShop
          loading={loading}
          error={error}
          onTrackClick={handleTrackClick}
        />
      </div>
      {tracks.length > 0 && (
        <div className='border-t border-gray-200 bg-white'>
          <PlaylistPlayer tracks={tracks} ref={playerRef} />
        </div>
      )}
      <Footer />
    </div>
  )
}
