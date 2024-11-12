"use client";
import Card from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const journey = [
  // experience
  {
    type: "experience",
    company: "ABC",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "XXX",
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "experience",
    company: "ABC",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "XXX",
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "experience",
    company: "ABC",
    logoUrl: "/assets/journey/experience/logo-3.svg",
    position: "XXX",
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "experience",
    company: "ABC",
    logoUrl: "/assets/journey/experience/logo-4.svg",
    position: "XXX",
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // education
  {
    type: "education",
    institution: "ABCD",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "XXX",
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "education",
    institution: "ABCD",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "XXX",
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "education",
    institution: "ABCD",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "XXX",
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // skills
  {
    type: "skill",
    name: "ABC",
    icon: <FaHtml5 />,
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "ABC",
    icon: <FaCss3Alt />,
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "ABC",
    icon: <FaJs />,
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "ABC",
    icon: <FaReact />,
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "ABC",
    icon: <FaWordpress />,
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "ABC",
    icon: <FaFigma />,
    duration: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const Cards = () => {
  return (
    <div>
      <Tabs
        defaultValue='experience'
        className='w-full flex flex-col items-center'
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {journey.filter((item) =>
                item.type === "experience").map((card, index) => {
                  return <Card key={index} {...card} />
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {journey.filter((item) =>
                item.type === "education").map((card, index) => {
                  return <Card key={index} {...card} />
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {journey.filter((item) =>
                item.type === "skill").map((card, index) => {
                  return <Card key={index} {...card} />
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Cards