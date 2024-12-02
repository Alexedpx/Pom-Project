import { PropsWithChildren } from "react"

function Layout({ children }: PropsWithChildren) {
    return (
        <div className="w-full h-screen text-tertiary-foreground border-2 border-red-500 flex flex-col bg-tertiary">
            {children}
        </div>
    )
}

function Header({ children }: PropsWithChildren) {
    return (
        <div className="border-2 border-blue-500 h-1/5  w-full flex justify-center items-center  ">
            {children}
        </div>
    )
}

function Content({ children }: PropsWithChildren) {
    return (
        <div className="border-2 border-green-500 flex text-center flex-grow w-full items-center justify-center">
            {children}
        </div>
    )

}

function Footer({ children }: PropsWithChildren) {
    return (
        <div className="border-2 border-pink-500 w-full h-1/4 flex flex-col justify-around">
            {children}
        </div>
    )

}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout;