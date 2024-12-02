import { PropsWithChildren } from "react"

function Layout({ children }: PropsWithChildren) {
    return (
        <div className="w-full h-full flex">
            {children}
        </div>
    )
}

function Header() {
    return (
        <div className="w-full">
        </div>
    )
}

function Content() {
    return (
        <div className="w-full flex flex-grow ">
        </div>
    )

}

function Footer() {
    return (
        <div className="w-full">
        </div>
    )

}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout;