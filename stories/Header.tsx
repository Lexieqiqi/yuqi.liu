import React from 'react';
import { AiOutlineInstagram, AiOutlineYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Button } from './Button';
import './header.css';

interface HeaderProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
    <header>
        <div className="wrapper">
            <div>
                <h1>Yuqi Liu</h1>
            </div>
            <div>
                <ul>
                    <li><a>Story</a></li>
                    <li>|</li>
                    <li><a>Blog</a></li>
                    <li>|</li>
                    <li><a>Projects</a></li>
                    <li>|</li>
                    <li><a>Gallery</a></li>
                    <li>|</li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href=""><AiOutlineInstagram /></a></li>
                    <li><a href="https://m.youtube.com/channel/UCFVnh0qsdNFHUTi1VtgOjcA"><AiOutlineYoutube /></a></li>
                    <li><a href="https://www.linkedin.com/in/yuqi-liu-158b17193/"><AiFillLinkedin /></a></li>
                </ul>
            </div>
        </div>
    </header>
);
