import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'
//revision done comment
//animate presence use to remove animation with exit 

import NewChallenge from './NewChallenge.jsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
       <AnimatePresence>
      {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>
      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button
        whileHover={{scale:1.1,backgroundColor:'green'}}//hex code color
        transition={{type:'spring',stiffness:1000}}
         onClick={handleStartAddNewChallenge}
          className="button">
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
