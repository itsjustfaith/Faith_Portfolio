import { motion } from "framer-motion";

export default function Projects() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const staggerContainer = {
        initial: {}, // Stagger containers usually need an empty initial
        animate: {
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <motion.section
            id="projects"
            className="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Title is now separate */}
            <motion.h2 variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                My Projects
            </motion.h2>

            {/* Grid is a sibling to the h2 */}
            <motion.div
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {/* Project 1: E-Commerce */}
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('./src/assets/projects/ecommerce-project.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3> E-Commerce Website</h3>
                    <p>
                        A modern ecommerce website built with React.js. Includes home page,
                        cart view functionality, and search function.
                    </p>
                    <div className="project-tech">
                        <span>React.js</span>
                        <span>React Hooks</span>
                        <span>API</span>
                        <span>CSS3</span>

                    </div>
                </motion.div>

                {/* Project 2: Memory Card Game */}
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('./src/assets/projects/memory-card-game-project.jpg')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3>Memory Card Game</h3>
                    <p>
                        An interactive memory game application. Tracks user scores and moves,
                        demonstrating advanced state management in a React environment.
                    </p>
                    <div className="project-tech">
                        <span>React.js</span>
                        <span>Vite</span>
                        <span>CSS3</span>
                    </div>
                </motion.div>

                {/* Project 3: Movie4U */}
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('./src/assets/projects/movie4u-project.jpg')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3>Movie4U Discovery Platform</h3>
                    <p>
                        A comprehensive movie catalog featuring efficient search, filtering,
                        and personalization. Integrated with third-party movie APIs.
                    </p>
                    <div className="project-tech">
                        <span>React.js</span>
                        <span>OMDb API</span>
                        <span>CSS</span>
                    </div>
                </motion.div>

                {/* Project 4: Shake & Sip */}
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('./src/assets/projects/shakensip-cafe-project.jpg')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3>Shake & Sip Digital Cafe</h3>
                    <p>
                        A modern cafe web application with a premium tech stack, featuring
                        Google Maps API integration and a sophisticated state-managed cart.
                    </p>
                    <div className="project-tech">
                        <span>React.js</span>
                        <span>Tailwind CSS</span>
                        <span>Google Maps API</span>
                    </div>
                </motion.div>

            </motion.div>
        </motion.section>
    );
}