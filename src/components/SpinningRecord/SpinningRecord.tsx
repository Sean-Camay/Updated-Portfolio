import './SpinningRecord.css'

export const SpinningRecord = () => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className='relative w-48 h-48 rounded-full bg-black spin-slow'
        style={{
          backgroundImage: `
          radial-gradient(circle at center, #000 50%, #000 100%),
          repeating-radial-gradient(
            circle at center,
            transparent 0px,
            transparent 4px,
            rgba(255, 255, 255, 0.05) 4px,
            rgba(255, 255, 255, 0.05) 6px
          )
        `,
          backgroundSize: '100% 100%',
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center'>
            {' '}
            <svg viewBox='0 0 100 100' width='100%' height='100%'>
              <defs>
                <path
                  id='circle'
                  d='M 50, 50
                     m -25, 0
                     a 25, 25 0 1, 1 50, 0
                     a 25, 25 0 1, 1 -50, 0'
                />
              </defs>
              <text fontSize='14px'>
                <textPath xlinkHref='#circle' startOffset='0%'>
                  S H O W T I M E
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
