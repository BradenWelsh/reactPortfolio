import React from 'react';

const Navigation = () => {
  return (
    <>
    <header>
    <div className="row justify-content-center">
            <nav>
                <ul className="navbar">
                    <li><a href="/pages/AboutMe"> About Me </a></li>
                    <li><a href="/pages/Projects"> Projects </a></li>
                    <li><a href="/pages/MyResume"> Resume </a></li>
                    <li><a href="/pages/ContactMe"> Contact </a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navigation;