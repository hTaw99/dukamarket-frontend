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
      {/* <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview> */}
      <Body className="font-sans">
        {/* <Container> */}
        <Text className="font-bold text-xl">Welcome</Text>
        {/* <Text className="capitalize">Hi {name},</Text>
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
        <Hr /> */}
        {/* </Container> */}
      </Body>
    </Html>
  // </Tailwind>

  // <>
  //   <div>
  //     <table>
  //       <tbody>
  //         <tr>
  //           <td>
  //             <table >
  //               <tr>
  //                 <td >
  //                   <div>
  //                     <div>
  //                       <div>
  //                         <div>
  //                           <div>
  //                             <table

  //                             >
  //                               <tbody>
  //                                 <tr>
  //                                   <td>
  //                                     <div>
  //                                       <p>
  //                                         <strong>
  //                                           T H A N K S&nbsp; &nbsp;F O R&nbsp;
  //                                           &nbsp;S I G N I N G&nbsp; &nbsp;U P
  //                                           !
  //                                         </strong>
  //                                       </p>
  //                                     </div>
  //                                   </td>
  //                                 </tr>
  //                               </tbody>
  //                             </table>

  //                             <table

  //                             >
  //                               <tbody>
  //                                 <tr>
  //                                   <td >
  //                                     <div>
  //                                       <p>
  //                                         <span>
  //                                           <strong>
  //                                             <span>Welcome, {name}</span>
  //                                           </strong>
  //                                         </span>
  //                                       </p>
  //                                     </div>
  //                                   </td>
  //                                 </tr>
  //                               </tbody>
  //                             </table>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div>
  //                     <div>
  //                       <div>
  //                         <div>
  //                           <div>
  //                             <table

  //                             >
  //                               <tbody>
  //                                 <tr>
  //                                   <td >
  //                                     <div>
  //                                       <p>
  //                                         <span>Hi, </span>
  //                                       </p>
  //                                       <div>
  //                                         <div>
  //                                           <span>
  //                                             <span>
  //                                               Welcome to DukaMarket, the sales
  //                                               intelligence platform that helps
  //                                             </span>
  //                                             <span>
  //                                               you uncover qualified leads and
  //                                               close deals faster.
  //                                             </span>
  //                                           </span>
  //                                         </div>
  //                                       </div>
  //                                     </div>
  //                                   </td>
  //                                 </tr>
  //                               </tbody>
  //                             </table>

  //                             <table

  //                             >
  //                               <tbody>
  //                                 <tr>
  //                                   <td>
  //                                     <div>
  //                                       <v:roundrect

  //                                       >
  //                                         <w:anchorlock  />
  //                                         <center>
  //                                           <a className="bg-red-500 py-2 px-4 text-white">
  //                                             <span>
  //                                               <span>
  //                                                 <strong>
  //                                                   <span>Get started</span>
  //                                                 </strong>
  //                                               </span>
  //                                             </span>
  //                                           </a>
  //                                         </center>
  //                                       </v:roundrect>
  //                                     </div>
  //                                   </td>
  //                                 </tr>
  //                               </tbody>
  //                             </table>

  //                             <table

  //                             >
  //                               <tbody>
  //                                 <tr>
  //                                   <td>
  //                                     <div>
  //                                       <p>
  //                                         <span>Thanks,</span>
  //                                       </p>
  //                                       <p>
  //                                         <span>Team DUKAMARKET</span>
  //                                       </p>
  //                                     </div>
  //                                   </td>
  //                                 </tr>
  //                               </tbody>
  //                             </table>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div>
  //                     <div>
  //                       <div>
  //                         <div>
  //                           <div>
  //                             <table

  //                             >
  //                               <tbody>
  //                                 <tr>
  //                                   <td >
  //                                     <div>
  //                                       <p>
  //                                         <span>
  //                                           <strong>Get in touch</strong>
  //                                         </span>
  //                                       </p>
  //                                       <p>
  //                                         <span>01115982393</span>
  //                                       </p>
  //                                       <p>
  //                                         <span>Info@teamduka.com</span>
  //                                       </p>
  //                                     </div>
  //                                   </td>
  //                                 </tr>
  //                               </tbody>
  //                             </table>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div>
  //                     <div>
  //                       <div>
  //                         <div>
  //                           <div>
  //                             <table

  //                             >
  //                               <tbody>
  //                                 <tr>
  //                                   <td >
  //                                     <div>
  //                                       <p>
  //                                         <span>
  //                                           Copyrights © Company All Rights
  //                                           Reserved
  //                                         </span>
  //                                       </p>
  //                                     </div>
  //                                   </td>
  //                                 </tr>
  //                               </tbody>
  //                             </table>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </td>
  //               </tr>
  //             </table>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // </>
);

export default Email;
