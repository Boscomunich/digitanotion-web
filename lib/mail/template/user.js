export const userConfirmationTemplate = (name, courseName) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Course Registration Confirmation</title>
</head>
<body style="font-family: 'Poppins', Arial, sans-serif; background-color: #f4f6f8; margin:0; padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff; border-radius:10px; margin:40px 0; padding:30px; box-shadow:0 2px 10px rgba(0,0,0,0.05);">
          <tr>
            <td style="text-align:center;">
              <h1 style="color:#0D47A1; font-size:24px;">Digitanotion</h1>
              <h2 style="color:#1976D2; font-size:20px; margin-top:15px;">Course Registration Confirmed!</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 0; color:#333333; font-size:15px; line-height:1.6;">
              Hello <strong>${name}</strong>,<br/><br/>
              You have successfully registered for the course: <strong>${courseName}</strong>.<br/>
              We will reach out to you with further details shortly.
            </td>
          </tr>
          <tr>
            <td style="font-size:13px; color:#777777; text-align:center; padding-top:15px;">
              This email was sent by Digitanotion.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Email templates for service requests (Software Development & Cybersecurity)
export const userServiceRequestTemplate = (data, serviceType) => {
  const isCybersecurity = serviceType === "cybersecurity";
  const serviceName = isCybersecurity
    ? "CyBouncer Security Services"
    : "Custom Software Development";
  const icon = isCybersecurity ? "🛡️" : "💻";
  const timeline = isCybersecurity ? "2 hours" : "24 hours";
  const supportContact = "hello@digitanotion.com.ng";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Service Request Confirmation</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 20px !important; }
      .header { font-size: 24px !important; }
      .info-box { padding: 15px !important; margin: 10px 0 !important; }
    }
  </style>
</head>
<body style="font-family: 'Poppins', Arial, sans-serif; background-color: #f4f6f8; margin:0; padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff; border-radius:10px; margin:40px 0; padding:30px; box-shadow:0 2px 10px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="text-align:center;">
              <h1 style="color:#0D47A1; font-size:24px; margin-bottom:5px;">
               Digitanotion
              </h1>
              <h2 style="color:#1976D2; font-size:20px; margin-top:10px;">
                ${icon} Service Request Confirmed!
              </h2>
              <div style="height:3px; width:60px; background-color:#fb8506; margin:15px auto;"></div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding:20px 0; color:#333333; font-size:15px; line-height:1.6;">
              Hello <strong style="color:#0D47A1;">${data.firstName} ${
    data.lastName
  }</strong>,<br/><br/>
              
              Thank you for requesting our <strong style="color:#1976D2;">${serviceName}</strong> services. 
              We have received your inquiry and our team will review it within <strong>${timeline}</strong>.
              
              <div style="background-color:#f8f9fa; border-left:4px solid #fb8506; padding:15px; margin:20px 0; border-radius:4px;">
                <h3 style="color:#0D47A1; font-size:16px; margin:0 0 10px 0;">
                  📋 Request Summary
                </h3>
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr>
                    <td width="40%" style="color:#666; font-size:14px;">Service Type:</td>
                    <td width="60%" style="color:#333; font-weight:500;">${serviceName}</td>
                  </tr>
                  ${
                    isCybersecurity
                      ? `
                  <tr>
                    <td style="color:#666; font-size:14px;">Company:</td>
                    <td style="color:#333; font-weight:500;">${
                      data.company
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#666; font-size:14px;">Urgency:</td>
                    <td style="color:#333; font-weight:500;">${
                      data.urgency === "critical"
                        ? "🚨 Critical"
                        : data.urgency === "high"
                        ? "⚠️ High"
                        : data.urgency
                    }</td>
                  </tr>
                  `
                      : `
                  <tr>
                    <td style="color:#666; font-size:14px;">Project Type:</td>
                    <td style="color:#333; font-weight:500;">${
                      data.projectType || "Not specified"
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#666; font-size:14px;">Timeline:</td>
                    <td style="color:#333; font-weight:500;">${
                      data.timeline || "Not specified"
                    }</td>
                  </tr>
                  `
                  }
                  <tr>
                    <td style="color:#666; font-size:14px;">Submitted:</td>
                    <td style="color:#333; font-weight:500;">${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit" }
  )}</td>
                  </tr>
                </table>
              </div>
              
              <p>
                <strong>What happens next?</strong><br/>
                1. Our team will review your requirements<br/>
                2. We'll schedule a consultation call<br/>
                3. You'll receive a detailed proposal<br/>
                4. Project kickoff and implementation
              </p>
              
              <div style="background-color:#e3f2fd; border:1px solid #bbdefb; padding:15px; margin:20px 0; border-radius:6px;">
                <h4 style="color:#0D47A1; font-size:15px; margin:0 0 10px 0;">
                  🔒 Your data is secure
                </h4>
                <p style="color:#333; font-size:14px; margin:0;">
                  All information you've shared is encrypted and protected. 
                  We follow strict security protocols to ensure your data remains confidential.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Contact Info -->
          <tr>
            <td style="padding:15px 0; border-top:1px solid #e0e0e0;">
              <p style="color:#666; font-size:14px; margin:0 0 10px 0;">
                <strong>Need immediate assistance?</strong><br/>
                Email: <a href="mailto:${supportContact}" style="color:#fb8506; text-decoration:none;">${supportContact}</a>
              </p>
              <p style="font-size:13px; color:#777777; text-align:center; padding-top:15px;">
                This email was sent by Digitanotion
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

// email-templates/dils-user-template.js
export const dilsUserConfirmationTemplate = (data) => {
  // Map plan values to display names
  const planDisplayNames = {
    "lets-go": "Let's Go Plan",
    "innovate": "Innovate Plan",
    "future-leaders": "Future Leaders Plan",
    "not-sure": "Need Guidance",
    "custom": "Custom Arrangement",
  };

  // Map role values to display names
  const roleDisplayNames = {
    "principal": "Principal/Headmaster",
    "teacher": "Teacher/Instructor",
    "director": "IT Director",
    "coordinator": "Academic Coordinator",
    "administrator": "School Administrator",
    "board": "School Board Member",
    "other": "Other",
  };

  const planName = planDisplayNames[data.planInterest] || data.planInterest;
  const roleName = roleDisplayNames[data.role] || data.role;
  const timeline = "24 hours";
  const supportContact = "hello@digitanotion.com.ng";
  const supportPhone = "+267 123 4567";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DILS Partnership Inquiry Received</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 20px !important; }
      .header { font-size: 24px !important; }
      .info-box { padding: 15px !important; margin: 10px 0 !important; }
      .plan-badge { font-size: 14px !important; padding: 8px 16px !important; }
    }
  </style>
</head>
<body style="font-family: 'Poppins', Arial, sans-serif; background-color: #f4f6f8; margin:0; padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff; border-radius:12px; margin:40px 0; padding:30px; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="text-align:center;">
              <div style="display:inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding:20px; border-radius:12px; margin-bottom:20px;">
                <h1 style="color:white; font-size:28px; margin:0; font-weight:700;">
                  🎓 Digitanotion Innovation Lab
                </h1>
              </div>
              <h2 style="color:#2D3748; font-size:22px; margin-top:10px; margin-bottom:15px;">
                Your DILS Partnership Inquiry Has Been Received!
              </h2>
              <div style="display:inline-block; background-color:#E6FFFA; color:#234E52; padding:10px 20px; border-radius:20px; font-weight:600; font-size:14px; margin-bottom:20px;">
                🚀 Nurturing Africa's Next Generation of Innovators
              </div>
              <div style="height:4px; width:100px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); margin:0 auto 25px auto;"></div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding:20px 0; color:#2D3748; font-size:15px; line-height:1.7;">
              Hello <strong style="color:#4C51BF;">${data.firstName} ${
    data.lastName
  }</strong>,<br/><br/>
              
              Thank you for your interest in the <strong style="color:#4C51BF;">Digitanotion Innovation Lab for Schools (DILS)</strong> program! 
              We're excited about the possibility of partnering with <strong>${
                data.schoolName
              }</strong> to bring hands-on digital innovation education to your students.
              
              <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border-radius:8px; padding:20px; margin:25px 0; border:1px solid #e2e8f0;">
                <h3 style="color:#2D3748; font-size:18px; margin:0 0 15px 0; display:flex; align-items:center; gap:10px;">
                  📋 Your Inquiry Summary
                </h3>
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td width="40%" style="color:#718096; font-size:14px; padding-bottom:8px;">School:</td>
                    <td width="60%" style="color:#2D3748; font-weight:600;">${
                      data.schoolName
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px; padding-bottom:8px;">Your Role:</td>
                    <td style="color:#2D3748; font-weight:500;">${roleName}</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px; padding-bottom:8px;">Plan Interest:</td>
                    <td style="color:#2D3748; font-weight:500;">
                      <span style="background-color:#BEE3F8; color:#2C5282; padding:4px 12px; border-radius:12px; font-size:13px; font-weight:600;">
                        ${planName}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px; padding-bottom:8px;">Expected Students:</td>
                    <td style="color:#2D3748; font-weight:500;">${
                      data.studentCount
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px; padding-bottom:8px;">Preferred Start:</td>
                    <td style="color:#2D3748; font-weight:500;">${
                      data.preferredTerm || "To be discussed"
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px;">Submitted:</td>
                    <td style="color:#2D3748; font-weight:500;">${new Date().toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )} at ${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}</td>
                  </tr>
                </table>
              </div>
              
              <h3 style="color:#2D3748; font-size:18px; margin:25px 0 15px 0;">📅 What Happens Next?</h3>
              
              <div style="display:grid; grid-template-columns:1fr; gap:12px; margin-bottom:25px;">
                <div style="display:flex; gap:12px; align-items:flex-start;">
                  <div>
                    <strong style="color:#2D3748;">Within ${timeline}:</strong> Our Education Partnership Manager will contact you to schedule a consultation call.
                  </div>
                </div>
                <div style="display:flex; gap:12px; align-items:flex-start;">
                  <div>
                    <strong style="color:#2D3748;">Consultation Call:</strong> We'll discuss your school's specific needs, timetable, and digital goals.
                  </div>
                </div>
                <div style="display:flex; gap:12px; align-items:flex-start;">
                  <div>
                    <strong style="color:#2D3748;">Customized Proposal:</strong> You'll receive a detailed DILS implementation plan tailored to your school.
                  </div>
                </div>
                <div style="display:flex; gap:12px; align-items:flex-start;">
                  <div>
                    <strong style="color:#2D3748;">Partnership Setup:</strong> Once approved, we'll schedule trainer onboarding and program kickoff.
                  </div>
                </div>
              </div>
              
              <div style="background-color:#E6FFFA; border:2px solid #81E6D9; padding:20px; border-radius:8px; margin:25px 0;">
                <h4 style="color:#234E52; font-size:16px; margin:0 0 10px 0; display:flex; align-items:center; gap:8px;">
                  🎁 What You'll Receive
                </h4>
                <ul style="color:#2D3748; font-size:14px; margin:0; padding-left:20px;">
                  <li>Complete DILS Program Prospectus</li>
                  <li>Detailed Pricing & Customized Quote</li>
                  <li>Sample Curriculum & Learning Materials</li>
                  <li>School Partnership Agreement</li>
                  <li>Cyber + AI Expo Planning Guide</li>
                </ul>
              </div>
              
              <p style="color:#718096; font-size:14px; text-align:center; margin:25px 0; padding:15px; background-color:#f8f9fa; border-radius:6px;">
                <strong>A Plan for Every School. A Future for Every Child.</strong><br/>
                Together, we'll raise a generation of innovators who will secure Africa's digital tomorrow.
              </p>
            </td>
          </tr>
          
          <!-- Contact & Footer -->
          <tr>
            <td style="padding:20px 0; border-top:2px solid #e2e8f0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="text-align:left; padding-right:15px;">
                    <h4 style="color:#2D3748; font-size:16px; margin:0 0 10px 0;">📞 Contact Us</h4>
                    <p style="color:#718096; font-size:13px; margin:0 0 5px 0;">
                      Email: <a href="mailto:${supportContact}" style="color:#4C51BF; text-decoration:none; font-weight:500;">${supportContact}</a>
                    </p>
                    <p style="color:#718096; font-size:13px; margin:0;">
                      Phone: <a href="tel:${supportPhone}" style="color:#4C51BF; text-decoration:none; font-weight:500;">${supportPhone}</a>
                    </p>
                  </td>
                </tr>
              </table>
              
              <div style="text-align:center; margin-top:25px; padding-top:20px; border-top:1px solid #e2e8f0;">
                <p style="font-size:12px; color:#A0AEC0; margin:0;">
                  This email was sent by Digitanotion Innovation Lab for Schools (DILS)<br/>
                  © ${new Date().getFullYear()} Digitanotion Ltd. All rights reserved.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
