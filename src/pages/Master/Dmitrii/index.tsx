import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DmitriiMaster_01 from "images/DmitriiMaster/01.jpg";
import DmitriiMaster_02 from "images/DmitriiMaster/02.jpg";
import DmitriiMaster_03 from "images/DmitriiMaster/03.jpg";
import DmitriiMaster_04 from "images/DmitriiMaster/04.jpg";
import DmitriiMaster_05 from "images/DmitriiMaster/05.jpg";
import DmitriiMaster_06 from "images/DmitriiMaster/06.jpg";
import DmitriiMaster_07 from "images/DmitriiMaster/07.jpg";
import DmitriiMaster_08 from "images/DmitriiMaster/08.jpg";
import DmitriiMaster_09 from "images/DmitriiMaster/09.jpg";

const imagesData = [
  { image: DmitriiMaster_01, title: "DmitriiMaster_01" },
  { image: DmitriiMaster_02, title: "DmitriiMaster_02" },
  { image: DmitriiMaster_03, title: "DmitriiMaster_03" },
  { image: DmitriiMaster_04, title: "DmitriiMaster_04" },
  { image: DmitriiMaster_05, title: "DmitriiMaster_05" },
  { image: DmitriiMaster_06, title: "DmitriiMaster_06" },
  { image: DmitriiMaster_07, title: "DmitriiMaster_07" },
  { image: DmitriiMaster_08, title: "DmitriiMaster_08" },
  { image: DmitriiMaster_09, title: "DmitriiMaster_09" },
];

const MasterDmitriiPage = () => {
  return (
    <Box sx={{ backgroundColor: "#e7fdec", height: "100%" }}>
      <Box>
        <Typography variant="h4">About Master</Typography>
        <Paper sx={{ backgroundColor: "#d2e9f5" }}>
          <Typography variant="h6">
            Name :{" "}
            <Typography sx={{ fontWeight: "bold" }} display="inline">
              Dmitrii
            </Typography>
          </Typography>
          <Typography variant="h5">
            Phone number :{" "}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              display="inline"
            >
              {" "}
              +995 577 42 31 91
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
      </Box>
      <ImageList sx={{ maxWidth: 400, minHeight: 450 }} cols={3}>
        {imagesData.map((item) => (
          <ImageListItem key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Typography variant="h6">
        {" "}
        Please contact this master for more info and free consultation
      </Typography>
    </Box>
  );
};

export default MasterDmitriiPage;
