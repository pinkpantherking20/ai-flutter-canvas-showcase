
import React from 'react';
import { supabase } from "@/integrations/supabase/client";

interface VideoBackgroundProps {
  videoFileName: string;
}

const VideoBackground = ({ videoFileName }: VideoBackgroundProps) => {
  const { data } = supabase.storage.from('projectvideos').getPublicUrl(videoFileName);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={data.publicUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
