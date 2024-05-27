import React from 'react'
import {motion} from 'framer-motion'

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const SkillImageComponent = ({image}) => {

  return (
    <motion.div class = "cards"
    variants={childVariants}>
        <img src={image}  class="card-img-top" />
    </motion.div>
  )
}

export default SkillImageComponent