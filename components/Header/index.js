import { Heading, Box, Text, Icon, Flex } from "@chakra-ui/core";
import styles from "../../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <Flex direction="column">
      <Heading
        mb=".5rem"
        lineHeight="1"
        as="h1"
        textAlign="left"
        fontSize="72px"
        size="2xl"
      >
        Juan Cerrutti
      </Heading>
      <Flex direction="row" align="center" mb=".5rem">
        <Text fontSize="2xl" spacing={10}>
          JavaScript Developer
        </Text>
        <a
          className={styles.socialMedia}
          href="https://www.linkedin.com/in/juancerrutti"
          target="blank"
        >
          <Image
            src="/assets/linkedin.svg"
            alt="linkedin logo"
            width="30px"
            height="30px"
          />
        </a>
        <a
          className={styles.socialMedia}
          href="https://github.com/jcerrutti"
          target="blank"
        >
          <Image
            src="/assets/github.svg"
            alt="github image"
            width="30px"
            height="30px"
          />
        </a>
      </Flex>
    </Flex>
  );
};

export default Header;
