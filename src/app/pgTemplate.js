"use client"

import {AnimatePresence, motion} from "framer-motion";
import {LayoutRouterContext} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useContext, useRef} from "react";
import {usePathname} from "next/navigation";
import PsyBG from "src/components/PsyBG/psyBG";


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


export default function PgTemplate ({ children }){

    const path = usePathname()


     return  <AnimatePresence mode={'popLayout'}  initial={false}>

        <motion.div key={path} className={'overflow-hidden'}

                    initial={{  opacity: 0, scale: 0.75, rotateY: '-90deg' , transformOrigin: 'center', border: '1px dotted  #ffffffff'}}

                    animate={{   opacity: 1, scale: 1, rotateY: '0deg',  border: '1px dotted #00 000000',

                        transition: {

                            ease: "easeIn",

                            opacity: {duration: 2, delay: 1 },
                            rotateY: {duration: 2, delay: 1.5  },
                            scale: {duration: 2, delay: 1.5 },

                            border: {duration: 0.1, delay: 1.9}
                        }
                    }}

                    exit={{   opacity: 0, scale: 0.75, rotateY: '90deg', border: '3px dotted #ffffffff',

                        transition: {

                            ease: "easeOut",

                            scale:   {duration: 2, delay: 0},
                            rotateY: {duration: 2, delay: 0},
                            opacity: {duration: 2, delay: 0 },

                            border: {duration: 0.1, delay: 0}

                        }
                    }}



        >

              <FrozenRouter>

                  {/*<PsyBG className={' abs-full z-0'} onInfoUpdate={undefined} />*/}

                  <section className={'psy-page min-h-dvh pt-5  max-w-screen w-screen overflow-x-hidden overflow-y-auto z-10'}>
                      <div className={'w-full max-w-full md:max-w-screen-md h-fit mx-auto'}>
                          {children}
                      </div>
                  </section>

              </FrozenRouter>

        </motion.div>

    </AnimatePresence>


}

