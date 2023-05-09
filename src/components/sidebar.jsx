import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SidebarWrapper = styled('div')({
  backgroundColor: '#f5f5f5',
  padding: '16px',
  width: '200px',
  height: '100vh',
  //position: 'fixed',
  top: '0',
  left: '0',
});

const SidebarHeading = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '16px',
});

const SidebarLink = styled(ListItem)({
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  '&.active': {
    backgroundColor: '#e0e0e0',
  },
});

const Sidebar = ({ currentPage }) => {
  return (
    <SidebarWrapper>
    
      <List>
        <SidebarLink button selected={currentPage === 'home'} className={currentPage === 'home' ? 'active' : ''}>
          <ListItemText primary="Home" />
        </SidebarLink>
        <SidebarLink button selected={currentPage === 'about'} className={currentPage === 'about' ? 'active' : ''}>
          <ListItemText primary="About" />
        </SidebarLink>
        <SidebarLink button selected={currentPage === 'contact'} className={currentPage === 'contact' ? 'active' : ''}>
          <ListItemText primary="Contact" />
        </SidebarLink>
      </List>
    </SidebarWrapper>
  );
};

export default Sidebar;
