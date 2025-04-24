
-- Create a new bucket for project videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('project_videos', 'project_videos', true);

-- Create a policy to allow public read access
CREATE POLICY "Allow public read access to project videos" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'project_videos');
