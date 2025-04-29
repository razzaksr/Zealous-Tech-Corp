import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const validate = () => {
    let tempErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
      isValid = false;
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number is not valid.";
      isValid = false;
    }

    if (!formData.message) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      emailjs
        .send(
          "service_rh0xnn1",
          "template_q7ds9jm",
          formData,
          "eDMIe5oBkIwfMJj8G"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setDialogMessage("Email sent successfully!");
            setDialogOpen(true);
          },
          (error) => {
            console.error("Error sending email:", error);
            setDialogMessage("Failed to send email. Please try again later.");
            setDialogOpen(true);
          }
        );
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    if (dialogMessage === "Email sent successfully!") {
      window.location.assign("/");
    }
  };

  return (
    <section
      className="contacts-section"
      style={{
        background: "linear-gradient( #fc7a46 0%, #0c83c8 100%)", // Gradient background
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: "2rem",
                backgroundColor: "#ffffff",
                border: "2px solid #fc7a46",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ color: "#fc7a46", fontWeight: "bold" }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "#ffffff" }}
                gutterBottom
              >
                Want to get in touch? Fill out the form below
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  variant="outlined"
                  margin="normal"
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  variant="outlined"
                  margin="normal"
                  type="email"
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  variant="outlined"
                  margin="normal"
                  type="tel"
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={5}
                  required
                  InputLabelProps={{
                    style: { color: "#0c83c8" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                  error={!!errors.message}
                  helperText={errors.message}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: "#fc7a46", marginTop: "1rem" }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Contact Form"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Contact;
