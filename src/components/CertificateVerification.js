import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  CircularProgress,
  Paper,
  Grid,
  Divider,
  Chip,
  IconButton,
  Tooltip,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Snackbar,
  Alert,
  Stack,
  Fade,
  Slide,
} from "@mui/material";
import {
  VerifiedUser,
  Search,
  School,
  Person,
  Business,
  ConfirmationNumber,
  ContentCopy,
  Info,
  CheckCircle,
  Clear,
  ErrorOutline,
  Badge,
} from "@mui/icons-material";
import Navigation from "./Navbar";

// Create a custom theme with the custom fonts and specified colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#0c83c8",
      light: "#3a9ad4",
      dark: "#096ba3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fc7a46",
      light: "#fd9469",
      dark: "#e56535",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontFamily: "'Arkitech', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Arkitech', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
    },
    h1: {
      fontFamily: "'Arkitech', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    h2: {
      fontFamily: "'Arkitech', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    h3: {
      fontFamily: "'Arkitech', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    h5: {
      fontFamily: "'Arkitech', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    subtitle1: {
      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    subtitle2: {
      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    body1: {
      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    body2: {
      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    button: {
      fontFamily: "'Arkitech', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    caption: {
      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    overline: {
      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: "hidden",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          bottom: 24,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
        message: {
          fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
          color: "white",
        },
        icon: {
          color: "white",
        },
        filledSuccess: {
          color: "white",
          "& .MuiAlert-icon": {
            color: "white",
          },
        },
      },
    },
  },
});

const CertificateLookup = () => {
  const [certificateId, setCertificateId] = useState("");
  const [details, setDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log("CertificateLookup: Component mounted");
    console.log("CertificateLookup: Location search:", location.search);
    const params = new URLSearchParams(location.search);
    const urlCertificateId = params.get("certificateId");
    console.log("CertificateLookup: URL certificateId:", urlCertificateId);

    if (urlCertificateId) {
      console.log("CertificateLookup: Setting certificateId from URL:", urlCertificateId);
      setCertificateId(urlCertificateId);
      fetchCertificateDetails(urlCertificateId);
    } else {
      console.log("CertificateLookup: No certificateId in URL");
      const timer = setTimeout(() => setShowHint(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [location.search]);

  const fetchCertificateDetails = async (id) => {
    console.log("CertificateLookup: fetchCertificateDetails called with id:", id);
    setError("");
    setDetails(null);
    setLoading(true);

    try {
      // Validate certificate ID format (e.g., must contain at least one slash and end with numbers)
      if (!id || !/^[A-Z]+\/[A-Z]+(\/[A-Z]+)?\/\d+$/.test(id)) {
        console.log("CertificateLookup: Invalid certificateId format:", id);
        const errorMsg = "Certificate ID must be in the format PREFIX/SUFFIX/NUMBER (e.g., CET/WP/12345).";
        setError(errorMsg);
        setSnackbar({
          open: true,
          message: errorMsg,
          severity: "error",
        });
        setLoading(false);
        return;
      }

      console.log("CertificateLookup: Querying Firestore for doc:", id);
      const docRef = doc(db, "certificates", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("CertificateLookup: Firestore data:", docSnap.data());
        setDetails(docSnap.data());
        setSnackbar({
          open: true,
          message: "Certificate verified successfully!",
          severity: "success",
        });
      } else {
        console.log("CertificateLookup: No document found for certificateId:", id);
        const errorMsg = "No certificate found with the provided ID.";
        setError(errorMsg);
        setSnackbar({
          open: true,
          message: errorMsg,
          severity: "error",
        });
      }
    } catch (err) {
      console.error("CertificateLookup: Firestore error:", err);
      const errorMsg = `Failed to fetch certificate details: ${err.message}`;
      setError(errorMsg);
      setSnackbar({
        open: true,
        message: errorMsg,
        severity: "error",
      });
    } finally {
      console.log("CertificateLookup: Fetch complete, loading:", false);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("CertificateLookup: Form submitted with certificateId:", certificateId);
    if (certificateId) {
      fetchCertificateDetails(certificateId);
    } else {
      const errorMsg = "Please enter a Certificate ID.";
      setError(errorMsg);
      setSnackbar({
        open: true,
        message: errorMsg,
        severity: "error",
      });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setSnackbar({
      open: true,
      message: "Certificate ID copied to clipboard!",
      severity: "success",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setCertificateId("");
    setDetails(null);
    setError("");
    setSnackbar({
      open: true,
      message: "ID cleared",
      severity: "info",
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <style>
        {`
          @font-face {
            font-family: 'Usuzi';
            src: url('/src/assets/fonts/Usuzi.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Arkitech';
            src: url('/src/assets/fonts/Arkitech Bold.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
      <Navigation />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="md"
          sx={{
            py: { xs: 3, md: 5 },
            px: { xs: 2, md: 3 },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              sx={{
                bgcolor: "primary.main",
                py: { xs: 3, md: 4 },
                px: { xs: 2, md: 4 },
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `radial-gradient(circle at 30% 50%, ${theme.palette.primary.light}30, transparent 50%), 
                               radial-gradient(circle at 70% 50%, ${theme.palette.secondary.light}30, transparent 50%)`,
                  zIndex: 0,
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <VerifiedUser
                  sx={{
                    fontSize: 48,
                    color: "white",
                    mb: 2,
                    opacity: 0.9,
                  }}
                />
                <Typography
                  variant="h4"
                  component="h1"
                  color="white"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif !important",
                  }}
                >
                  Certificate Verification
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{
                    opacity: 0.9,
                    maxWidth: 600,
                    mx: "auto",
                    mb: 1,
                  }}
                >
                  Verify the authenticity of certificates by entering the Certificate ID
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                px: { xs: 2, md: 4 },
                py: { xs: 3, md: 4 },
                bgcolor: "background.paper",
                borderRadius: "24px 24px 0 0",
                mt: -3,
                position: "relative",
                zIndex: 2,
                boxShadow: "0 -8px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Paper
                component="form"
                onSubmit={handleSubmit}
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3 },
                  maxWidth: 600,
                  mx: "auto",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 20px rgba(12, 131, 200, 0.1)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif !important",
                    fontWeight: 10,
                  }}
                >
                  <Search /> Search Certificate
                </Typography>

                <TextField
                  fullWidth
                  label="Certificate ID"
                  value={certificateId}
                  onChange={(e) => {
                    console.log("CertificateLookup: Input changed to:", e.target.value);
                    setCertificateId(e.target.value.trim());
                  }}
                  placeholder="Enter Certificate ID (e.g., CET/WP/12345)"
                  required
                  margin="normal"
                  disabled={loading}
                  error={!!error}
                  helperText={error ? error : ""}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      transition: "all 0.3s ease",
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderWidth: 2,
                      },
                    },
                  }}
                />

                {showHint && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      color: "text.secondary",
                    }}
                  >
                    <Info fontSize="small" color="primary" sx={{ mr: 1 }} />
                    <Typography variant="caption">
                      Examples: CET/WP/12345
                    </Typography>
                  </Box>
                )}

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      transition: "all 0.3s ease",
                      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif !important",
                      fontWeight: 10,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 15px rgba(12, 131, 200, 0.3)",
                      },
                    }}
                    startIcon={loading ? null : <VerifiedUser />}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Verify Certificate"}
                  </Button>

                  <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    onClick={handleClear}
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      transition: "all 0.3s ease",
                      fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif !important",
                      fontWeight: 10,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 15px rgba(252, 122, 70, 0.2)",
                       },
                    }}
                    startIcon={<Clear />}
                  >
                    Clear
                  </Button>
                </Stack>
              </Paper>

              {loading && (
                <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                  <CircularProgress color="primary" />
                </Box>
              )}

              {details && (
                <Fade in={!!details} timeout={500}>
                  <Card
                    sx={{
                      mt: 4,
                      overflow: "hidden",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 30px rgba(12, 131, 200, 0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "secondary.main",
                        color: "white",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif !important",
                          fontWeight: 10,
                        }}
                      >
                        <CheckCircle /> Certificate Verified
                      </Typography>
                      <Chip
                        label="Authentic"
                        sx={{
                          bgcolor: "white",
                          color: "secondary.main",
                          fontWeight: "500",
                        }}
                        size="small"
                      />
                    </Box>

                    <CardContent sx={{ p: 0 }}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          md={4}
                          sx={{
                            bgcolor: "primary.light",
                            color: "primary.contrastText",
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <Person sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                              fontWeight: "400",
                              fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif !important",
                            }}
                          >
                            {details.full_name}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            {details.rollno}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Box sx={{ p: 3 }}>
                            <Typography
                              variant="h6"
                              gutterBottom
                              sx={{
                                fontWeight: "400",
                                mb: 3,
                                fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif !important",
                                color: "primary.main",
                              }}
                            >
                              Certificate Details
                            </Typography>

                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <DetailCard
                                  icon={<Person color="primary" />}
                                  label="Full Name"
                                  value={details.full_name}
                                />
                              </Grid>

                              <Grid item xs={12} sm={6}>
                                <DetailCard
                                  icon={<Badge color="primary" />}
                                  label="Roll No"
                                  value={details.rollno}
                                />
                              </Grid>

                              <Grid item xs={12} sm={6}>
                                <DetailCard
                                  icon={<School color="primary" />}
                                  label="Department"
                                  value={details.department}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <DetailCard
                                  icon={<Business color="primary" />}
                                  label="College"
                                  value={details.college}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    p: 2,
                                    borderRadius: 1,
                                    bgcolor: "background.paper",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      bgcolor: "action.hover",
                                    },
                                  }}
                                >
                                  <ConfirmationNumber color="primary" sx={{ mr: 2 }} />
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="caption" color="text.secondary">
                                      Certificate ID
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                      {details.certificateId}
                                    </Typography>
                                  </Box>
                                  <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                                    <IconButton
                                      size="small"
                                      onClick={() => copyToClipboard(details.certificateId)}
                                      color={copied ? "success" : "default"}
                                    >
                                      <ContentCopy fontSize="small" />
                                    </IconButton>
                                  </Tooltip>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                      <Divider />
                      <Box sx={{ p: 2, bgcolor: "background.paper", textAlign: "center" }}>
                        <Typography variant="caption" color="text.secondary">
                          This certificate has been verified as authentic on{" "}
                          {new Date().toLocaleDateString()}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              )}

              {!details && !loading && !error && (
                <Box
                  sx={{
                    textAlign: "center",
                    mt: 6,
                    mb: 4,
                    opacity: 0.7,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "rgba(12, 131, 200, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <School sx={{ fontSize: 40, color: "primary.main", opacity: 0.7 }} />
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    Enter a certificate ID to verify its authenticity
                  </Typography>
                </Box>
              )}
            </Box>
          </Paper>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            TransitionComponent={Slide}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              variant="filled"
              sx={{
                width: "100%",
                alignItems: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                fontFamily: "'Usuzi', 'Roboto', 'Helvetica', 'Arial', sans-serif",
              }}
              icon={
                snackbar.severity === "error" ? (
                  <ErrorOutline />
                ) : snackbar.severity === "success" ? (
                  <CheckCircle />
                ) : (
                  <Info />
                )
              }
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Container>
      </ThemeProvider>
    </div>
  );
};

const DetailCard = ({ icon, label, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        borderRadius: 1,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          borderColor: "primary.main",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box sx={{ mr: 2 }}>{icon}</Box>
      <Box>
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default CertificateLookup;