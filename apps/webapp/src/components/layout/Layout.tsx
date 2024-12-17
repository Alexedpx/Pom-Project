import { PropsWithChildren, ReactElement } from 'react'

function Layout({ children, background, svg }: PropsWithChildren<{ background: string; svg: ReactElement }>) {
  return (
    <div className={`w-full h-screen text-tertiary-foreground flex flex-col ${background}`}>
      <div className="w-full xl:hidden lg:hidden absolute top-0 left-0 z-0">{svg}</div>
      <div className="relative z-10 flex flex-col flex-grow px-8 py-10 ">{children}</div>
    </div>
  )
}

function Header({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`flex h-1/4 w-full justify-center items-center ${className}`}>{children}</div>
}

function Content({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`flex flex-col flex-grow w-full  ${className}`}>{children}</div>
}

function Section({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`flex flex-col w-full ${className}`}>{children}</div>
}

function Footer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`w-full flex  mt-auto justify-center items-center ${className}`}>{children}</div>
}

Layout.Header = Header
Layout.Section = Section
Layout.Content = Content
Layout.Footer = Footer

export default Layout
