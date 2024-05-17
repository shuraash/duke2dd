"use client"

import {AnimatePresence, motion} from "framer-motion";
import {LayoutRouterContext} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useContext, useRef} from "react";
import {usePathname} from "next/navigation";


// Prevents instant page opening
function FrozenRouter({children}) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;
    return (
        <LayoutRouterContext.Provider value={frozen}>
            {children}
        </LayoutRouterContext.Provider>
    );
}


export default function PageWrapper ({ children }){

    const path = usePathname()

    return  <AnimatePresence mode={'popLayout'}  initial={false}>

        <motion.div key={path} className={'page-trans w-screen h-screen overflow-clip  '}

                    initial={{  opacity: 0, scale: 0.75, rotateY: '-90deg' , transformOrigin: 'center', borderRadius: '16px', border: '3px solid  #ddddddff'}}

                    animate={{   opacity: 1, scale: 1, rotateY: '0deg',  border: '0px solid #dddddd00',

                        transition: {

                            ease: "easeIn",

                            opacity: {duration: 1, delay: 0.5 },
                            rotateY: {duration: 1, delay: 0.5  },
                            scale: {duration: 1, delay: 0.5 },

                            border: {duration: 0.1, delay: 1.4}
                        }
                    }}

                    exit={{   opacity: 0, scale: 0.75, rotateY: '90deg', border: '3px solid #ddddddff',

                        transition: {

                            ease: "easeOut",

                            scale:   {duration: 1, delay: 0},
                            rotateY: {duration: 1, delay: 0},
                            opacity: {duration: 1, delay: 0 },

                            border: {duration: 0.1, delay: 0}

                        }
                    }}
        >

              <FrozenRouter>

                  {/*<PsyBG className={' abs-full z-0'} onInfoUpdate={undefined} />*/}

                  <section className={'psy-page pt-5 min-h-full  max-w-screen w-screen overflow-x-hidden overflow-y-auto z-10 '}>
                      <div className={'w-full max-w-full md:max-w-screen-md h-auto mx-auto '}>
                          {children}
                      </div>
                  </section>

              </FrozenRouter>

        </motion.div>

    </AnimatePresence>


}

