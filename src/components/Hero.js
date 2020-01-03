import React from 'react'
import styled from 'styled-components'

const Hero = ({headerTitle}) => {
    return (
        <header className="hero">
            <div className="container">
                <HeroTitle>{headerTitle}</HeroTitle>
                <HeroBody>Lorem ipsum dolor sit amet.</HeroBody>
            </div>
        </header>
    )
}

export default Hero

// Styled components library
const HeroTitle = styled.h1`
    color: red;
`

const HeroBody = styled.p`
    color: white;
    padding-top: 20px;
`