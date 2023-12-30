import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Link, Flex, HStack, IconButton, Slide, VStack, Stack, useColorModeValue, useDisclosure, Text, Center, Image, Button, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NavItem from './NavItem';
import { ISubNav } from './SubNav';

const NAV_LINKS: ISubNav[] = [
    { label: "Home", href: "/" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    {
      label: "Community",
      href: "#",
      children: [
        {
          label: "Telegram",
          subLabel: "Follow us on Telegram",
          href_blank: "https://t.me/Certified_Portal",
          logo: "/telegram.png",
        },
        {
          label: "Twitter",
          subLabel: "Follow us on Twitter",
          href_blank: "https://twitter.com/certified__eth",
          logo: "/twitter.webp",
        }
      ]
    }
];

const Hero = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box width="100%" backgroundImage="background.jpg" backgroundSize={'cover'}>
            <Flex align="center" justify="space-between" display={['none', 'none', 'flex','flex']} px="50" py="5">
                <LinkBox>
                    <LinkOverlay href="/">
                        <Image src={"/logo.png"} height={32} alt="LosPollosAnalos"/>
                    </LinkOverlay>
                </LinkBox>
                <HStack gap={'15px'} position="absolute" left="50%" zIndex="10" transform="translate(-50%, 0%)" p="5" borderRadius={"full"} backgroundColor="rgb(50,50,50,0.8)">
                    {NAV_LINKS.map((link) => (
                        <NavItem key={`link-${link.label}`} {...link} />
                    ))}
                </HStack>
            </Flex>
            <Flex align="center" justify="space-between" display={['flex', 'flex', 'none','none']} px="10" py="5">
                <LinkBox>
                    <LinkOverlay href="/">
                        <Image src={"/hero.png"} height={45} width={45} alt="LosPollosAnalos"/>
                    </LinkOverlay>
                </LinkBox>
                <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} onClick={onToggle}/>
            </Flex>

            <Center mb="12">
                <Stack width={["95%", "90%"]} direction={["column", "row"]} alignItems="center">
                    <VStack width={["95%", "90%"]} alignItems="start" color="black" backgroundColor="rgb(250,250,250,0.8)" borderWidth="thin" borderColor="gray.700" borderRadius="2xl" p="5">
                        <HStack alignItems="end">
                            <Text fontSize="3xl" fontFamily="Burrito" color="main">LOS POLLOS ANALOS</Text>
                        </HStack>
                        <Text fontWeight={["200", "200", "400"]}>Honorable guests, esteemed ladies and gentlemen, we welcome you to a place that has conquered Solana with its extraordinary excellence and unique vision in the world of business. I am <b>Gustavo Fring</b>, the mastermind behind this revolutionary initiative that is redefining the entrepreneurial landscape of Solana. <b>Welcome to Los Pollos Analos!</b></Text>
                        <Text fontWeight={["200", "200", "400"]}>In this environment, where the irresistible aroma of our impeccably prepared chicken delineates the boundary between the ordinary and the exceptional, I offer you a unique experience that extends beyond culinary art into the realm of business. <b>Los Pollos Analos</b> is the result of a forward-thinking opportunity presented by the world of Solana, where lower taxation and unprecedented speed have made the opening of this one-of-a-kind establishment possible.</Text>
                        <Text fontWeight={["200", "200", "400"]}>We are here not only to announce the opening of this extraordinary venue but also to offer the opportunity to invest in the future through our token, <b>$LOS</b>. This token, playing on the resonance with SOL and with a touch of originality like <b>ANALOS</b>, along with Gus's reputation in business, represents a winning combination.</Text>
                        <Text fontWeight={["200", "200", "400"]}>Investing in <b>$LOS</b> is not just an act of trust in the <b>Los Pollos Analos brand</b>, it is also a step toward direct involvement in Gus Fring's business activities. This goes beyond a simple investment, it is a partnership in the vision of a prosperous and sustainable future.</Text>
                        <Text fontWeight={["200", "300", "400"]}><b><u>¡Bienvenidos al Los Pollos Analos!</u></b></Text>
                        <Link mt="3" display="flex" justifyContent="center" href="https://t.me/Certified_Portal" target="_blank">
                            <Button  fontSize={["lg", "xl", "2xl"]} borderRadius="xl" colorScheme='purple' fontFamily="Burrito" size="lg">JOIN THE COMMUNITY</Button>
                        </Link>
                    </VStack>
                    <Image width={["85%", "40%"]} src="hero.png" alt="LosPollosAnalos"></Image>
                </Stack>
            </Center>

            <Slide in={isOpen} transition={{"enter": {duration: 0.5}, "exit": {duration: 0.5}}} style={{ zIndex: 10 }}>
                <Flex w='100vw' bgColor={useColorModeValue('white', 'gray.800')} h="100vh" flexDir="column">
                <Flex justify="flex-end">
                <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon/>} onClick={onToggle}/>
                </Flex>
                <VStack gap={'15px'}>
                    {NAV_LINKS.map((link) => (
                        <NavItem key={`link-${link.label}`} {...link} onToggle={onToggle}/>
                    ))}
                </VStack>
                </Flex>   
            </Slide> 
        </Box>
    );
};

export default Hero;
