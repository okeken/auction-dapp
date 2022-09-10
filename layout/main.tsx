import {ReactNode} from "react"
import Header from "./header";

interface IProps {
    children: ReactNode;
}
const MainLayout = ({children}:IProps) => {
    // const { children } = props;
    return <>
    <Header />
    {children}
    footer
    </>
}



export default MainLayout