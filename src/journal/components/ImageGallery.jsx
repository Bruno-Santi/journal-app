import { ImageList, ImageListItem } from "@mui/material";
export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={160}>
      {images?.map((item) => (
        <ImageListItem key={item}>
          <img
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            alt={item}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
