import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Topbar() {
  return (
    <AppBar position="static" elevation={1} sx={{ bgcolor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div">Admin Panel</Typography>
      </Toolbar>
    </AppBar>
  );
}

