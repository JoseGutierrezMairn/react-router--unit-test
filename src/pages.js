import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Home(){
    return(
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to='about'>About</Link>
                <Link to='events'>Events</Link>
                <Link to='contact'>Contact</Link>
            </nav>
        </div>
    );
}


export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Events(){
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}


export function Oops404(){
    let location = useLocation();
    return(
        <div>
            <h1 style={{color: 'red'}}>Resource not found at {location.pathname}</h1>
        </div>
    )
}

export function Services(){
    return(
        <div>
            <h2>Our services</h2>
        </div>
    )
}

export function CompanyHistory(){
    return(
        <div>
            <h2>Our Company History</h2>
        </div>
    )
}

export function Locaiton(){
    return(
        <div>
            <h2>Our Location</h2>
        </div>
    )
}