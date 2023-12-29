import { Center, VStack, Text, HStack, Link, Box } from "@chakra-ui/react";

const DexScreener = () => {
  return (
    <Center width="full" pt="20" pb="10" backgroundColor="gray.900">
        <Box width="80%" height="60vh" borderRadius={"xl"} transform={"translateZ(0px)"} overflow={"hidden"}>
            <iframe src="https://dexscreener.com/solana/?embed=1" style={{"width": "100%", "height": "inherit"}}></iframe>
        </Box>
    </Center>
  );
};

export default DexScreener;
