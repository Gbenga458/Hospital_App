// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import {Link} from 'react-router-dom'

// export default function DoctorCard({item}) {
//     const {expertise,name,image,_id}=item
//     console.log(item)
    
//   return (
//     <Card sx={{ maxWidth: 300,
//      }}>
//       <CardMedia
//       sx={{ backgroundSize: "cover",
//         backgroundPosition: "center"
//          }}
//          height="200"
//         image={image}
//         title={name}
//         component='img'
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//          {name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>

//         <Button size="small" as={Link} to={`/form/${item._id}`} >Appointment</Button>
        
//       </CardActions>
//     </Card>
//   );
// }
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DoctorCard = ({ item }) => {
  const { expertise, name, image, _id } = item;

  // Fallback image if none is provided
  const defaultImage = "path/to/default/image.jpg"; // Replace with your default image path

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        height="200"
        image={image || defaultImage}
        title={name}
        component="img"
        alt={name} // Added alt text for accessibility
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Expertise: {expertise}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/form/${_id}`}>
          Appointment
        </Button>
      </CardActions>
    </Card>
  );
};

// PropTypes for type checking
DoctorCard.propTypes = {
  item: PropTypes.shape({
    expertise: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
