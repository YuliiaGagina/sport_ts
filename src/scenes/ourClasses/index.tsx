import { ClassType, SelectedPage } from "@/shared/types";
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'

import image3 from '@/assets/image3.png'

import image4 from '@/assets/image4.png'

import image5 from '@/assets/image5.png'

import image6 from '@/assets/image6.png'
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from './Class';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const classes : Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Beyond the physical gains, the gym is a sanctuary for mental and emotional well-being. ",
        image: image1,
    },
      {
        name: "Fitness Training Classes",
        description: "Beyond the physical gains, the gym is a sanctuary for mental and emotional well-being. ",
        image: image2,
    },  {
        name: "Yoga Training Classes",
        description: "Beyond the physical gains, the gym is a sanctuary for mental and emotional well-being. ",
        image: image3,
    },  {
        name: "CrossFit Training Classes",
        description: "Beyond the physical gains, the gym is a sanctuary for mental and emotional well-being. ",
        image: image4,
    },  {
        name: "Cardio Training Classes",
        description: "Beyond the physical gains, the gym is a sanctuary for mental and emotional well-being. ",
        image: image5,
    },  {
        name: "Weight Training Classes",
        description: "Beyond the physical gains, the gym is a sanctuary for mental and emotional well-being. ",
        image: image6,
    },
]

const OurClasses = ({setSelectedPage}: Props) => {
  return (
      <section id='ourClasses' className="w-full bg-primary-100 py-4">
          <motion.div
              onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
          >
              <motion.div
                  className="mx-auto w-5/6"
                initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                  }}>
                  <div className="md:w-3/5">
                      <HText>
                          OUR CLASSES
                      </HText>
                      <p className="py-5">It's a place where seasoned fitness enthusiasts offer encouragement to newcomers, where camaraderie flourishes during group classes, and where personal trainers are the guiding lights on the path to fitness success. </p>
                  </div>
                  
              </motion.div>
              <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden scrollbar-color-primary-500">
                  <ul className="w-[2800px] whitespace-nowrap">
                      {classes.map((item, idx) => (
                          <Class key={`${item.name}-${idx}`}
                              name={item.name}
                              description={item.description}
                              image={item.image } />
                      ))}
                  </ul>
              </div>
          </motion.div>
    </section>
  )
}

export default OurClasses