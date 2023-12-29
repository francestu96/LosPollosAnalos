import { VStack } from '@chakra-ui/react';
import Hero from 'elements/Hero';
import Tokenomics from 'elements/Tokenomics';
import Roadmap from 'elements/Roadmap';
import { FC } from 'react';
import DexScreener from 'elements/DexScreener';

const Home: FC = () => {
  return (
    <VStack gap="0">
      <Hero/>
      <Tokenomics/>
      <Roadmap/>
      <DexScreener/>
    </VStack>
  );
};

export default Home;
