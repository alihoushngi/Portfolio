import { useMediaQuery } from "react-responsive";
import { IBaseProps } from "src/types/types";

interface IBreackPointProps extends IBaseProps {}

export const Desktop = ({ children }: IBreackPointProps) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? <>{children}</> : null;
};
export const Tablet = ({ children }: IBreackPointProps) => {
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });
  return isTablet ? <>{children}</> : null;
};
export const Mobile = ({ children }: IBreackPointProps) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return isMobile ? <>{children}</> : null;
};
export const ExceptMobile = ({ children }: IBreackPointProps) => {
  const isGreaterThenMobile = useMediaQuery({ minWidth: 577 });
  return isGreaterThenMobile ? <>{children}</> : null;
};
