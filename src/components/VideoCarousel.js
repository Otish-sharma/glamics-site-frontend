// import React from "react";
// import Slider from "react-slick";
// import { Play } from "lucide-react"; // play icon

// const VideoCarousel = () => {
//   const items = [
//     { type: "video", src: "https://www.youtube.com/embed/qYNweeDHiyU" },
//     { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmipVnva8IDzOdLoFR9IfQnJE_7WNqy2tNyg&s" },
//     { type: "image", src: "https://via.placeholder.com/800x400?text=Image+2" },
//     { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: false,
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-4">
//       <Slider {...settings}>
//         {items.map((item, index) => (
//           <div key={index} className="relative">
//             {/* For videos */}
//             {item.type === "video" ? (
//               <div className="relative rounded-2xl overflow-hidden">
//                 <video
//                   className="w-full h-[400px] object-cover rounded-2xl"
//                   poster="https://via.placeholder.com/800x400?text=Video+Thumbnail"
//                 >
//                   <source src={item.src} type="video/mp4" />
//                 </video>
//                 {/* Play Button Overlay */}
//                 <button className="absolute inset-0 flex items-center justify-center">
//                   <span className="bg-white rounded-full p-4 shadow-lg">
//                     <Play className="text-red-500 w-8 h-8" />
//                   </span>
//                 </button>
//               </div>
//             ) : (
//               // For images
//               <img
//                 src={item.src}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[400px] object-cover rounded-2xl"
//               />
//             )}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VideoCarousel;
import React, { useRef } from "react";
import Slider from "react-slick";
import { Play } from "lucide-react"; // play icon

const VideoCarousel = () => {
  const items = [
    { type: "video", src: "https://www.youtube.com/watch?v=qYNweeDHiyU" }, // YouTube URL
    { type: "image", src: "https://t4.ftcdn.net/jpg/03/39/60/67/360_F_339606710_pFQOII8MwyEVqXK5vb4XsIaJr13cipWO.jpg" },
    // { type: "image", src: "https://via.placeholder.com/800x400?text=Image+2" },
    // { type: "video", src: "https://www.w3schools.com/html/movie.mp4" }, // Direct video file
  ];

  const videoRefs = useRef([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  // Function to check if a URL is a YouTube URL
  const isYouTubeUrl = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };

  // Function to play video when play button is clicked
  const handlePlayVideo = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      video.parentElement.querySelector(".play-button").style.display = "none"; // Hide play button
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="relative">
            {item.type === "image" ? (
              // For images
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            ) : (
              // For videos (YouTube or direct)
              <div className="relative rounded-2xl overflow-hidden">
                {isYouTubeUrl(item.src) ? (
                  // YouTube video
                  <iframe
                    className="w-full h-[400px] rounded-2xl"
                    src={getYouTubeEmbedUrl(item.src)}
                    title={`YouTube video ${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // Direct video file
                  <div className="relative">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="w-full h-[400px] object-cover rounded-2xl"
                      poster="https://via.placeholder.com/800x400?text=Video+Thumbnail"
                      controls={false}
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Play Button Overlay */}
                    <button
                      className="play-button absolute inset-0 flex items-center justify-center"
                      onClick={() => handlePlayVideo(index)}
                    >
                      <span className="bg-white rounded-full p-4 shadow-lg">
                        <Play className="text-red-500 w-8 h-8" />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel