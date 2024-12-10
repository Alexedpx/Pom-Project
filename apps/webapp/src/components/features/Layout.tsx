import { PropsWithChildren, ReactElement } from 'react'

function Layout({ children, background, svg }: PropsWithChildren<{ background: string; svg: ReactElement }>) {
  return (
    <div className={` w-full h-screen text-tertiary-foreground flex flex-col ${background} relative`}>
      <div className="absolute w-full xl:h-[50%] ">{svg}</div>
      {children}
    </div>
  )
}

function Header({ children, className }: PropsWithChildren<{ className: string }>) {
  return <div className={className}>{children}</div>
}

function Content({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`flex  ${className}`}>{children}</div>
}

function Footer({ children }: PropsWithChildren) {
  return <div className="w-full h-1/4 flex flex-col justify-evenly">{children}</div>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout
