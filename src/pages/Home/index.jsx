import React from 'react';

import { Container } from './styles';
import { motion }    from 'framer-motion';

import Header   from '../../components/Header';
import Filters  from '../../components/Filters';
import Showcase from '../../components/Showcase';

export default function Home() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1.5}}
    
    >
      <Header/>

      <Filters/>
      
      <Container>
        <Showcase/>
      </Container>
      
    </motion.div>
  );
};
