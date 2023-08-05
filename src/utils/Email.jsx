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
  // <Tailwind
  //   config={{
  //     theme: {
  //       fontFamily: {
  //         sans: ["inter"],
  //       },
  //     },
  //   }}
  // >
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={body}>
      <Container>
        <Text style={welcome}>Welcome</Text>
        <Text className="capitalize">Hi {name},</Text>
        <Text>
          Welcome to DukaMarket, the sales intelligence platform that helps you
          uncover qualified leads and close deals faster.
        </Text>
        <Section>
          <Button
            
            style={btn}
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
);

export default Email;

const welcome = {
  fontSize: "24px",
  fontWeight: "font-bold",
};

const body = {
  fontFamily: "inter",
};

const btn = {
  backgroundColor: "red",
};
