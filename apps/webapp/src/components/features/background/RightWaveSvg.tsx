import React from 'react'

interface SvgComponentProps {
  fill?: string
  width?: string
  height?: string
  className?: string
}

const RightWaveSvg: React.FC<SvgComponentProps> = ({
  fill = '#364861',
  width = '100%',
  height = 'auto',
  className = 'object-cover',
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 402 340"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // className="animate-wave2"
        d="M404.997 251.858C404.47 207.882 323.109 165.076 -0.189009 340L-15 0H404.997V251.858C405.001 252.146 405.001 252.435 404.997 252.723V251.858Z"
        fill={fill}
      />
    </svg>
  )
}

export default RightWaveSvg
