import { motion } from "framer-motion";
import { useState } from "react";




const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, success: false, error: false, message: "" });

        // Simulate form submission process
        setTimeout(() => {
            setFormStatus({
                submitting: false,
                success: true,
                error: false,
                message: "Message received! (EmailJS removed)",
            });
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <motion.section
            id="contact"
            className="contact"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <motion.h2 variants={fadeInUp}>
                Get in Touch
            </motion.h2>

            <motion.div className="contact-content" variants={fadeInUp}>
                <motion.form className="contact-form" onSubmit={handleSubmit}>
                    <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Your Name..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handleInputChange}
                    />
                    <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Your Email..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handleInputChange}
                    />
                    <motion.textarea
                        name="message"
                        value={formData.message}
                        placeholder="Your Message..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handleInputChange}
                    />

                    <motion.button
                        className="submit-btn"
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={formStatus.submitting}
                    >
                        {formStatus.submitting ? "Sending..." : "Send Message"}
                    </motion.button>

                    {formStatus.message && (
                        <motion.div
                            className={`form-status ${formStatus.success ? "success" : "error"}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {formStatus.message}
                        </motion.div>
                    )}
                </motion.form>
            </motion.div>
        </motion.section>
    );
};