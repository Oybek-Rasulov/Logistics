import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import Dashboard from '../components/admin/Dashboard';
import Users from '../components/admin/Users';
import AdminChatPanel from '../components/admin/AdminChatPanel';
import { useState, useEffect } from "react";
import Drivers from '../components/admin/Drivers';
import Brokers from '../components/admin/Brokers';
import Charts from '../components/admin/Charts';
import ContactMessages from '../components/admin/ContactMessages';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    content: <Dashboard />,
  },
  {
    segment: 'chat',
    title: 'Chat',
    icon: <LayersIcon />,
    content: <AdminChatPanel />,
  },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const [users, setUsers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/drivers');
        const data = await res.json();
        setDrivers(data);
      } catch (error) {
        console.error('Failed to fetch drivers:', error);
      }
    };

    fetchDrivers();
  }, []);

  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/brokers');
        const data = await res.json();
        setBrokers(data);
      } catch (error) {
        console.error('Failed to fetch brokers:', error);
      }
    };
  
    fetchBrokers();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/contact");
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch contact messages:", error);
      }
    };

    fetchMessages();
  }, []);
  


  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1, borderBottom: '1px solid #eee' }}>
          <Typography variant="h6" sx={{ ml: 2 }}>Logistics</Typography>
        </Box>

        <PageContainer>
          {router.pathname === '/dashboard' && (
            <Grid container spacing={1}>
              <Grid xs={12}  className="mb2">
                <Charts users={users} />
              </Grid>
              <Grid xs={12}>
                <Users title="Users" users={users} />
              </Grid>
              <Grid xs={12}>
                <Drivers title="Drivers" drivers={drivers} />
              </Grid>
              <Grid xs={12}>
                <Brokers title="Broker Applications" brokers={brokers} />
              </Grid>
              
              <Grid xs={12}>
                <ContactMessages title="Contact Submissions" messages={messages} />
              </Grid>
              <Grid xs={12}><Skeleton height={14} /></Grid>
            </Grid>
          )}

          {router.pathname === '/chat' && (
            <AdminChatPanel />
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
