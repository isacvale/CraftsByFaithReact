import React from 'react'
import Header from 'Components/Header'
import SiteCanvas from 'Components/SiteCanvas'
import ContentCanvas from 'Components/ContentCanvas'
import HomeHero from 'Components/HomeHero'
import './Home.css'

// todo qwerty error on change page
const HomePage = () => {
    return (
        <SiteCanvas>
            <Header />
            <main className='HomePageMain'>
                <HomeHero />
                <ContentCanvas>
                    mateys
                </ContentCanvas>
            </main>
        </SiteCanvas>
    )
}

export default HomePage