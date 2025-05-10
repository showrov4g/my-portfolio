import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="EduGenie – Smart Learning. Smarter Teaching"
          des="EduGenie is an AI-driven educational platform that personalizes learning for students and empowers educators with dynamic tools, all through a secure, responsive, and modern interface."
          listItem={["Next.js", "Tailwind CSS", "next-auth","mongodb","Framer Motion", "DaisyUI"]}
          link="https://genies-two.vercel.app/"
        />
       
        <ArchiveCard
          title="Lawyers services"
          des=" This Law Service website allows lawyers to add and manage their services, while users can sign up via email or Google, log in, book legal services, and manage their bookings with ease."
          listItem={["React.js", "Tailwind CSS", "Daisyui","firebase"]}
          link="https://assignment11-495e5.web.app/"
        />
        <ArchiveCard
          title="Orchid MOVIE PORTAL"
          des=" The website Orchid is a dynamic movie portal where users can browse trending, popular, and top-rated films with detailed information. It features a responsive design and smooth navigation, offering an engaging experience for movie lovers."
          listItem={["Reactjs", "Tailwind CSS", "DasiUi"]}
          link="https://assaignment10.web.app/"
        />
         <ArchiveCard
          title="hostel management website"
          des=" This website allows students to register, choose customized meals, subscribe to premium plans, receive meal notifications, while admins can manage meals, users, and roles through a powerful admin dashboard."
          listItem={["Reactjs", "Tailwind CSS", "Firebase"]}
          link=" https://ssaignment12.web.app/"
        />
        <ArchiveCard
          title="To-do list maker application"
          des=" This application allows users to add, manage, and organize their tasks with drag-and-drop functionality using React DnD. Built with React, Tailwind, MongoDB, WebSocket, and Firebase for authentication and hosting — check out the live site here."
          listItem={["React.js", "Tailwind CSS", "Firebase"]}
          link="https://todo-task-4d852.web.app/"
        />
        <ArchiveCard
          title="Eco-Adventure Experiences"
          des=" This Travel Blog website provides users with detailed information about a wide range of destinations. Whether it's popular tourist spots or hidden gems, users can discover unique places to visit and plan their next adventure."
          listItem={["Reactjs", "Tailwind CSS", "Firebase"]}
          link="https://assaignment9.web.app/"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
            
            </motion.div>
           
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
