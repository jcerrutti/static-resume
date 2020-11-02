import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
import Image from "next/image";

const JobsAccordion = ({ jobs }) => {
  return (
    <Accordion w="100%" defaultIndex={[0]} allowToggle={false}>
      {jobs.map(({ company, description, logo, bullets }) => (
        <AccordionItem key={company}>
          <AccordionHeader>
            <Flex w="100%" direction="row">
              <Image width="100px" height="30px" src={logo} alt={company} />
            </Flex>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Text>{description}</Text>
            <List styleType="disc">
              {bullets &&
                bullets.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default JobsAccordion;
