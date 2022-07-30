import { BoxSkeleton, BoxStyle } from "./style"

export const BoxLoad = () => {
    return (
        <BoxStyle>
            <BoxSkeleton animation="wave" />
            <BoxSkeleton animation="wave" />
            <BoxSkeleton animation="wave" />
        </BoxStyle>
    )
}