import { PropsWithChildren } from "react"
import BgDefault from '../../assets/background/BgDefault.png'
// import BgVhappy from '../../assets/background/BgVhappy.png'
// import BgHappy from '../../assets/background/BgHappy.png'
// import BgSad from '../../assets/background/BgSad.png'
// import BgAngry from '../../assets/background/BgAngry.png'

function Layout({ children }: PropsWithChildren) {
    return (
        <div className="relative w-full h-screen text-tertiary-foreground flex flex-col bg-tertiary">
            <img src={BgDefault} alt="Background" className="absolute top-0 left-0 w-full h-auto" />
            {children}
        </div>
    )
}

function Header({ children }: PropsWithChildren) {
    return (
        <div className="absolute h-1/4  w-full flex justify-center items-center  ">
            {children}
        </div>
    )
}

function Content({ children }: PropsWithChildren) {
    return (
        <div className="flex text-center flex-grow w-full items-center justify-center pt-48 ">
            {children}
        </div>
    )

}

function Footer({ children }: PropsWithChildren) {
    return (
        <div className=" w-full h-1/4 flex flex-col justify-evenly">
            {children}
        </div>
    )

}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout;