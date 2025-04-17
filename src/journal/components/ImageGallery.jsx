
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export const ImageGallery=({images=[]}) => {
    return (
        <ImageList sx={{ width: "100%" }} cols={4} >
            {images.map((item) => (
                <ImageListItem key={item}>
                    <img
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
