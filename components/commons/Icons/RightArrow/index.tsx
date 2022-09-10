import { FaArrowRight } from "react-icons/fa";
import Icons from ".."


const RightArrow = ({className=''}) => {
    return (<>
    <Icons className={className}>
        <FaArrowRight />
    </Icons>
    </>)
}

export default RightArrow