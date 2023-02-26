import { useNavigate } from "react-router";

import {
  Alert,
  Box,
  Button,
  Link,
  Paper,
  Typography,
  Snackbar,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WestIcon from "@mui/icons-material/West";

import DmitriiMaster_06 from "images/DmitriiMaster/06.jpg";
import DmitriiMaster_07 from "images/DmitriiMaster/07.jpg";
import DmitriiMaster_08 from "images/DmitriiMaster/08.jpg";
import DmitriiMaster_09 from "images/DmitriiMaster/09.jpg";
import { useEffect, useState } from "react";

const imagesData = [
  { image: DmitriiMaster_06, title: "DmitriiMaster_06" },
  { image: DmitriiMaster_07, title: "DmitriiMaster_07" },
  { image: DmitriiMaster_08, title: "DmitriiMaster_08" },
  { image: DmitriiMaster_09, title: "DmitriiMaster_09" },
];

const MasterDmitriiPage = () => {
  const navigate = useNavigate();
  const [successCopied, setSuccessCopied] = useState(false);

  const saveMasterNumber = () => {
    navigator.clipboard.writeText("+995 577 42 31 91");
    setSuccessCopied(true);
  };

  if (successCopied) {
    setTimeout(() => {
      setSuccessCopied(false);
    }, 500);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#182C48",
        height: "100%",
        color: "#e7ffeb",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <WestIcon
          sx={{ position: "absolute", left: "12px" }}
          onClick={() => navigate(-1)}
        />
        <Typography variant="h4" sx={{ margin: "0 auto" }}>
          About Master
        </Typography>
      </Box>
      <Paper sx={{ backgroundColor: "#d2e9f5", textAlign: "left" }}>
        <Typography variant="h6">
          Name : <strong>Dmitrii</strong>
        </Typography>
        <Typography variant="h5">
          Phone number :{" "}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            display="inline"
            onClick={saveMasterNumber}
          >
            {/* <Link
              underline="none"
              color="inherit"
              href="tel: +995 577 42 31 91"
            > */}
            +995 577 42 31 91
            {/* </Link> */}
          </Typography>
        </Typography>
        <Typography variant="h6">
          In bussiness from <strong>2015</strong>
        </Typography>
        <Typography variant="h6">
          Experience <strong>8 years</strong>
        </Typography>
        <Typography variant="h6">Professional approach</Typography>
        <Typography variant="h6">
          Over <strong>1000</strong> refrigerators and washing machines
          reanimated
        </Typography>
      </Paper>
      <ImageList sx={{ maxWidth: 400, minHeight: 320 }} cols={2}>
        {imagesData.map((item) => (
          <ImageListItem key={item.title}>
            <img src={item.image} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

      <Box
        sx={{
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Find master on social media</Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            underline="none"
            color="inherit"
            href="https://t.me/rem_holod_Tbs"
          >
            <TelegramIcon />
          </Link>
          <Link
            underline="none"
            color="inherit"
            href="https://www.instagram.com/dmitri_mastertbs/?igshid=YmMyMTA2M2Y%3D"
          >
            <InstagramIcon />
          </Link>
          <Link
            underline="none"
            color="inherit"
            href="https://www.facebook.com/RemHolodTBL?mibextid=ZbWKwL"
          >
            <FacebookIcon />
          </Link>
        </Box>
        <Button
          sx={{ width: "88%", height: "52px", margin: "24px 20px" }}
          variant="contained"
        >
          <span itemProp="telephone">
            <Link
              underline="none"
              color="inherit"
              href="https://t.me/Dm163_178"
            >
              Telegram the Master
            </Link>
          </span>
        </Button>
      </Box>
      {successCopied ? (
        <Alert
          sx={{
            position: "absolute",
            width: "80%",
            bottom: "10%",
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
          severity="success"
        >
          Number copied to your clipboard
        </Alert>
      ) : null}
    </Box>
  );
};

export default MasterDmitriiPage;
