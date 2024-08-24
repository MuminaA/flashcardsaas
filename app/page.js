import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head> */}
      <AppBar position="static">
        <Toolbar>
          <Typography varient="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href='/sign-in'>Login</Button>
            <Button color="inherit" href='/sign-up'>Sign Up</Button>
          </SignedOut>
          {/* <SignIn>
            <UserButton />
          </SignIn> */}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          textAlign: "center",
          my: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>Welcome to Flashcard SaaS</Typography>
        <Typography varient="h5" gutterBottom>
          The easist way to make flashcards from your text
        </Typography>
        <Button varient="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography varient="h4" components="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy text input</Typography>
            <Typography>
              Simply input your text and let out software do the rest. Creating
              flashcards has never been easier
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} >
            <Typography variant="h6" gutterBottom>Accessible Anywhere</Typography>
            <Typography>
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5">Free</Typography>
              <Typography variant="h6" gutterBottom>$0</Typography>
              <Typography>
                Access to basic flashcard features and limited storage
              </Typography>
              <Button varient ="contained" color='primary' sx={{mt: 2}}>Choose free</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5">Basic</Typography>
              <Typography variant="h6" gutterBottom>$5 / month</Typography>
              <Typography>
                Access to basic flashcard features and limited storage
              </Typography>
              <Button varient ="contained" color='primary' sx={{mt: 2}}>Choose basic</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5">Pro</Typography>
              <Typography variant="h6" gutterBottom>$10 / month</Typography>
              <Typography>
                Unlimited flashcards and storage, with priority support
              </Typography>
              <Button varient ="contained" color='primary' sx={{mt: 2}}>Choose Pro</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
