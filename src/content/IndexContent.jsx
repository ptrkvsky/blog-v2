import React, { useRef, useEffect, useContext } from 'react'
import { Power1 } from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import { PresentationSection } from '../styles/pages/home/index'
import BlockMaintTitle from '../components/home/MainTitle'
import ExperiencesSection from '../components/home/ExperiencesSection'
import ServicesSection from '../components/home/ServicesSection'
import CMSsection from '../components/home/CMSsection'
import SurmesureSection from '../components/home/SurmesureSection'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'
import { myContext } from '../../provider'

// import profilAnimation from '../animation/index/profilAnimation'
// import mainTitleAnimation from '../animation/index/mainTitleAnimation'

const IndexContent = ({ location }) => {
  const refIndexContent = useRef(null)

  const contextValues = useContext(myContext)
  const { indexTimeline, setIndexTimeline } = contextValues

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: refIndexContent.current,
      smooth: true,
    })
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  })

  useEffect(() => {
    indexTimeline.set(refIndexContent.current, { visibility: 'visible' })

    // indexTimeline.addLabel('animation-profil').from(
    //   refRightCol.current,
    //   {
    //     duration: 0.8,
    //     y: '+=2%',
    //     opacity: 0,
    //     ease: Power1.easeOut,
    //   },
    //   '-=0.5'
    // )

    // setIndexTimeline(indexTimeline)
    indexTimeline.play()
  }, [])

  return (
    <>
      <div ref={refIndexContent}>
        <PresentationSection>
          <ImgJohanPetrikovsky />
          <BlockMaintTitle />
        </PresentationSection>

        <ExperiencesSection />

        <ServicesSection />

        <CMSsection />
        <SurmesureSection />
      </div>
    </>
  )
}

export default IndexContent
