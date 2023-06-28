import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const Email = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <Heading>
            Enter the following code to finish reseting password.
          </Heading>
          <Text >number</Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
