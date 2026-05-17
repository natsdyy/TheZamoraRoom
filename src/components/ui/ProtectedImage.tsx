import React from 'react';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="relative select-none w-full h-full overflow-hidden inline-block">
      {/* The Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} pointer-events-none select-none`}
        style={{
          WebkitUserDrag: 'none',
          WebkitTouchCallout: 'none',
        } as any}
        onContextMenu={(e) => e.preventDefault()}
        {...props}
      />
      
      {/* Invisible Overlay Shield */}
      <div 
        className="absolute inset-0 w-full h-full bg-transparent z-10 select-none cursor-default"
        onContextMenu={(e) => e.preventDefault()}
        style={{
          WebkitTouchCallout: 'none',
        } as any}
      />
    </div>
  );
};

export default ProtectedImage;
