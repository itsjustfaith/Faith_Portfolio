import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";



export default function Hero() {



    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },

    }

    const staggerContainer = {
        animate: {

            transition: { staggerChildren: 0.1, }
        }


    }
    return (
        <motion.section
            id="home"
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="hero-container">
                <motion.div className="hero-content"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate" >
                    <motion.div className="hero-badge">
                        <span> Hello , I am </span>
                    </motion.div>
                    <motion.h1 className="glitch"
                        variants={fadeInUp} whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}>
                        Faith Komolafe
                    </motion.h1>
                    <motion.h2 className="hero-subtitle"
                        variants={fadeInUp}>
                        Software Engineer
                    </motion.h2>
                    <motion.p className="hero-description"
                        variants={fadeInUp}>
                        I specialize in building clean, responsive user interfaces with React.js and CSS frameworks.
                        <br />I combine technical engineering discipline with an ideal foundation in UI/UX analysis and Agile methodologies to deliver high-performance, accessible web applications.
                    </motion.p>


                    <motion.div
                        className="cta-buttons" variants={"staggerContainer"}>
                        <motion.a href="#projects" className="cta-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}>
                            View My Work
                        </motion.a>
                        <motion.a href="#contact" className="cta-secondary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}>
                            Contact Me
                        </motion.a>


                    </motion.div>
                    <motion.div>
                        <motion.div className="social-links"
                            variants={staggerContainer}>
                            <motion.a href="https://github.com/itsjustfaith" animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                                {""}
                                <FiGithub />
                            </motion.a>
                            <motion.a href="www.linkedin.com/in/faith-komolafe" animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                                {""}
                                <FiLinkedin />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="code-display">
                        <SyntaxHighlighter
                            language="javascript"
                            customStyle={{
                                margin: 0,
                                padding: "2rem",
                                height: "100 %",
                                borderRadius: "20px",
                                background: " #11060eed",
                                backdropFilter: "blur(10px)",
                                marginBottom: 20,


                            }}
                            style={vscDarkPlus}>
                            {`const aboutMe: DeveloperProfile = {
codename: "Faith Komolafe",
origin: "🌍 Somewhere between a shawarma shop and a terminal",
role: "Software Engineer | Frontend Web Developer ",
stack: {
    languages: ["JavaScript", "TypeScript"],
    frameworks: ["React", "Next.js", "TailwindCSS"],
    backend: ["Node.js"]
    build:["Vite", "NPM"]
},
traits: [
    "pixel-perfectionist",
    "API whisperer",
    "media responsiveness advocate",
    "terminal aesthetic enthusiast",
],
missionStatement:
    "Turning ideas into interfaces and bugs into feature",
availability: "Available for hire",
};`}
                        </SyntaxHighlighter>
                    </div>
                    <motion.div className="floating-card" animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <div className="card-content">
                            <span className="card-icon">
                                💻
                            </span>
                            <span className="card-text">
                                Currently working on something cool!
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
