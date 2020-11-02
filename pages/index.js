import Head from "next/head";
import { Box, Heading, Text } from "@chakra-ui/core";
import styles from "../styles/Home.module.css";
import JobsAccordion from "../components/JobsAccordion";
import Header from "../components/Header";

const jobs = [
  {
    company: "Mercado Libre",
    description:
      "Working as Frontend Software Engineer on Mercado Libre Credits.",
    bullets: [
      "Led a new initiative where we added new functionalities to a widget on the web app of Mercado Credits, involving the deployment for three countries, and organizing the work with content and business area.",
      "Ownership of new features. From design, implementation to production deployment.",
      "Analyze metrics and understand how features impacts on customers.",
    ],
    logo: "/assets/meli.svg",
  },
  {
    company: "McAfee",
    description:
      "Worked as Frontend Software Engineer on McAfee MVISION EDR, responsible for designing and implementing features.",
    logo: "/assets/mcafee.svg",
    bullets: [
      "Take the lead to move to a new Angular 6 application, implementing a new metrics module for the project.",
      "Design and Development of unit test with Jasmine and integration test with Python.",
      "Scrum Master backup of a 9 member scrum team.",
    ],
  },
  {
    company: "Darwoft",
    description: "Worked for Deloitte’s account on multiple projects.",
    logo: "/assets/darwoft.png",
  },
  {
    company: "Globant",
    description: "Worked for Deloitte’s account on multiple projects.",
    logo: "/assets/globant.svg",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juan Cerrutti</title>
        <link
          rel="shortcut icon"
          href="./favicons/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="./favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="./favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="./favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="./favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="./favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="./favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons/favicon-16x16.png"
        />
      </Head>
      <main className={styles.main}>
        <Box
          mr="2rem"
          width={[
            "100%", // base
            "100%", // 480px upwards
            "100%", // 768px upwards
            "50%", // 992px upwards
          ]}
        >
          <Header />
          <Text textAlign="justify">
            My passion is to solve problems, I'm always trying to find the best
            path to achieve a solution. No matter what technology, if I don't
            know about it, I will be happy to learn new things if at the end of
            the day that helps. I'm specialized on React and Angular, working on
            big projects, using server-side rendering strategies and Node.js for
            backend solutions.
          </Text>
        </Box>
        <Box
          width={[
            "100%", // base
            "100%", // 480px upwards
            "100%", // 768px upwards
            "50%", // 992px upwards
          ]}
        >
          <Heading mb="1rem" Heading as="h3" size="lg">
            Experience
          </Heading>
          <JobsAccordion jobs={jobs} />
        </Box>
      </main>
    </div>
  );
}
