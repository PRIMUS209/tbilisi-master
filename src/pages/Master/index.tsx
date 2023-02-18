import { Button, Box, ImageListItem } from "@mui/material";
import { useNavigate } from "react-router";
import DmitriiMaster from "images/DmitriiMaster/01.jpg";
import ArkadiiMaster from "images/DmitriiMaster/03.jpg";
import * as p from "routes/path";

const mastersList = [
  {
    name: "Dmitrii",
    avatar: DmitriiMaster,
    discipline: "fridge",
  },
  {
    name: "Arkadii",
    avatar: ArkadiiMaster,
    discipline: "compucters",
  },
];

const MastersPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      Masters list
      <Box>
        {mastersList.map((master) => {
          return (
            <Box key={master.name + master.discipline}>
              <Button
                variant="outlined"
                onClick={() =>
                  navigate(p.PATH_MASTERS + `/${master.name.toLowerCase()}`)
                }
              >
                {master.name}
              </Button>
              <ImageListItem>
                <img src={master.avatar} alt={master.name} loading="lazy" />
              </ImageListItem>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MastersPage;
