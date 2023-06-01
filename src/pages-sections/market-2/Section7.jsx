import { Box, Container, styled } from "@mui/material";
import WhiteButton from "components/WhiteButton";
import { H3, Paragraph, Span } from "components/Typography";
import { blue, marron, paste, primary, themeColors } from "theme/themeColors";
const BannerWrapper = styled(Box)(({ theme }) => ({
  gap: "5rem",
  padding: "2rem",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  borderRadius: "3px",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "white",
  backgroundImage: `url(/assets/images/banners/long-banner.jpg)`,
  [theme.breakpoints.down("md")]: {
    gap: "1rem",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
const Section7 = () => {
  return (
    <Container
      sx={{
        my: 8,
      }}
    >
      <BannerWrapper >
        <Box textAlign="center"  sx={{
        my: 2,
      }}>
          <H3
            fontSize={{
              sm: 36,
              xs: 28,
            }}
            lineHeight={1}
            sx={{
              my: 1,
            }}
          >
            SIGN UP FOR OUR  <Span color="primary.main">NEWSLETTER</Span></H3>
          <Paragraph fontSize={16}  sx={{
        my: 2,
      }}>Get 10% OFF your first order and receive weekly updates in your inbox 
      </Paragraph>
      <WhiteButton size="large">Subscribe to our Newsletter</WhiteButton>
      
        </Box>
      </BannerWrapper>
    </Container>
  );
};
export default Section7;
