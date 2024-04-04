import { Box, Rating, Typography } from '@mui/material';
import Checkbox from '../Checkbox/Checkbox';
import StarIcon from '../../assets/StarIcon.svg?react';
import EmptyStarIcon from '../../assets/EmptyStarIcon.svg?react';
import { RatingData } from '../../utils/constants';

const styles = {
  container: { display: 'flex', justifyContent: 'space-between', padding: '10px 0' },
  RatingContainer: { display: 'flex' },
  star: { marginRight: '5px' }
};

export default function RatingIcons() {
  return (
    <>
      {RatingData.map((rating, index) => (
        <Box key={index} sx={styles.container}>
          <Box sx={styles.RatingContainer}>
            <Rating
              name={`rating-${index}`}
              value={rating.value}
              readOnly
              icon={<StarIcon style={styles.star} />}
              emptyIcon={<EmptyStarIcon style={styles.star} />}
            />
            <Typography style={{ marginLeft: '8px' }}>{rating.label}</Typography>
          </Box>
          <Checkbox />
        </Box>
      ))}
    </>
  );
}
