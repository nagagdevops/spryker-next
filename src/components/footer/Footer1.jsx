import Link from "next/link";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";

// styled component
const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));
const Footer1 = () => {
  return (
    <footer>
      <Box bgcolor="#222935">
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <Image mb={2.5} src="/assets/images/logo.svg" alt="logo" />
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                Since 1999, ACME Manufacturing has manufactured most kinds of machine parts and  machine components for a wide variety of uses and needs.  Contact us for custom work.
                </Paragraph>
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Top Categories
                </Box>

                <div>
                  {topcategoriesLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Popular Brands
                </Box>

                <div>
                  {popularBrandLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>
              
              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Customer Care
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Contact Us
                </Box>

                {/* <Box py={0.6} color="grey.500">
                  70 Washington Square South, New York, NY 10012, United States
                </Box> */}

                <Box py={0.6} color="grey.500">
                  Email: info@criticalriver.com
                </Box>

                <Box py={0.6} mb={2} color="grey.500">
                  Phone: +1-844-228-5319
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <IconButton
                        sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      >
                        <item.icon
                          fontSize="inherit"
                          sx={{
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
const topcategoriesLinks = [
  "Shredder",
  "Storage",
  "Writing Materials",
  "Copy Paper",
];
const aboutLinks = [
  "Imprint",
  "GTC",
  "Data Privacy",
];
const popularBrandLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk",
  "Purchasing",
  "Returns & Refunds"
];
const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/UILibOfficial",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/uilibofficial",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  {
    icon: Google,
    url: "https://www.google.com/search?q=ui-lib.com",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/uilibofficial/",
  },
];
export default Footer1;
