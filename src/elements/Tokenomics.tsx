import { Center, VStack, Text, HStack, Link, Image, Stack } from "@chakra-ui/react";

const Tokenomics = () => {
  return (
    <Center id="tokenomics" py="20" backgroundColor="gray.900" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
      <VStack gap="7" fontSize="2xl" width={["90%", "80%", "70%", "60%"]}>
        <Text fontSize="5xl" fontFamily="Burrito">TOKENOMICS</Text>
        <Stack direction={["column", "row"]} alignItems="center">
            <Image width={["75%", "50%"]} src="logo.png" alt="logo"></Image>
            <VStack width={["90%", "50%"]} align="start" px={["0", "2", "5"]} py={["2", "5", "12"]} justifyContent="space-between" fontSize={["xl", "2xl"]}>
                <HStack>
                    <Text>Initial Mint Supply:</Text><Text fontFamily="Burrito" color="main">100.000.000</Text>
                </HStack>
                <HStack>
                    <Text>Liquidity:</Text><Text fontFamily="Burrito" color="main">10 SOL</Text>
                </HStack>
                <HStack>
                    <Text>Fees:</Text><Text fontFamily="Burrito" color="main">0/0</Text>
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
                    <Text as="u">Token Address:</Text><Link target="_blank" href="https://explorer.solana.com/address/ta2D3u3XsY6aYqYyhJaF1R1btNQBxrw5WZ2DMWRzeRs" fontFamily="Burrito" color="main">ta2D3u3Xs...5WZ2DMWRzeRs</Link>
                </HStack>
            </VStack>
        </Stack>
        <HStack mt="4" justifyContent="space-around" width="full">
            <Link href="https://dexscreener.com/solana/5vv4hmgtycdrnmvqj1tdsjjzkmx3ak2jo9r6adj8vbmx" target="_blank">
                <Image src={"/DEXScreener.png"} height={14} width={48} alt="DEXScreener logo"/>
            </Link>
            <Link href="https://www.dextools.io/app/en/solana/pair-explorer/5VV4HMgTyCDRnmvQj1tDSJjzkMX3ak2Jo9r6aDj8VBMx" target="_blank">
                <Image src={"/DEXTools.png"} height={10} width={40} alt="DexTools logo"/>
            </Link>
            <Link href="https://birdeye.so/token/ta2D3u3XsY6aYqYyhJaF1R1btNQBxrw5WZ2DMWRzeRs?chain=solana" target="_blank">
                <Image src={"/BirdEye.png"} height={10} width={40} alt="BirdEye logo"/>
            </Link>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Tokenomics;
