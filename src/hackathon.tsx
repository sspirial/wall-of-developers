import { useState } from 'react'
// Import images from the src/assets folder
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'
// Use an online placeholder image if the local file is missing
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

    return (
        <div className="w-full py-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-left">Hackathons at SwahiliPot</h1>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* Images Section */}
                    <div className="md:w-1/3 flex justify-center">
                        <div className="grid grid-cols-2 gap-3">
                            {images.map((image) => (
                                <div key={image.id} className="relative rounded-lg shadow-md overflow-hidden aspect-square">
                                    {!imagesLoaded[image.id] && 
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                            <span className="text-gray-500 text-sm">Loading...</span>
                                        </div>
                                    }
                                    <img 
                                        src={image.src}
                                        alt={image.alt}
                                        className={`w-full h-full object-cover transition-opacity duration-300 ${imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'}`}
                                        onLoad={() => handleImageLoad(image.id)}
                                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                            e.currentTarget.src = placeholderImg;
                                            handleImageLoad(image.id);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Text Section */}
                    <div className="md:w-2/3">
                        <p className="text-lg mb-4">
                            SwahiliPot Hub hosts exciting hackathons that bring together talented developers, 
                            designers, and innovators from across Mombasa and beyond. These intensive coding 
                            events foster creativity, collaboration, and technological solutions to 
                            local and global challenges.
                        </p>
                        <p className="text-lg mb-4">
                            Our hackathons typically run over 24-48 hours, where participants form teams to 
                            conceptualize and build innovative projects. With mentorship from industry experts 
                            and access to SwahiliPot's resources, participants transform ideas into 
                            functional prototypes.
                        </p>
                        <p className="text-lg">
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