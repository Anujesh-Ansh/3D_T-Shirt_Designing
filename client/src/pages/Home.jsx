import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import { CustomButton } from '../components';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img 
                        src="./cake.png" 
                        alt="logo" 
                        className='w-8 h-8 object-contain'
                        />
                    </motion.header>
                    <motion.div className='home-content'{...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text flex-wrap text-50">
                                Create ur <br className='xl:block hidden'/> own Style.
                            </h1>
                        </motion.div>

                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create ur Unique & Exclusive Cake T-Shirt with r brand-new 3D customization tool. <strong>Unleash ur Imagination</strong>{" "} & define ur own style.
                            </p>

                            <CustomButton type="filled" title="Customize It" handleClick={() => state.intro = false} customStyles="w-fit px-4 py-2.5 font-bold text-sm"/>

                        </motion.div>

                    </motion.div>

                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home