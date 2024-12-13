import React from 'react'

interface SvgComponentProps {
  fill?: string
  width?: string
  height?: string
  className?: string
}

const MoodSvg: React.FC<SvgComponentProps> = ({
  fill = '#685176',
  width = '100%',
  height = 'auto',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 401 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        className="animate-wave"
        d="M0.00259399 248.858C0.530426 204.882 81.8907 162.076 405.189 337L420 -3H0.00259399V248.858C-0.000854492 249.146 -0.000854492 249.435 0.00259399 249.723V248.858Z"
        fill={fill}
      />
    </svg>
  )
}

export default MoodSvg
