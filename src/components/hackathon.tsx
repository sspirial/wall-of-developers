import { useState } from "react";
import "../App.css";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
const placeholderImg = "https://via.placeholder.com/150";

function Hackathon() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
  });

  const handleImageLoad = (imageName: string) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  const images = [
    { src: image1, alt: "Hackathon at SwahiliPot", id: "image1" },
    { src: image2, alt: "Developers collaborating", id: "image2" },
    { src: image3, alt: "Coding session", id: "image3" },
    { src: image4, alt: "Project presentation", id: "image4" },
  ];

  return (
    <div id="hackathon" className="hackathon-section">
      <div className="hackathon-container">
        <h1 className="hackathon-title">Hackathons at SwahiliPot</h1>
        <div className="hackathon-image-row">
          {images.map((image) => (
            <div key={image.id} className="hackathon-image-wrapper">
              {!imagesLoaded[image.id] && (
                <div className="hackathon-image-loading">
                  <span>Loading...</span>
                </div>
              )}
              <img
                src={image.src}
                alt={image.alt}
                className={
                  imagesLoaded[image.id]
                    ? "hackathon-image opacity-100"
                    : "hackathon-image opacity-0"
                }
                onLoad={() => handleImageLoad(image.id)}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = placeholderImg;
                  handleImageLoad(image.id);
                }}
              />
            </div>
          ))}
        </div>
        <div className="hackathon-text-container">
          <h2 className="hackathon-subtitle">About Our Hackathons</h2>
          <div className="hackathon-text">
            <p>
              SwahiliPot Hub hosts exciting hackathons that bring together
              talented developers, designers, and innovators from across Mombasa
              and beyond. These intensive coding events foster creativity,
              collaboration, and technological solutions to local and global
              challenges.
            </p>
            <p>
              Our hackathons typically run over 24-48 hours, where participants
              form teams to conceptualize and build innovative projects. With
              mentorship from industry experts and access to SwahiliPot's
              resources, participants transform ideas into functional
              prototypes.
            </p>
            <p>
              Past hackathons have focused on themes like sustainable
              development, healthcare innovation, and digital solutions for
              local businesses. These events have launched numerous startups and
              continue to nurture the next generation of tech talent on the
              Kenyan coast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
