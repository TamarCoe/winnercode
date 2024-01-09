import React from 'react'
import { strings } from '_translations';

const Nav = () => {

    return (
        <nav className="navbar bg-dark border-bottom border-body p-4" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand row justify-content-evenly align-items-center" href="https://www.winner-code.com/">
                    <div className="col">
                        <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEVHcEz57+/57+/47ez57+/57+//9fX78fKoq6qKkpLe2dr/+PkAIyIANDbp4uIRPTwALi2coaFbbW3Rzs4lSEcJOjr68vb9z5P/v1i+vr3/tjL/ukb82rNDWVX+xnP/uT/75dOTe0HxsUQ4QyPCrIqGXt0RAAAABnRSTlMAS8f9/50KmUp+AAABGklEQVR4AXTPBwKCMAwF0EJjwmjZhOn2/mc0rVtr2Dx+SpRSUazhp3QcKakN/KmN5OBvRSoOAyJBrHTYkjRDrYKWp8aajIJIhSnLqsYg5o0tS9MGk9RK0DY5hDDvegkWFEJMKlkxRfDIzD6gkUBKi/WW4IbDOIhSYzppJWNYCU7okYd5mVd2zew2B8qMBOXmhrv9suwBa+lmJnyMcUNaZ8GB/VJlPrmgjHFD4HFZlln7aFX7MTQ9EA4uumN0723vvkB4ol91PqB07K3t+1LsiaBddGT5l+Ny2prpA3lw0ZWz87KI5vBEX3v/w3hxH2X0iTLOfj5I//1+HhieqP2FD+uBQHRdX6avgycwdigFpGGACW/SxJuo8WYHAKvpGxFK/CADAAAAAElFTkSuQmCC" alt="Logo" width="30" height="30" />
                    </div>
                    <span className="col">{strings.title}</span>
                </a>
            </div>
        </nav>
    )
}

export default Nav