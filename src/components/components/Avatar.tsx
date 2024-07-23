import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function ImageAvatars({ src }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Avatar" src={src} />
    </Stack>
  );
}