import React from 'react'
import aboutImg from '../assests/about.png'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    Welcome to my digital realm, where software engineering and web development converge. As a devoted developer and designer, I blend innovation with artistic flair. With a strong coding foundation and keen design sensibilities, I create captivating digital experiences. From ideation to implementation, I specialize in user-centric solutions that push technological and creative boundaries.<br/><br/> Join me in exploring this dynamic landscape, where every line of code narrates a tale, and each design decision molds a lasting impression. <br/>Together, let's redefine the digital frontier, project by project.                    </p>

                </div>

            </div>
            <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutImg} width={300} height={300} />

        </div>
      
    </div>
  )
}

export default About
