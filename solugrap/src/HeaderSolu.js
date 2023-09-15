import "./HeaderSolu.css";

function HeaderSolu() {
    return(
        <div className="HeaderSolu">
            <header className="HeaderSolu-header">
                <div class="top_line">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-left">
                                <ul class="contact-top">
                                <li><i class="icon-location"></i> <a href="https://ul.waze.com/ul?place=ChIJa26sg2PPYpYRuS0UcghE0iQ&ll=-33.42650600%2C-70.61609400&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">Av. Del Valle sur 576 Of 302, Huechuraba</a></li>
                                <li><i class="icon-mobile"></i> <a href="tel:+56944082246">(+56) 9 4408 2246</a></li>
                                <li><i class="icon-mail"></i> <a href="mailto:contacto@solugraphics-chile.com">contacto@solugraphics-chile.com</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-5 col-md-5 pull-right hidden-phone">
                                <ul class="social-links link-contrast">
                                    <li><a href="https://www.linkedin.com/in/solugraphics-chile-5a1b86231/" target="_blank"><i class=" link-contrast fa fa-linkedin"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default HeaderSolu;