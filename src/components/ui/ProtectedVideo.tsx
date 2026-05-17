import React, { useRef } from 'react';

interface ProtectedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const ProtectedVideo: React.FC<ProtectedVideoProps> = ({ 
  src, 
  className = '', 
  ...props 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative select-none w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className={`${className} pointer-events-none`}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        onContextMenu={(e) => e.preventDefault()}
        style={{
          WebkitTouchCallout: 'none',
          WebkitUserDrag: 'none',
        } as any}
        {...props}
      />
      {/* Transparent shield over the video to block direct clicks/interactions */}
      <div 
        className="absolute inset-0 w-full h-full bg-transparent z-10"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default ProtectedVideo;
