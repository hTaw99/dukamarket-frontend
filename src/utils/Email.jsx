import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
// import { Tailwind } from "@react-email/tailwind";

const Email = ({ name }) => (
  <Tailwind
  // config={{
  //   theme: {
  //     fontFamily: {
  //       sans: ["inter"],
  //     },
  //   },
  // }}
  >
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body className="font-sans">
        <Container>
          <Text className="font-bold text-xl">Welcome</Text>
          <Text className="uppercase">Hi {name},</Text>
          <Text>
            Welcome to DukaMarket, the sales intelligence platform that helps
            you uncover qualified leads and close deals faster.
          </Text>
          <Section>
            <Button
              pX={12}
              pY={12}
              className="bg-red-500 rounded-md text-white"
              href="https://dukamarket.vercel.app"
            >
              Get started
            </Button>
          </Section>
          <Text>
            Best,
            <br />
            The DukaMarket team
          </Text>
          <Hr />
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default Email;
