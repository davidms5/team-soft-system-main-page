import React from 'react';
//import document from '@/../public/assets/CV-David-frontend-developer-english-version.pdf'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br/>
  Team Soft System <br/>
           <br />
          
        </SectionTitle>
        <SectionText>
          with the objective of create awesome apps. From amazing pages in the client side, to solid logic in the server side. All while accepting new challenges to Learn new things and keep improving myself every day!
        </SectionText>
        
        
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
