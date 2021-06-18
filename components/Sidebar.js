import React from 'react'
import Image from 'next/image'

const links = [
    {
        "title": "linkedin",
        "icon": "i-linkedin",
        "link": "https://www.linkedin.com/",
        "color": "#0e76a8"
    },
    {
        "title": "instagram",
        "icon": "i-instagram",
        "link": "https://www.instagram.com/hichamtloh/",
        "color": "#C13584"
    },
    {
        "title": "facebook",
        "icon": "i-facebook2",
        "link": "https://www.facebook.com/hichamtloh",
        "color": "#3b5998"
    },
    {
        "title": "twitter",
        "icon": "i-twitter",
        "link": "https://twitter.com/hichamtloh",
        "color": "#1DA1F2"
    },
    {
        "title": "behance",
        "icon": "i-behance2",
        "link": "https://behance.net/hasnichakroun",
        "color": "#0057ff"
    }
];
const otherLinks = [
    {
        "title": "Upwork.com",
        "link": "//www.upwork.com/freelancers/~01036dd6fd4fff2ffd/"
    },
    {
        "title": "hichamtloh222@gmail.com",
        "link": "mailto:hichamtloh222@gmail.com"
    },
    {
        "title": "+212-604410149",
        "link": "tel:+212604410149"
    }
];
export default function Sidebar() {
    return (
        <div className="dad">
            <div className="portrait">
                <Image height="400" width="400" alt="achraf's portrait" src="/images/me.jpg" />
            </div>
            <h1>Hicham Tloh</h1>
            <h2>Graphic Designer </h2>
            <p className="para">
                "Design is so Simple.<br/> That's why it's so Complicated"
            </p>
            <div className="links">
                {links.map((e, i) =>
                    <a key={i} target="_blank" href={e.link} title={e.title} style={{ ['--color']: e.color }}>
                        <span className={e.icon}></span>
                    </a>
                )}
            </div>
            <div className="other-links">
                {otherLinks.map((e, i) =>
                    <a key={i} target="_blank" href={e.link} title={e.title}>
                        {e.title}
                    </a>
                )}
            </div>
            <style jsx>{`
                .dad{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .portrait{
                    padding-right: 0;
                    width: 100%;
                }
                h1 {
                    margin: 0;
                    margin-top: 20px;
                    color: var(--primary);
                    font-weight: 600;
                    font-size: 2em;
                }
                h2 {
                    margin: 14px 0;
                    color: var(--primary);
                    font-weight: 400;
                    font-size: 1.3em;
                }
                .para{
                    margin: 30px 0;
                    font-size: 1.2em;
                    line-height: 1.3;
                }
                .links{
                    margin: 6px 10px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .links a{
                    margin: 10px 10px;
                    color: var(--black);
                    opacity: .9;
                    text-decoration: none;
                    font-size: 30px;
                    transition: 200ms ease;
                }
                .links a:hover{
                    opacity: 1;
                    color: var(--primary);
                    color: var(--color);
                }
                .other-links {
                    display: flex;
                    flex-direction: column;
                    margin: 20px 0;
                }
                .other-links a{
                    margin: 6px 0;
                    color: #010101;
                    text-decoration: none;
                    font-size: 1.2em;
                }
                .other-links a:hover{
                    text-decoration: underline;
                }
            `}</style>
        </div>
    )
}
