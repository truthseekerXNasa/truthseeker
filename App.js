import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const TruthEquationFlow = () => {
  const [root1, setRoot1] = useState(false);
  const [root2, setRoot2] = useState(false);
  const [root3, setRoot3] = useState(false);
  const [fruit1, setFruit1] = useState(false);
  const [fruit2, setFruit2] = useState(false);
  const [fruit3, setFruit3] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">The Truth Equation</h1>
        <p className="text-lg text-gray-600">
          Wisdom starts with the fear of YHVH. True Science reveals the Creator.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Left Side: True Science */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">True Science</h2>
          <div className="space-y-4 w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setRoot1(!root1)}
              className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform"
            >
              Root: Creation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setRoot2(!root2)}
              className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform"
            >
              Root: Law
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setRoot3(!root3)}
              className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform"
            >
              Root: Wisdom
            </motion.button>
          </div>
          <div className="mt-8 text-center text-lg text-green-800">
            {root1 && <p>Fruit: Understanding of the Creator</p>}
            {root2 && <p>Fruit: Order and Purpose</p>}
            {root3 && <p>Fruit: Peace and Life</p>}
          </div>
        </div>

        {/* Right Side: False Science */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-red-700 mb-4">False Science</h2>
          <div className="space-y-4 w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFruit1(!fruit1)}
              className="w-full py-3 px-6 bg-red-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform"
            >
              Root: Pride
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFruit2(!fruit2)}
              className="w-full py-3 px-6 bg-red-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform"
            >
              Root: Vain Babblings
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFruit3(!fruit3)}
              className="w-full py-3 px-6 bg-red-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform"
            >
              Root: Falsely So-Called Knowledge
            </motion.button>
          </div>
          <div className="mt-8 text-center text-lg text-red-800">
            {fruit1 && <p>Fruit: Confusion and Deceit</p>}
            {fruit2 && <p>Fruit: Disorder and Fear</p>}
            {fruit3 && <p>Fruit: Death</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-8 py-4 px-6 bg-white shadow-md rounded-b-xl mb-6">
      <Link to="/" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">
        Home
      </Link>
      <Link to="/equation" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">
        The Equation
      </Link>
      <Link to="/about" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">
        About
      </Link>
      <Link to="/contact" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">
        Contact
      </Link>
    </nav>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center p-8 max-w-2xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        The Truth Equation
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome. This site explores the foundational principles of knowledge, contrasting what the Bible calls True Science with knowledge that is falsely so-called. Here, the roots and fruits of each are brought to light, revealing how all wisdom begins with the Creator.
      </p>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center p-8 max-w-2xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        About This Project
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        This project visually represents the eternal truths found in Scripture. True Science, defined by the order of creation, law, and wisdom, leads to an understanding of the Creator. False Science, rooted in pride and vain babblings, creates confusion and leads away from Him. The animated root system and fruit clusters are designed to show these parallel paths in a tangible, memorable way.
      </p>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-center p-8 max-w-2xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        If you have any questions or feedback, please reach out. This project is a work in progress, and your thoughts are greatly appreciated.
      </p>
      <div className="mt-6 space-y-2">
        <p>Email: example@email.com</p>
        <p>X: @example_user</p>
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 antialiased font-sans flex flex-col items-center">
        <Navbar />
        <main className="w-full flex-1 flex flex-col items-center p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equation" element={<TruthEquationFlow />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="w-full text-center py-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} The Truth Equation Project
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
