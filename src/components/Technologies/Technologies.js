import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ArticleIcon, List, ListContainer, ListIcon, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { techListBack, techListFront, techListMobile } from './iconTechList';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
     With a wide range of technologies to make the solutions that you need
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          

            <ArticleIcon>
            {techListFront.map((element, i)=> {

              return (
                <ListIcon key={i} src={`/images/icon-tools/${element}`}/>
              )
            })
            }
            
            </ArticleIcon>
            
          
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          

            <ArticleIcon>
            {techListBack.map((element, i)=> {

              return (
                <ListIcon key={i} src={`/images/icon-tools/${element}`}/>
              )
            })
            }

            </ArticleIcon>

            

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
         

            <ArticleIcon>
            {techListMobile.map((element, i)=> {

              return (
                <ListIcon key={i} src={`/images/icon-tools/${element}`}/>
              )
            })
            }

            </ArticleIcon>

            
        </ListContainer>
      </ListItem>
    </List>
   
  </Section>
);

export default Technologies;
