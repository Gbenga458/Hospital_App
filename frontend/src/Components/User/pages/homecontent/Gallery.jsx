import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function Gallery() {
  return (
    <Box  sx={{width:"100%"}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
     img: 'https://ix-cdn.b2e5.com/images/47992/47992_2d046563062f4037a1834ec32ac9ab04_1521224323.jpeg',
    title: 'Bed',
  },
  {
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWPDe74fNNJCnMWF3_ccJ-tBkUC0kVB4DRQ&s',
    title: 'Books',
  },
  {
     img: 'https://images.squarespace-cdn.com/content/v1/5601a1b2e4b0eaa138babe0c/1500860972078-4QWM119B45LP5RM3UZZ8/surgicalteam.jpg?format=1500w',
    title: 'Sink',
  },
  {
     img: 'https://luxedental.com.ng/wp-content/uploads/2024/08/Cost-of-Tooth-Extraction-in-Lagos.jpg',
    title: 'Kitchen',
  },
  {
     img: 'https://hms.harvard.edu/sites/default/files/2024-05/haiti_global_surgery_850.jpg',
    title: 'Blinds',
  },
  {
     img: 'https://dentalclinics.osu.edu/sites/default/files/styles/wide_16x9/public/2024-02/GroupStudentClinic.jpg?itok=q5vgnobM',
    title: 'Chairs',
  },
  {
    img: 'https://swiftss.org/wp-content/uploads/2021/01/IMAG4965-scaled.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://bouve.northeastern.edu/wp-content/uploads/2023/05/what-do-pharmacist-do-northeastern-graduate.webp',
    title: 'Doors',
  },
  {
    img: 'https://longingmedicalcentre.ng/wp-content/uploads/2020/12/operation-surgery-hospital-80124.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjUhIiDX_pImd4sf8r7TeLfkIc7wVtnZ5Iw&s',
    title: 'Storage',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjTzKbdZfWid-hvwT5QcnSOQEWKVT96_0lg&s',
    title: 'Candle',
  },
  
];