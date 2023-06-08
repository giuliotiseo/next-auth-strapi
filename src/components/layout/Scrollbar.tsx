import { FC } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Scrollbar:FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SimpleBar style={{ height: '100%' }}>
      { children }
    </SimpleBar>
  )
};

export default Scrollbar;