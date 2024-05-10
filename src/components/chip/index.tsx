import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Box } from '@mui/material';

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyleType: 'none'
}));

export  function ChipsArray() {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: '12345' },
    { key: 1, label: '556677' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Box
    display="flex"
    flexDirection="row"
    alignContent="center"
    alignItems="center"
    justifyContent="center"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
