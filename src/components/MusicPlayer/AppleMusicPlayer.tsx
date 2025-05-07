interface AppleMusicPlayerProps {
  id: string
  kind: 'album' | 'artist' | 'playlist'
  slug: string
  country?: string
  height?: number
}

export const AppleMusicPlayer = ({
  id,
  kind,
  country = 'us',
  slug,
  height = kind === 'album' ? 450 : 450,
}: AppleMusicPlayerProps) => {
  // const source = `https://embed.music.apple.com/${country}/${kind}/slug/id${id}`
  const source = `https://embed.music.apple.com/${country}/${kind}/${slug}/${id}`

  return (
    <iframe
      title={`Apple Music ${kind} ${id}`}
      allow='autoplay *; encrypted-media *; clipboard-write'
      frameBorder={0}
      height={height}
      style={{
        width: '50%',
        maxWidth: '660',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
      sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
      src={source}
    ></iframe>
  )
}
