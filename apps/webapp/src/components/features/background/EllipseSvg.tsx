import React from 'react'

interface SvgComponentProps {
  fill?: string
  width?: string
  height?: string
  className?: string
}

const EllipseSvg: React.FC<SvgComponentProps> = ({
  fill = '#364861',
  width = '100%',
  height = 'auto',
  className = 'object-cover',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 402 325"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="201" cy="80" r="245" fill={fill} />
    </svg>
  )
}

export default EllipseSvg
