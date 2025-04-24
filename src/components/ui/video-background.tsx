
import React from 'react';
import { createClient } from '@supabase/supabase-js';

interface VideoBackgroundProps {
  videoFileName: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!, 
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

const VideoBackground = ({ videoFileName }: VideoBackgroundProps) => {
  const { data } = supabase.storage.from('project_videos').getPublicUrl(videoFileName);

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
