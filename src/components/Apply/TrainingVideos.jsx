
export default function TrainingVideos() {
  
  return (
    <>
        <div className="video-container container mb2">
            <div className="header-box-second">Training Videos</div>
            <div className="videos">
                <iframe
                    width="30%"
                    height="315"
                    src="https://www.youtube.com/embed/or1WNPV5QZI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="30%"
                    height="315"
                    src="https://www.youtube.com/embed/A0wCPeJoBHk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="30%"
                    height="315"
                    src="https://www.youtube.com/embed/_gZ8zl8v214"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </>
  );
}