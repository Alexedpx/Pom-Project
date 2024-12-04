import { PropsWithChildren } from "react";

function Layout({ children, background, vector }: PropsWithChildren<{ background: string, vector: string }>) {
    return (
        <div className={`relative w-full h-screen text-tertiary-foreground flex flex-col ${background}`}>
            <img
                src={`${vector}`}
                alt="Background"
                className="absolute top-0 left-0 w-full h-auto xl:hidden"
            />
            {children}
        </div>
    );
}

function Header({ children }: PropsWithChildren) {
    return (
        <div className="absolute h-1/3 w-full flex justify-center items-center flex-col">
            {children}
        </div>
    );
}

function Content({ children }: PropsWithChildren) {
    return (
        <div className="flex text-center flex-grow w-full items-center mt-52 justify-center">
            {children}
        </div>
    );
}

function Footer({ children }: PropsWithChildren) {
    return (
        <div className="w-full h-1/4 flex flex-col justify-evenly">
            {children}
        </div>
    );
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
