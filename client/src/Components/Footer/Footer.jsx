import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='arsolaire__footer'>
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item" id='arsolaire_def'>
                            <img src={logo} alt="LOGO" />
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Contact</h3>
                            <p>N’hésitez pas à nous envoyer un mail pour toute demande de renseignement complémentaire</p>
                        </div>
                        <div class="col-sm-4 col-md-3 item footer_item">
                            <h3>Coordonnées</h3>
                            <div className="arsolaire__footer_line">
                                <GoIcons.GoLocation className='footer__icon' />
                                <p>13 rue de Taher Memmi Menzah 6 Ariana</p>
                            </div>
                            <div className="arsolaire__footer_line">
                                <AiIcons.AiFillPhone className='footer__icon' />
                                <p>(+216) 94881032</p>
                            </div>
                            <div className="arsolaire__footer_line">
                                <GoIcons.GoMail className='footer__icon' />
                                <p id='footer_email'>digimytch@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-linkedin"></i></a><a href="#"><i class="icon ion-social-youtube"></i></a><a href="https://www.tiktok.com/@digimitch" target="_blank" rel="noreferrer"><i class="icon ion-social-instagram"></i><i class="icon ion-social-tiktok">TikTok</i></a>
                            <p class="copyright"><a href="https://www.facebook.com/profile.php?id=100085406739373" target="blank">© Created by ONCA Solution - 2022</a></p>
                        </div>
                    </div>
                </div>
            </footer>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}

export default Footer