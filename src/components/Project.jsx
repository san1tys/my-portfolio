
function Project() {

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A modern e-commerce solution built with React and Node.js",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
            tech: ["React", "Node.js", "MongoDB"],
        },
        {
            title: "AI Dashboard",
            description: "Analytics dashboard with machine learning insights",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tech: ["Python", "TensorFlow", "React"],
        },
        {
            title: "Social Media App",
            description: "Real-time social platform with modern features",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            tech: ["React Native", "Firebase", "Redux"],
        },

    ]

    return (
        <div className="bg-gradient-to-b from-black to-purple-900 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover transfrom group-hover:scale-110 transition-transform duration-500"
                                        src={project.image}
                                        alt={project.title} />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project