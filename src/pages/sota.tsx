import Title from '../components/Title';
import './sota.css';
import sotatrailer from '../assets/gameImages/sotatrailer.mp4';
import { useEffect, useRef } from 'react';

const Sota = () => {
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const offset = scrollY * 0.3;
            const opacity = Math.max(1 - scrollY / 400, 0);

            const titleElement = titleRef.current?.querySelector('.titleText') as HTMLElement;
            if (titleRef.current && titleElement) {
                titleRef.current.style.transform = `translateY(${offset}px)`;
                titleElement.style.opacity = opacity.toString();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 1000;
            const clampedScroll = Math.min(scrollY, maxScroll);

            const startScale = window.innerWidth < 768 ? 4 : 1.2;
            const endScale = 1;
            const progress = clampedScroll / maxScroll;
            const scale = startScale - (startScale - endScale) * progress;

            const bg = document.getElementById('zoomBg');
            if (bg) {
                bg.style.transform = `scale(${scale})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            document.querySelectorAll('.fadeContent').forEach((el) => {
                const element = el as HTMLElement;
                const rect = element.getBoundingClientRect();
                const elementHeight = rect.height;
                const elementTop = rect.top + scrollY;

                const fadeStartThreshold = elementTop + elementHeight / 50;
                const offset = scrollY - fadeStartThreshold;

                if (offset > 0) {
                    const fadeOutSpeed = Math.min(1, offset / (elementHeight * 1));
                    element.style.opacity = Math.max(1 - fadeOutSpeed, 0).toString();
                } else {
                    element.style.opacity = '1';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Title text="SotA" />
            <div className="pageContent">
                <div id="zoomBg">
                    <video autoPlay muted loop playsInline id="bgVideo">
                        <source src={sotatrailer} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="topSection" />
                <div className="titleContainer" ref={titleRef}>
                    <h1 className="titleText">Shadow of the Ascendant</h1>
                </div>
                
                <div className="contentSection">
                    <div className="fadeContent">
                        <p className='fadeContent'>Still in Progress</p>
                    </div>
                </div>
                <div className="sectionFullWidth">
                    <div className="currentProjectWrapper">
                        <div className="currentProject">
                            <div className="projectText fadeContent">
                                <h1 className="currentProjectTitle fadeContent">Current Project</h1>
                                <p className="projectOverview fadeContent">
                                    <strong>Shadow of the Ascendant</strong> is an open world roguelike with realistic textures, challenging gameplay, and plenty of exploration potential. Get lost in a dynamic world where every run feels fresh.
                                </p>
                            </div>
                            <div className="trailerWrapper fadeContent">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                                    title="Shadow of the Ascendant Trailer"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sectionFullWidth">
                    <div className="currentProjectWrapper">
                        <div className="currentProject flipped">
                            <div className="projectText fadeContent">
                                <h1 className="currentProjectTitle flipped fadeContent">Current Project</h1>
                                <p className="projectOverview flipped fadeContent">
                                    <strong>Shadow of the Ascendant</strong> is an open world roguelike with realistic textures, challenging gameplay, and plenty of exploration potential. Get lost in a dynamic world where every run feels fresh.
                                </p>
                            </div>
                            <div className="trailerWrapper fadeContent">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                                    title="Shadow of the Ascendant Teaser"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space'>
                    <p className='fadeContent'>SPACER</p>
                </div>
            </div>
        </>
    );
};

export default Sota;
