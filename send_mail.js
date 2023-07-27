// const nodemailer = require("nodemailer");

// // Create a transporter object using SMTP
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "mailsurya366@gmail.com", // Replace with your Gmail email address
//     pass: "usdllwcuzganudnq", // Replace with your Gmail password or an App Password if you have 2-step verification enabled
//   },
// });

// // Function to send the email notification
// function sendEmailNotification(message) {
//   const mailOptions = {
//     from: "mailsurya366@gmail.com", // Replace with your Gmail email address
//     to: "sukusuku366@gmail.com", // Replace with the recipient's email address
//     subject: "API Failure Notification",
//     text: message,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log("Error sending email:", error);
//     } else {
//       console.log("Email sent:", info.response);
//     }
//   });
// }

// // Example usage:
// const apiResponse = {
//   status: 500,
//   data: "Some error occurred.",
// };

// if (apiResponse.status !== 200) {
//   const emailMessage = `The API call was not successful. Status Code: ${apiResponse.status}`;
//   sendEmailNotification(emailMessage);
// }


const nodemailer = require("nodemailer");

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "mailsurya366@gmail.com", // Replace with your Gmail email address
    pass: "usdllwcuzganudnq", // Replace with your Gmail password or an App Password if you have 2-step verification enabled
  },
});


// Example usage:
const apiResponse = {
    status: 500,
    data: "Some error occurred.",
  };

const htmlContent = `
  <h1>API Failure Notification</h1>
  <p>Dear User,</p>
  <p>The API call was not successful. The status code received was: ${apiResponse.status}</p>
  <p>Please take appropriate action to resolve the issue.</p>
  <p>Best regards,</p>
  <p>Development Team</p>
`;



// Function to send the email notification with HTML content
function sendEmailNotification(message) {
//   const mailOptions = {
//     from: "your-email@gmail.com", // Replace with your Gmail email address
//     to: "recipient@example.com", // Replace with the recipient's email address
//     subject: "API Failure Notification",
//     html: `<p>${message}</p>`, // HTML content of the email
//   };

// Then use the htmlContent in the mailOptions
const mailOptions = {
    from: "mailsurya366@gmail.com",
    to: "sukusuku366@gmail.com",
    subject: "API Failure Notification",
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}


if (apiResponse.status !== 200) {
  const emailMessage = `The API call was not successful. Status Code: ${apiResponse.status}`;
  sendEmailNotification(emailMessage);
}
