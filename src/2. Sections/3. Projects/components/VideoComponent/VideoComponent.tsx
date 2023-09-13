interface VideoComponentProps {
    video: string;
    thumbnail: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ video, thumbnail }) => {
    return(
        <video controls className="rounded-[16px]" poster={thumbnail}>
            <source src={video}/>
        </video>
    )
}

export default VideoComponent;