import React from 'react';
import { ReactElement } from 'react';
import Header from './components/Header'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  SimpleGrid,
  Flex ,
} from '@chakra-ui/react';
import { FcAndroidOs } from 'react-icons/fc';
import { FaApple, FaCode } from 'react-icons/fa'
import { BiMessageRounded } from 'react-icons/bi'

interface FeatureProps {
  title: string;
  text: string;
  icon1: ReactElement;
  icon2?: ReactElement;
}

const Feature = ({ title, text, icon1, icon2 }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'#6e45e1'}
        mb={1}>
        {icon1}
        {icon2}
      </Flex>
      <Text fontWeight={600} verticalAlign={'middle'}>{title}</Text>
      <Text>{text}</Text>
    </Stack>
  );
};

function App() {
  return (
    <>
      <Header />

      <Container maxW={'2xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
            lineHeight={'100%'}>
            Welcome!  <br />
            <Text as={'span'} color={'#6e45e1'}>
              I'm Erison Pimentão
            </Text>
          </Heading>
          <Text>
            I am a Full-Stack ReactJs and Python / Django Developer,
            with experience in a multinational company in the industrial sector
          </Text>
          <Button
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
            colorScheme={'green'}
            bg={'#6e45e1'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: '#452c8a',
            }}>
            Know more about me
          </Button>
        </Stack>
      </Container>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon1={<Icon as={FcAndroidOs} w={8} h={8} />}
            icon2={<Icon as={FaApple} w={8} h={8} />}
            title={'Hybrid mobile Apps'}
            text={
              "\
                I'm using React Native to build apps for Android and IOS smartphones.\
                Continuously researching and increasing my knowledge in this tech.\
              "
            }
          />
          <Feature
            icon1={<Icon as={FaCode} w={8} h={8} />}
            title={'Code Quality'}
            text={
              '\
                Working in a huge company, I felt the necessity to become a software engineer.\
                Making better decisions and writing more elegant codes such as data structures,\
                algorithms, clean code, clean architecture, and etc\
              '
            }
          />
          <Feature
            icon1={<Icon as={BiMessageRounded} w={8} h={8} />}
            title={'Team Work'}
            text={
              "\
                I really enjoy working as a team and planning solutions for the week sprint\
                Work with a team is awesome, but with sinergy and a good comunication is a lot better.\
              "
            }
          />
        </SimpleGrid>
      </Box>
    </>
  )
}

export default App;