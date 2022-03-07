import styled from 'styled-components';
const Login=()=>{
    return (
        <Container>
        <Content>
            <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET IT ALL THERE</SignUp>
            <Description>
             Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited. Disney+ Hotstar currently offers over 100,000 hours of TV content and movies across 9 languages, and every major sport covered live
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
            <BgImage />
        </Content>
    </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height : 100vh;
`
const Content = styled.div`
    margin-bottom : 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    padding : 80px 40px;
    height : 100%;
`
const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    height : 100%;
    background-size : cover;
    background-position : top;
    background-repeat: no-repeat;
    position: absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.button`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing : 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
       background-color: #0483ee;

    }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  min-height: 1px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;