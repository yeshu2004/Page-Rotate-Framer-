import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Pic1 from '/image/1.jpg';
import Pic2 from '/image/2.jpeg';

function App() {
  const container = useRef();
  const { scrollYProgress} = useScroll({
    target: container,
    offset: ["start start","end end"]
  })
  return(
  <main ref={container} className="relative h-[200vh] bg-black">
    <Section1 scrollYProgress={scrollYProgress}/>
    <Section2 scrollYProgress={scrollYProgress}/>
  </main>
  )
}

const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1,.8])
  const rotate = useTransform(scrollYProgress, [0,1] , [0,-5])

  return (
    <motion.div style={{scale:scale, rotate:rotate}} className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <img 
            src={Pic1}
            alt="img"
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8,1])
  const rotate = useTransform(scrollYProgress, [0,1] , [5,0])

  return (
    <motion.div style={{scale:scale , rotate:rotate}} className="h-screen">
      <div className="relative h-full">
        <img className="h-full w-full"
          src={Pic2}
          alt="img"
        />

      </div>
    </motion.div>
  )
}
export default App