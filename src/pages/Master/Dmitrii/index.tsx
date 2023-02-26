import { useNavigate } from "react-router";

import { Box, Button, Link, Paper, Typography } from "@mui/material";
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

const imagesData = [
  { image: DmitriiMaster_06, title: "DmitriiMaster_06" },
  { image: DmitriiMaster_07, title: "DmitriiMaster_07" },
  { image: DmitriiMaster_08, title: "DmitriiMaster_08" },
  { image: DmitriiMaster_09, title: "DmitriiMaster_09" },
];

const MasterDmitriiPage = () => {
  const navigate = useNavigate();
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
          Name :{" "}
          <Typography sx={{ fontWeight: "bold" }} display="inline">
            Dmitrii
          </Typography>
        </Typography>
        <Typography variant="h5">
          Phone number :{" "}
          <Typography variant="h6" sx={{ fontWeight: "bold" }} display="inline">
            <Link
              underline="none"
              color="inherit"
              href="tel: +995 577 42 31 91"
            >
              +995 577 42 31 91
            </Link>
          </Typography>
        </Typography>
        <Typography variant="h6">
          In bussiness from{" "}
          <Typography sx={{ fontWeight: "bold" }} display="inline">
            2015
          </Typography>
        </Typography>
        <Typography variant="h6">
          Experience{" "}
          <Typography sx={{ fontWeight: "bold" }} display="inline">
            8 years
          </Typography>
        </Typography>
        <Typography variant="h6">Professional approach</Typography>
        <Typography variant="h6">
          Over{" "}
          <Typography sx={{ fontWeight: "bold" }} display="inline">
            1000
          </Typography>{" "}
          refrigerators and washing machines reanimated
        </Typography>
      </Paper>
      <ImageList sx={{ maxWidth: 400, minHeight: 320 }} cols={2}>
        {imagesData.map((item) => (
          <ImageListItem key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
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
          <Link underline="none" color="inherit" href="https://t.me/Dm163_178">
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
          <Link underline="none" color="inherit" href="tel: +995 577 42 31 91">
            Call Master
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default MasterDmitriiPage;
