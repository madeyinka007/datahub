import { useTranslation } from "react-i18next"
import { GetQuoteModal } from "../components/Modal"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
    const [open, setIsOpen] = useState(false)
    const { t } = useTranslation()
    const [navState, setNavState] = useState(false)

    return (
        <>
            <header className="header-area position_top">
                <div className="site-logo">
                    <div className="logo">
                        <Link to="/"><img src="./../assets/img/logo.svg" alt="logo" /></Link>
                    </div>
                </div>
                <div className="main-menu">
                    <nav className={navState ? "main-nav slidenav":"main-nav"}>
                        <div className="mobile-menu-logo">
                            <Link to="/"><img src="assets/img/logo-dark.svg" alt="logo" /></Link>
                            <div className="remove" onClick={() => setNavState(false)}>
                                <i className="bi bi-plus-lg"></i>
                            </div>
                        </div>
                        <ul>
                            <li className="active">
                                <Link to="/">{t("Home")}</Link>
                            </li>
                            <li><Link to="/about-us">{t("About")}</Link></li>
                            <li>
                                <Link to="/services">{t("Services")}</Link>
                            </li>
                            <li>
                                <Link to="/projects">{t("Projects")}</Link>
                            </li>
                            <li>
                                <Link to="/insights">{t("Blog")}</Link>
                            </li>
                            <li><Link to="/contact-us">{t("Contact")}</Link></li>
                        </ul>
                        <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50">
                            <div className="cmn-btn">
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <Link onClick={() => setIsOpen(true)}>Get A Quote</Link>
                            </div>
                        </div>
                        
                    </nav>
                </div>
                <div className="nav-right">
                    <div className="get-qoute">
                        <div className="cmn-btn">
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <Link onClick={() => setIsOpen(true)}>{t("Get_Quote")}</Link>
                        </div>
                    </div>
                    <div className="mobile-menu">
                        <Link onClick={() => {setNavState(!navState)}} className="cross-btn">
                            <span className="cross-top"></span>
                            <span className="cross-middle"></span>
                            <span className="cross-bottom"></span>
                        </Link>
                    </div>
                </div>
            </header>
            <GetQuoteModal open={open} onClose={() => setIsOpen(!open)} />
        </>
    )
}