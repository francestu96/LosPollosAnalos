import { Center, VStack, Text, HStack, Link, Image } from "@chakra-ui/react";

const Tokenomics = () => {
  return (
    <Center id="tokenomics" py="20" backgroundColor="gray.900" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
      <VStack gap="7" fontSize="2xl">
        <Text fontSize="5xl" fontFamily="Burrito">TOKENOMICS</Text>
        <HStack>
            <Text>Initial Mint Supply:</Text><Text fontFamily="Burrito" color="main">100.000.000</Text>
        </HStack>
        <HStack>
            <Text>Liquidity:</Text><Text fontFamily="Burrito" color="main">3 SOL</Text>
        </HStack>
        <HStack>
            <Text>Liquidity Lock:</Text><Text fontFamily="Burrito" color="main">BURNED</Text>
        </HStack>
        <HStack>
            <Text>Mint Authority:</Text><Text fontFamily="Burrito" color="main">REVOKED</Text>
        </HStack>
        <HStack>
            <Text>Contract Ownership:</Text><Text fontFamily="Burrito" color="main">RENOUNCED</Text>
        </HStack>
        <HStack>
            <Text as="u">Token Address:</Text><Link target="_blank" href="https://explorer.solana.com/address/xxx" fontFamily="Burrito" color="main">COOMING SOON!</Link>
        </HStack>
        <Link pt="2" display="flex" justifyContent="center" href="https://www.dextools.io/app/en/ether/pair-explorer/cooming-soon" target="_blank">
            <Image src={"/DEXTools.png"} height={10} width={40} alt="DexTools logo"/>
        </Link>
      </VStack>
    </Center>
  );
};

export default Tokenomics;
