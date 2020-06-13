import React, { Component } from 'react'
import SubNav from '../../components/SubNav/SubNav'
import TokenService from '../../services/token-service'
import './LandingPage.css'
import womanShopping from '../../media/woman-buying-groceries.png'
import coupleShopping from '../../media/couple-buying-bread.png'
import shoppingBasket from '../../media/shopping-basket.png'


class LandingPage extends Component {

    render() {
        return(
            <>
            {TokenService.hasAuthToken() && <SubNav />}
            <main>
                <header className="banner" role="banner">
                    <img src={shoppingBasket} alt="shopping-basket" className="shopping-basket" />
                    <div>
                    <h2>Forget about long and confusing shopping trips</h2>
                    <h3>Shopily provides the most efficient shopping plan for you</h3>
                    </div>
                </header>
                <section className="subBanner">
                    <header className="subBannerTitle">
                        <h3>We organize your shopping list</h3>
                    </header>
                    <div>
                        <div>
                        <p>
                            <img src={womanShopping} alt="woman-shopping" />
                        </p>
                        </div>
                        <div className="subBannerText">
                        <p>We organize your shopping list according to your supermarket's layout, putting the items closest to the entrance first and those closest to the cashier last so that you don't have to revisit the same aisles over and over again.</p>
                        </div>
                    </div>
                </section>
                <section className="subBanner">
                    <header className="subBannerTitle">
                        <h3>We provide an interactive shopping route</h3>
                    </header>
                    <div>
                        <div>
                        <p>
                            <img src={coupleShopping} alt="couple-shopping" />
                        </p>
                        </div>
                        <div className="subBannerText">
                        <p>We provide a map of your supermarket indicating where each item is located and the ideal route you should take in order to shorten your shopping time.</p>
                        </div>
                    </div>
                </section>
            </main>
            </>
        )
    }
    
}

export default LandingPage