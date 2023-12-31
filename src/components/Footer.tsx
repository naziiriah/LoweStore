/* eslint-disable react/react-in-jsx-scope */
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';

const FooterComponent = () => {
  return (
    <Footer bgDark={false}>
      <motion.div animate={{}} className='w-full'>
        <div className='grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
          <div>
            <Footer.Title title='Company' />
            <Footer.LinkGroup col>
              <Footer.Link href='/'>About</Footer.Link>
              <Footer.Link href='/'>Careers</Footer.Link>
              <Footer.Link href='/'>Brand Center</Footer.Link>
              <Footer.Link href='/'>Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='help center' />
            <Footer.LinkGroup col>
              <Footer.Link href='/'>Discord Server</Footer.Link>
              <Footer.Link href='/'>Twitter</Footer.Link>
              <Footer.Link href='/'>Facebook</Footer.Link>
              <Footer.Link href='/'>Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='legal' />
            <Footer.LinkGroup col>
              <Footer.Link href='/'>Privacy Policy</Footer.Link>
              <Footer.Link href='/'>Licensing</Footer.Link>
              <Footer.Link href='/'>Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='download' />
            <Footer.LinkGroup col>
              <Footer.Link href='/'>iOS</Footer.Link>
              <Footer.Link href='/'>Android</Footer.Link>
              <Footer.Link href='/'>Windows</Footer.Link>
              <Footer.Link href='/'>MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className='w-full bg-gray-200 px-4 py-6 sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright by='LowStore™' href='/' year={2023} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon className='' aria-label='facebook' icon={BsFacebook} />
            <Footer.Icon href='/' aria-label='Instagram' icon={BsInstagram} />
            <Footer.Icon href='/' aria-label='Twitter' icon={BsTwitter} />
            <Footer.Icon href='/' aria-label='Github' icon={BsGithub} />
            <Footer.Icon href='/' aria-label='dribble' icon={BsDribbble} />
          </div>
        </div>
      </motion.div>
    </Footer>
  );
};
export default FooterComponent;
