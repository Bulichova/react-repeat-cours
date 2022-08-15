import React from 'react'
import styled from 'styled-components'
import { Container } from './styledComponents'
import { getLocale } from '../i18n'

const SectionWrapper = styled.section`
  padding-top: 90px;
  padding-bottom: 122px;
  letter-spacing: 0.2px;
`

const HeroTitle = styled.h1`
  font-size: 72px;
  line-height: 1.25;
  font-weight: 700;
  max-width: 935px;
  width: 100%;
`

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 40px;
  padding-top: 18px;
  justify-content: end;
  @media screen and (min-width: 1200px) {
    padding-left: 384px;
  }
  p {
    max-width: 348px;
    font-size: 16px;
    line-height: 1.5;
  }
  p:not(:last-child) {
    margin-right: 20px;
  }
  ::after {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    background-color: #c4c4c4;
    left: 0;
    top: -16;
  }
`

export function Hero() {
  return (
    <SectionWrapper>
      <Container>
        <HeroTitle>{getLocale('hero_title')}</HeroTitle>
        <ContentWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est.
          </p>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  )
}
