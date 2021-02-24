import React from 'react'
import Header from 'Components/Header'
import SiteCanvas from 'Components/SiteCanvas'
import ContentCanvas from 'Components/ContentCanvas'
import HomeHero from 'Components/HomeHero'
import CategoryButton from 'Components/CategoryButton'
import { mainStore } from 'Stores'
import './Home.css'

const HomePageButtonWrapper = props => {
    return (
        <div className='HomePageButtonWrapper'>
            {props.children}
        </div>
    )
}

const HomePage = () => {
    const { categories } = mainStore
    return (
        <SiteCanvas>
            <Header />
            <main className='HomePageMain'>
                <HomeHero />
                    <ContentCanvas>
                        <HomePageButtonWrapper>
                        { categories.map(cur =>
                            <CategoryButton
                                name={cur.name}
                                key={cur.name}
                            />
                        )}
                    </HomePageButtonWrapper>
                </ContentCanvas>
            </main>
        </SiteCanvas>
    )
}

export default HomePage