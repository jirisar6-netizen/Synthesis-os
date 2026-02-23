import React from 'react';
import { getGridStyles } from './Grid_Engine';

interface GridContainerProps {
  gridCols: number;
  children: React.ReactNode;
}

export const GridContainer: React.FC<GridContainerProps> = ({ gridCols, children }) => {
  return (
    <main style={{ ...getGridStyles(gridCols), zIndex: 1, opacity: 1 }}>
      {children}
    </main>
  );
};
