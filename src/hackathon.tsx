import { useState, CSSProperties } from 'react'
import styles from './Hackathon.module.css'
// Import images from the src/assets folder
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'


const placeholderImg = 'https://via.placeholder.com/150';

function Hackathon() {
    const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({
        image1: false,
        image2: false,
        image3: false,
        image4: false
    });

    const handleImageLoad = (imageName: string) => {
        setImagesLoaded(prev => ({
            ...prev,
            [imageName]: true
        }));
    };

    const images = [
        { src: image1, alt: "Hackathon at SwahiliPot", id: "image1" },
        { src: image2, alt: "Developers collaborating", id: "image2" },
        { src: image3, alt: "Coding session", id: "image3" },
        { src: image4, alt: "Project presentation", id: "image4" }
    ];

    const imageContainerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '20px',
        flexWrap: 'nowrap'
    };    const imageStyle: CSSProperties = {
        flex: '1',
        maxWidth: '24%',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        aspectRatio: '1/1',
        transition: 'transform 0.2s ease',
        cursor: 'pointer'
    };const textContainerStyle: CSSProperties = {
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '30px',
        color: 'white'
    };

    return (
        <div className="w-full py-8">
            <div className="container mx-auto px-4">                <h1 className="text-3xl font-bold mb-6 text-left text-[#ff6b00]" style={{ fontFamily: "'Stencil Std', 'Black Ops One', sans-serif" }}>
                    Hackathons at SwahiliPot
                </h1>
                
                <div style={{
                    ...imageContainerStyle,
                    background: 'rgba(0, 0, 0, 0.7)',
                    padding: '20px',
                    borderRadius: '10px',
                }}>
                    {images.map((image) => (
                        <div key={image.id} style={imageStyle} className="relative">
                            {!imagesLoaded[image.id] && 
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                    <span className="text-gray-500 text-sm">Loading...</span>
                                </div>
                            }
                            <img 
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'opacity 300ms'
                                }}
                                className={imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'}
                                onLoad={() => handleImageLoad(image.id)}
                                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                    e.currentTarget.src = placeholderImg;
                                    handleImageLoad(image.id);
                                }}
                            />
                        </div>
                    ))}
                </div>
                
                {/* Text Section in a container */}
                <div style={textContainerStyle}>                    <h2 className="text-2xl font-semibold mb-4 text-[#ff6b00]" style={{ fontFamily: "'Stencil Std', 'Black Ops One', sans-serif" }}>
                        About Our Hackathons
                    </h2>
                    <div className="text-lg text-white">
                        <p className="mb-4">
                            SwahiliPot Hub hosts exciting hackathons that bring together talented developers, 
                            designers, and innovators from across Mombasa and beyond. These intensive coding 
                            events foster creativity, collaboration, and technological solutions to 
                            local and global challenges.
                        </p>
                        <p className="mb-4">
                            Our hackathons typically run over 24-48 hours, where participants form teams to 
                            conceptualize and build innovative projects. With mentorship from industry experts 
                            and access to SwahiliPot's resources, participants transform ideas into 
                            functional prototypes.
                        </p>
                        <p>
                            Past hackathons have focused on themes like sustainable development, 
                            healthcare innovation, and digital solutions for local businesses. 
                            These events have launched numerous startups and continue to nurture 
                            the next generation of tech talent on the Kenyan coast.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hackathon