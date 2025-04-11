import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '../components/User/CustomIcons';

// 👉 Import Firebase
import {
  auth,
  facebookProvider,
  googleProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  FacebookAuthProvider
} from '../firebase/firebase.js';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
      'radial-gradient(at 50% 50%, hsla(207, 37%, 29%, 1), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props) {
  // 👉 Google Sign Up
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      console.log('Google user:', result.user);
      console.log('ID Token:', token);

      // Send token to backend
      await fetch('http://localhost:3001/api/auth/firebase-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      // Optional: redirect or notify
    } catch (error) {
      console.error('Google Sign Up Error:', error);
    }
  };

  // 👉 Facebook Sign Up
  const handleFacebookSignup = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const token = await result.user.getIdToken();
  
      console.log('✅ Facebook user:', result.user);
      console.log('🔑 ID Token:', token);
  
      // Optional: send token to your backend
      await fetch('http://localhost:3001/api/auth/firebase-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
  
      // ✅ Show success or redirect here if needed
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        console.warn('⚠️ Account already exists with different provider');
  
        // Get the pending Facebook credentials
        const pendingCred = FacebookAuthProvider.credentialFromError(error);
        const email = error.customData?.email;
  
        try {
          // Find what provider the user originally signed up with
          const methods = await fetchSignInMethodsForEmail(auth, email);
  
          if (methods.includes('google.com')) {
            alert(`⚠️ This email is already linked with Google.\nPlease sign in with Google first to link your Facebook account.`);
            // Optional: Automatically trigger Google login here if you want
          } else if (methods.includes('password')) {
            alert(`⚠️ This email is already linked with Email/Password.\nPlease log in using your password first.`);
          } else {
            alert(`⚠️ This account is already linked with, Try to log in`);
          }
  
        } catch (lookupError) {
          console.error('❌ Failed to fetch sign-in methods:', lookupError);
          alert('Something went wrong while resolving account conflict.');
        }
  
      } else {
        console.error('❌ Facebook Sign Up Error:', error);
      }
    }
  };
  

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleGoogleSignup}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={handleFacebookSignup}
              startIcon={<FacebookIcon />}
            >
              Sign up with Facebook
            </Button>

            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link href="/signin" variant="body2" sx={{ alignSelf: 'center' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
