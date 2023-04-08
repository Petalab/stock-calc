import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBlock>
      <div>Copyright © 2023 Petalab. All rights reserved</div>
      <div>
        만든 사람: <MailTo href="mailto:uu5474@gmail.com">uu5474@gmail.com</MailTo>
      </div>
      <div>version: 1.0.0</div>
    </FooterBlock>
  );
};

const FooterBlock = styled.footer`
  max-width: 58rem;
  margin: auto;
  color: ${({ theme }) => theme.colors.footerGray};
  font-size: 1.3rem;
  line-height: 1.5;
`;

const MailTo = styled.a`
  text-decoration: underline;
`;

export default Footer;
