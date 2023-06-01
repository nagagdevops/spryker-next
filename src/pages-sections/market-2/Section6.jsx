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
  justifyContent: "flex-end",
  backgroundPosition: "center left",
  backgroundRepeat: "no-repeat",
  backgroundColor: "white",
  //backgroundImage: `url(/assets/images/banners/long-banner.jpg)`,
  [theme.breakpoints.down("md")]: {
    gap: "1rem",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
const Section6 = () => {
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
            YOUR EXPERIENCE IS OUR <Span color="primary.main">PRIORITY</Span>
          </H3>
          <Paragraph fontSize={16}  sx={{
        my: 2,
      }}>
          Look at any desktop to know that stationary is an important part of your employees day-to-day organization. Pens and 
other accessories such as rulers, sharpeners, erasers, computer accessories, hole punches, scissors and more are your
 employees' most critical tools. Without a ballpoint pen, your company will not be able to do their daily work.
</Paragraph>
<Paragraph fontSize={16}  sx={{
        my: 2,
      }} >
From your desk in the office, in meetings, trainings, or in your home
you will find suitable stationery for every need and purpose. Our wide assortment of office supplies offers a large
 selection of practical stationery, accessories and furniture. Order well-known brands like Edding, Stabilo, Pelikan and 
Faber Castell online now.
          </Paragraph>
        </Box>
      </BannerWrapper>
    </Container>
  );
};
export default Section6;
