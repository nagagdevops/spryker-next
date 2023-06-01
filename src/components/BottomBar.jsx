import Link from "next/link";
import Image from "components/BazaarImage";
import { useState } from "react";
import {
  Add,
  ExpandMore,
  Facebook,
  Instagram,
  Remove,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  IconButton,
  MenuItem,
  styled,
} from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import { H5 } from "components/Typography";
import { FlexRowCenter, FlexBox } from "components/flex-box";
import BazaarMenu from "components/BazaarMenu";
import { layoutConstant } from "utils/constants";
import { useRouter } from "next/router";

// styled component
const TopbarWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "bgColor",
})(({ theme, bgColor, expand }) => ({
  fontSize: 12,
  height: layoutConstant.bottombarHeight,
  color: theme.palette.secondary.contrastText,
  background: bgColor || theme.palette.grey[900],
  transition: "height 300ms ease",
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
  "& .expand": {
    display: "none",
    padding: 0,
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
  [theme.breakpoints.down("sm")]: {
    height: expand ? 80 : layoutConstant.topbarHeight,
    "& .topbarRight": {
      display: expand ? "flex" : "none",
      paddingBottom: 5,
    },
    "& .expand": {
      display: "block",
      height: layoutConstant.topbarHeight,
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}));
const StyledContainer = styled(Container)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    flexDirection: "column",
  },
}));

// ===========================================

// ===========================================

const Bottombar = ({ bgColor }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [expand, setExpand] = useState(false);
  const [language, setLanguage] = useState(router.locale);
  const handleLanguageClick = (lang) => () => {
    setLanguage(lang);
    router.push(
      {
        pathname,
        query,
      },
      asPath,
      {
        locale: lang,
      }
    );
  };
  return (
    <TopbarWrapper bgColor={bgColor} expand={expand ? 1 : 0}>
      <StyledContainer>
        <FlexRowCenter width="100%">
          <H5 className="title" sx={{ mr: 1, pt:1 }}>Build with </H5>
          <Link href="/">
              <Image
                height={30}
                src="/assets/images/spryker-white-sm.svg"
                alt="logo"
              />
            </Link>
        </FlexRowCenter>
    
      </StyledContainer>
    </TopbarWrapper>
  );
};
const socialLinks = [
  {
    id: 1,
    Icon: Twitter,
    url: "#",
  },
  {
    id: 2,
    Icon: Facebook,
    url: "#",
  },
  {
    id: 3,
    Icon: Instagram,
    url: "#",
  },
];
const languageList = [
  {
    title: "EN",
    value: "en",
  },
  {
    title: "DE",
    value: "de",
  },
];
export default Bottombar;
