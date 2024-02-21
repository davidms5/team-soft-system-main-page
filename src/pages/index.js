import Head from 'next/head';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { Fade } from 'react-awesome-reveal';
import ContactForm from '@/components/Footer/contactForm';
const Home = () => {
  return (
    <>
    <Head>
      <title>Team Soft System</title>
      
    </Head>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Fade direction='left' delay={400}>
      
      <Technologies />
      <Projects />
      <Acomplishments />
      <Timeline />
      <ContactForm/>
      </Fade>
    </Layout>
    </>
  );
};

export default Home;
