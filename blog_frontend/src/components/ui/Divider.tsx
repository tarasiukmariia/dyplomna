import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => (
  <hr className={`border-t border-[#b87333] dark:border-[#b87333] my-4 ${className}`} />
);

export default Divider;
