import React from 'react';
import 'antd/dist/antd.min.css';

export function UIWrapper({ children }: React.PropsWithChildren<{}>) {
  return <>{children}</>;
}
