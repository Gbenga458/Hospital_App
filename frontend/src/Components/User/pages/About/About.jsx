// import React from 'react';
// import { Container, Typography, Grid, Card, CardMedia, List, ListItem } from '@mui/material';
// import AboutImage from './AboutImg';

// const AboutUs = () => {
//   return (
//     <Container maxWidth="xl"   >
//       <AboutImage/>
//       <Typography variant="h4" component="h1" style={{ marginBottom: '1rem', marginTop: '2rem' ,}}>
//         About Us
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Welcome to our hospital management system! We are dedicated to providing
//         exceptional healthcare services to our patients and streamlining
//         administrative tasks for our staff.
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Our team of experienced doctors, nurses, and administrators work
//         tirelessly to ensure the smooth operation of the hospital and the
//         highest level of care for our patients.
//       </Typography>
//       <Typography variant="h5" component="h2" style={{ marginBottom: '1rem' }}>
//         Our Mission
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Our mission is to improve the health and well-being of our community by
//         providing accessible, high-quality medical services. We strive to
//         enhance patient outcomes, promote health education, and implement
//         innovative technology solutions to optimize healthcare delivery.
//       </Typography>
//       <Typography variant="h5" component="h2" style={{ marginBottom: '1rem' }}>
//         Our Values
//       </Typography>
//       <List>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Compassion: We treat every patient with empathy and understanding.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Excellence: We are committed to delivering the highest standard of care.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Integrity: We uphold ethical principles and maintain trust.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Collaboration: We foster teamwork and cooperation among our staff.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Innovation: We embrace new technologies and ideas to advance healthcare.</Typography>
//         </ListItem>
//       </List>
//       <Typography variant="h5" component="h2" style={{ marginBottom: '1rem' }}>
//         Contact Us
//       </Typography>
//       <Typography variant="body1" paragraph>
//         If you have any questions, suggestions, or would like to make an
//         appointment, please feel free to reach out to us. Our friendly staff
//         will be happy to assist you.
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Phone: +977-9862164447
//         <br />
//         Email:  bastolaronak12@gmail.com
//       </Typography>
//     </Container>
//   );
// };

// export default AboutUs;



import React from 'react';
import { Container, Typography, Grid, List, ListItem, styled } from '@mui/material';
import AboutImage from './AboutImg';

const SectionTypography = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const ListItemText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const AboutUs = () => {
  return (
    <Container maxWidth="xl">
      {/* About Image */}
      <AboutImage />

      {/* Section: About Us */}
      <SectionTypography variant="h4" component="h1" gutterBottom>
        About Us
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Welcome to our hospital management system! We are dedicated to providing exceptional healthcare services to our patients and streamlining administrative tasks for our staff.
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Our team of experienced doctors, nurses, and administrators work tirelessly to ensure the smooth operation of the hospital and the highest level of care for our patients.
      </SectionTypography>

      {/* Section: Mission */}
      <SectionTypography variant="h5" component="h2" gutterBottom>
        Our Mission
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Our mission is to improve the health and well-being of our community by providing accessible, high-quality medical services. We strive to enhance patient outcomes, promote health education, and implement innovative technology solutions to optimize healthcare delivery.
      </SectionTypography>

      {/* Section: Values */}
      <SectionTypography variant="h5" component="h2" gutterBottom>
        Our Values
      </SectionTypography>
      <List>
        {[
          { value: 'Compassion: We treat every patient with empathy and understanding.' },
          { value: 'Excellence: We are committed to delivering the highest standard of care.' },
          { value: 'Integrity: We uphold ethical principles and maintain trust.' },
          { value: 'Collaboration: We foster teamwork and cooperation among our staff.' },
          { value: 'Innovation: We embrace new technologies and ideas to advance healthcare.' },
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemText variant="body1">{item.value}</ListItemText>
          </ListItem>
        ))}
      </List>

      {/* Section: Contact Us */}
      <SectionTypography variant="h5" component="h2" gutterBottom>
        Contact Us
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        If you have any questions, suggestions, or would like to make an appointment, please feel free to reach out to us. Our friendly staff will be happy to assist you.
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Phone: +2348105309866
        <br />
        Email: gbengabusayo765@gmail.com
      </SectionTypography>
    </Container>
  );
};

export default AboutUs;
