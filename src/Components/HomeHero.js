import React from 'react'
import './HomeHero.css'

const HomeHero = () => {
    return (
        <section className='HomeHero'>
            <div>
                <h1 className='HomeHero_Greeting'>Hello!</h1>
                <h2 className='HomeHero_SubHeading'>
                    <span>
                        We are a<em> mom + daughter </em>
                    </span>
                    <span>&nbsp;in love with crafts!</span>
                </h2>
                {/* <div className='HomeHero_Intro'>Making beautiful things is a dream come true. We feel blessed for doing it, and we hope you'll find something to make your day dreamy, too!</div> */}
                <div className='HomeHero_Intro'>
                    We feel blessed for spending our days making beautiful things. For us, it is a dream come true, and we hope you'll find something to make your day dreamy, too!
                </div>
            </div>
            <img
                className='HomeHero_Image'
                src={`${process.env.PUBLIC_URL}/images/wool_min.svg`}
                alt=''
            />
        </section>
    )
}

export default HomeHero