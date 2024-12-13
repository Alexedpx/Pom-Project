import { PropsWithChildren, ReactElement } from 'react'

function Layout({ children, background, svg }: PropsWithChildren<{ background: string; svg: ReactElement }>) {
  return (
    <div className={`w-full h-screen text-tertiary-foreground flex flex-col ${background} relative`}>
      <div className="w-full xl:hidden lg:hidden absolute top-0 left-0 z-0">{svg}</div>
      <div className="relative z-10 flex-grow w-full">{children}</div>
    </div>
  )
}

function Header({ children }: PropsWithChildren) {
  return <div className="flex w-full relative  h-1/3 justify-center items-center">{children}</div>
}

function Content({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-grow w-full h-[45%] text-center justify-center items-center">{children}</div>
  )
}

function Footer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`w-full flex items-center flex-grow- mt-auto ${className}`}>{children}</div>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout
