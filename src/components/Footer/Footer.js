import { SectionTitle } from '@/styles/GlobalComponents';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import ContactForm from './contactForm';

const Footer = () => {
  return (
    <>
    
    
    <FooterWrapper>
      {/*<SectionTitle id='contact'>contact me</SectionTitle>*/}
      <LinkList>
      
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="tel:+541173698281">+54 1173698281</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rafaelsanchez97.dm@gmail.com">
            rafaelsanchez97.dm@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <Link href="https://github.com/davidms5" target='_blank'>
        <SocialIcons >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        </Link>
        <Link href='https://www.linkedin.com/in/david-medina-435a50199/' target='_blank'>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </Link>
         
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    </>
  );
};

export default Footer;
