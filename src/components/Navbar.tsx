import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

const links = [
  {
    href: "/",
    title: "首頁"
  },
  {
    href: "/zod",
    title: "Zod 測試"
  }
];

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {links.map(link => (
            <Box key={link.href} margin="0 12px">
              <CustomLink to={link.href}>{link.title}</CustomLink>
            </Box>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;