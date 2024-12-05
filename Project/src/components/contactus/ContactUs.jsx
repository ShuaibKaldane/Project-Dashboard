import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling

const ContactUs = () => {
  // State to store form data (name, email, phone, message)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to track if the form was successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the field
    // Update the specific field in the formData state
    setFormData({
      ...formData, // Keep the existing data
      [name]: value, // Update only the changed field
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    // Check if required fields are filled
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true); // Mark the form as submitted
      console.log("Form Submitted:", formData); // Log the data (for debugging)
      // Reset the form fields after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Show a confirmation message to the user
      alert("Thank you for reaching out! Your message has been submitted.");
    } else {
      // Alert the user if any required fields are empty
      alert("Please fill out all required fields!");
    }
  };

  return (
    <div className="container-fluid p-0">
      <div
        className="row justify-content-between"
        style={{
          backgroundColor: "#f4f7fa", // Light grey background for the layout
          padding: "10px", // Add space around the layout
          minHeight: "100vh", // Make the layout cover the full height of the screen
          borderRadius: "10px", // Slightly round the corners
        }}
      >
        {/* Left side: Contact Form */}
        <div className="col-md-6 col-12 mb-4 mb-md-0">
          <div
            className="card shadow-lg p-4 mb-5 bg-light rounded h-100"
            style={{
              display: "flex",
              flexDirection: "column", // Stack items vertically
              justifyContent: "space-between", // Space out the content
              height: "100%", // Make the card fill its container
            }}
          >
            <h2 className="text-center mb-2 text-primary">Contact Us</h2>
            <hr /> {/* Horizontal line for separation */}
            <form onSubmit={handleSubmit}>
              {/* Input for Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-primary">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required // Make this field mandatory
                  className="form-control p-3"
                  placeholder="Enter your full name"
                  style={{
                    borderRadius: "10px", // Rounded corners
                    borderColor: "#007bff", // Blue border
                    boxShadow: "0 0 10px rgba(0, 123, 255, 0.3)", // Add a glowing effect
                  }}
                />
              </div>

              {/* Input for Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-primary">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control p-3"
                  placeholder="Enter your email address"
                  style={{
                    borderRadius: "10px",
                    borderColor: "#007bff",
                    boxShadow: "0 0 10px rgba(0, 123, 255, 0.3)",
                  }}
                />
              </div>

              {/* Input for Phone (Optional) */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-primary">
                  Phone (Optional):
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control p-3"
                  placeholder="Enter your phone number (Optional)"
                  style={{
                    borderRadius: "10px",
                    borderColor: "#007bff",
                    boxShadow: "0 0 10px rgba(0, 123, 255, 0.3)",
                  }}
                />
              </div>

              {/* Textarea for Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-primary">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control p-3"
                  placeholder="Write your message"
                  style={{
                    borderRadius: "10px",
                    borderColor: "#007bff",
                    boxShadow: "0 0 10px rgba(0, 123, 255, 0.3)",
                    height: "100px", // Fix the height of the box
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-5 py-3"
                  style={{
                    borderRadius: "20px", // Rounded button shape
                    fontSize: "18px", // Slightly larger text
                    boxShadow: "0 0 15px rgba(0, 123, 255, 0.3)", // Glowing effect
                  }}
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Success Message after Submission */}
            {isSubmitted && (
              <div className="alert alert-success mt-3" role="alert">
                Your message has been submitted successfully!
              </div>
            )}
          </div>
        </div>

        {/* Right side: Company Info */}
        <div className="col-md-6 col-12">
          <div className="card shadow-lg p-4 mb-5 bg-light rounded h-100">
            <h4 className="text-center text-primary">Company Info</h4>
            <hr />
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li><strong>Company Name:</strong> Code Together</li>
              <li><strong>Address:</strong> CDAC Kharghar</li>
              <li><strong>Email:</strong> info@codetogether.com</li>
              <li><strong>Phone:</strong> +91 9875859545</li>
              <li><strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>
                <strong>Follow Us:</strong>
                <ul style={{ display: "flex", listStyleType: "none", paddingLeft: "0" }}>
                  <li className="mx-2"><a href="#" className="text-primary">Facebook</a></li>
                  <li className="mx-2"><a href="#" className="text-primary">Twitter</a></li>
                  <li className="mx-2"><a href="#" className="text-primary">LinkedIn</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
