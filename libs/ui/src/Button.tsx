import React from 'react';
import { Button as MUIButton } from '@mui/material';

export function Button({
  children,
  onClick,
}: React.PropsWithChildren<{ onClick(): void }>) {
  return (
    <MUIButton variant="contained" fullWidth onClick={onClick}>
      {children}
    </MUIButton>
  );
}
