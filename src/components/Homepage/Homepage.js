import React from 'react'

import ShopNow from './ShopNow'
import OurPicks from './OurPicks'
import Footer from './Footer'

const Homepage = () => {
    return (
        <React.Fragment>
            <ShopNow />
            <OurPicks />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage