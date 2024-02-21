import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
//import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { otra_lista } from '@/constants/constants';

//const data = [
//  { number: "e-commerce with MERN stack", text: 'Open Source Projectsfgrhthdflkmrgmlkfmglkmglkmglkmgdglkmhlktrhmtrlkgmglkmgtr hhthfdfhfjfhd thfhthfghyhfh'},
//  { number: 1000, text: 'Students', },
//  { number: 1900, text: 'Github Followers', },
//  { number: 5000, text: 'Github Stars', }
//];

const Acomplishments = () => (
  <Section nopadding id="projects">
    
   
    <SectionTitle main>Upcoming Projects</SectionTitle>
    <GridContainer>
      {otra_lista.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent></TitleContent>
              <TagList>
                
              </TagList>
            </div>
            
          </BlogCard>
        );
      })}
    </GridContainer>
     <SectionDivider />
  </Section>
);

export default Acomplishments;
