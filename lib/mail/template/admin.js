export const adminNotificationTemplate = (userData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Course Application</title>
</head>
<body style="font-family: 'Poppins', Arial, sans-serif; background-color: #f4f6f8; margin:0; padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff; border-radius:10px; margin:40px 0; padding:30px; box-shadow:0 2px 10px rgba(0,0,0,0.05);">
          <tr>
            <td style="text-align:center;">
              <h1 style="color:#0D47A1; font-size:24px;">Digitanotion</h1>
              <h2 style="color:#1976D2; font-size:20px; margin-top:15px;">New Course Application</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 0; color:#333333; font-size:15px; line-height:1.6;">
              A new user has applied for a course. Here are the details:<br/><br/>
              <strong>Name:</strong> ${userData.firstName} ${userData.lastName}<br/>
              <strong>Email:</strong> ${userData.email}<br/>
              <strong>Phone:</strong> ${userData.phone}<br/>
              <strong>Course:</strong> ${userData.courseName}<br/>
              <strong>Price:</strong> ${userData.coursePrice}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px 0;">
              <a href="https://digitanotion.com/admin/dashboard" 
                 style="background-color:#0D47A1; color:#ffffff; padding:12px 25px; border-radius:6px; text-decoration:none; font-weight:600;">
                View Applications
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const adminServiceNotificationTemplate = (data, serviceType) => {
  const isCybersecurity = serviceType === "cybersecurity";
  const serviceName = isCybersecurity
    ? "CyBouncer Security Services"
    : "Custom Software Development";
  const priorityClass =
    isCybersecurity && data.urgency === "critical" ? "CRITICAL" : "HIGH";
  const icon = isCybersecurity ? "🛡️" : "💻";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Service Request - ${serviceName}</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 20px !important; }
      .priority-badge { font-size: 12px !important; padding: 8px 16px !important; }
    }
  </style>
</head>
<body style="font-family: 'Poppins', Arial, sans-serif; background-color: #f4f6f8; margin:0; padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff; border-radius:10px; margin:40px 0; padding:30px; box-shadow:0 2px 10px rgba(0,0,0,0.05);">
          <!-- Admin Header -->
          <tr>
            <td style="text-align:center;">
              <h1 style="color:#0D47A1; font-size:24px; margin-bottom:5px;">
                🚨 NEW SERVICE REQUEST
              </h1>
              <h2 style="color:#1976D2; font-size:20px; margin-top:10px;">
                ${icon} ${serviceName}
              </h2>
              
              <div style="height:3px; width:60px; background-color:#fb8506; margin:10px auto;"></div>
              
              <div style="display:inline-block; background-color:#${
                isCybersecurity && data.urgency === "critical"
                  ? "ffebee"
                  : "e3f2fd"
              }; 
                color:#${
                  isCybersecurity && data.urgency === "critical"
                    ? "d32f2f"
                    : "1976D2"
                }; 
                padding:10px 25px; border-radius:20px; font-weight:600; margin:15px 0;">
                ⏰ Priority: ${priorityClass}
              </div>
            </td>
          </tr>
          
          <!-- Client Details -->
          <tr>
            <td style="padding:20px 0; color:#333333; font-size:15px; line-height:1.6;">
              <div style="background-color:#f5f5f5; padding:20px; border-radius:8px; margin-bottom:25px;">
                <h3 style="color:#0D47A1; font-size:18px; margin:0 0 15px 0;">
                  👤 Client Information
                </h3>
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td width="40%" style="color:#666; font-size:14px;">Client Name:</td>
                    <td width="60%" style="color:#333; font-weight:600;">${
                      data.firstName
                    } ${data.lastName}</td>
                  </tr>
                  <tr>
                    <td style="color:#666; font-size:14px;">Email:</td>
                    <td><a href="mailto:${
                      data.email
                    }" style="color:#fb8506; text-decoration:none;">${
    data.email
  }</a></td>
                  </tr>
                  <tr>
                    <td style="color:#666; font-size:14px;">Phone:</td>
                    <td><a href="tel:${
                      data.phone
                    }" style="color:#fb8506; text-decoration:none;">${
    data.phone
  }</a></td>
                  </tr>
                  <tr>
                    <td style="color:#666; font-size:14px;">Company:</td>
                    <td style="color:#333; font-weight:500;">${
                      data.company || "Not specified"
                    }</td>
                  </tr>
                  ${
                    data.jobTitle
                      ? `
                  <tr>
                    <td style="color:#666; font-size:14px;">Job Title:</td>
                    <td style="color:#333; font-weight:500;">${data.jobTitle}</td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>
              
              <!-- Service Details -->
              <div style="background-color:#f5f5f5; padding:20px; border-radius:8px; margin-bottom:25px;">
                <h3 style="color:#0D47A1; font-size:18px; margin:0 0 15px 0;">
                  📋 Service Details
                </h3>
                <table width="100%" cellpadding="8" cellspacing="0">
                  ${
                    isCybersecurity
                      ? `
                  <tr>
                    <td width="40%" style="color:#666; font-size:14px;">Urgency:</td>
                    <td width="60%">
                      <span style="color:#333; font-weight:500; 
                      ${
                        data.urgency === "critical"
                          ? "color:#d32f2f;"
                          : data.urgency === "high"
                          ? "color:#fb8506;"
                          : ""
                      }">
                        ${
                          data.urgency === "critical"
                            ? "🚨 Critical"
                            : data.urgency === "high"
                            ? "⚠️ High"
                            : data.urgency
                        }
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#666; font-size:14px;">Services Requested:</td>
                    <td style="color:#333; font-weight:500;">
                      ${
                        Array.isArray(data.serviceType)
                          ? data.serviceType.map((s) => `• ${s}`).join("<br>")
                          : data.serviceType
                      }
                    </td>
                  </tr>
                  ${
                    data.hasPreviousIncident
                      ? `
                  <tr>
                    <td style="color:#666; font-size:14px;">Past Incidents:</td>
                    <td style="color:#333; font-weight:500;">${data.hasPreviousIncident}</td>
                  </tr>
                  `
                      : ""
                  }
                  ${
                    data.complianceNeeds
                      ? `
                  <tr>
                    <td style="color:#666; font-size:14px;">Compliance:</td>
                    <td style="color:#333; font-weight:500;">${data.complianceNeeds}</td>
                  </tr>
                  `
                      : ""
                  }
                  `
                      : `
                  <tr>
                    <td width="40%" style="color:#666; font-size:14px;">Project Type:</td>
                    <td width="60%" style="color:#333; font-weight:500;">${
                      data.projectType || "Not specified"
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#666; font-size:14px;">Budget:</td>
                    <td style="color:#333; font-weight:500;">${
                      data.budget || "Not specified"
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
                    <td style="color:#333; font-weight:500;">
                      ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit" }
  )}
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Project Description -->
              ${
                data.description
                  ? `
              <div style="background-color:#fff8e1; border-left:4px solid #fb8506; padding:20px; border-radius:8px;">
                <h3 style="color:#0D47A1; font-size:18px; margin:0 0 10px 0;">
                  📝 Client Requirements
                </h3>
                <p style="color:#333; font-size:14px; line-height:1.6; margin:0;">
                  ${data.description.substring(0, 500)}${
                      data.description.length > 500 ? "..." : ""
                    }
                </p>
              </div>
              `
                  : ""
              }
            </td>
          </tr>
          
          <!-- Action Required -->
          <tr>
            <td style="padding:20px 0; border-top:1px solid #e0e0e0;">
              <h3 style="color:#0D47A1; font-size:18px; margin:0 0 15px 0;">
                ⚡ Action Required
              </h3>
              <ol style="color:#333; font-size:14px; padding-left:20px; margin:0;">
                <li style="margin-bottom:8px;">Review client requirements above</li>
                <li style="margin-bottom:8px;">${
                  isCybersecurity && data.urgency === "critical"
                    ? "Contact client immediately (within 1 hour)"
                    : "Contact client within 24 hours"
                }</li>
                <li style="margin-bottom:8px;">Schedule consultation call</li>
                <li style="margin-bottom:8px;">Prepare initial assessment/proposal</li>
                <li>Update CRM with status</li>
              </ol>
              
              <div style="text-align:center; margin:25px 0;">
                <a href="mailto:${
                  data.email
                }" style="background-color:#fb8506; color:white; padding:12px 30px; border-radius:6px; text-decoration:none; font-weight:600; display:inline-block;">
                  📧 Reply to Client
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding:15px 0; border-top:1px solid #e0e0e0;">
              <p style="font-size:13px; color:#777777; text-align:center; margin:0;">
                This notification was generated by ${
                  isCybersecurity ? "CyBouncer" : "Digitanotion"
                } CRM System<br/>
                ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
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

// email-templates/dils-admin-template.js
export const dilsAdminNotificationTemplate = (data) => {
  // Map plan values to display names
  const planDisplayNames = {
    "lets-go": "Let's Go Plan (M7,000/student)",
    "innovate": "Innovate Plan (M8,500/student)",
    "future-leaders": "Future Leaders Plan (M10,000/student)",
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

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🚨 NEW DILS Partnership Inquiry - ${data.schoolName}</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 20px !important; }
      .priority-badge { font-size: 12px !important; padding: 8px 16px !important; }
      .action-buttons a { display: block !important; width: 100% !important; margin-bottom: 10px !important; }
    }
  </style>
</head>
<body style="font-family: 'Poppins', Arial, sans-serif; background-color: #f4f6f8; margin:0; padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff; border-radius:12px; margin:40px 0; padding:30px; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          <!-- Admin Header -->
          <tr>
            <td style="text-align:center;">
              <div style="display:inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding:15px 25px; border-radius:12px; margin-bottom:15px;">
                <h1 style="color:white; font-size:24px; margin:0; font-weight:700; letter-spacing:0.5px;">
                  🎓 NEW DILS PARTNERSHIP INQUIRY
                </h1>
              </div>
              
              <h2 style="color:#2D3748; font-size:20px; margin:15px 0; font-weight:600;">
                ${data.schoolName}
              </h2>
              
              <div style="height:3px; width:80px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); margin:0 auto 20px auto;"></div>
            </td>
          </tr>
          
          <!-- School & Contact Details -->
          <tr>
            <td style="padding:20px 0; color:#2D3748; font-size:15px; line-height:1.6;">
              <div style="background-color:#f8fafc; padding:20px; border-radius:8px; margin-bottom:25px; border:1px solid #e2e8f0;">
                <h3 style="color:#2D3748; font-size:18px; margin:0 0 15px 0; display:flex; align-items:center; gap:10px;">
                  🏫 School Information
                </h3>
                <table width="100%" cellpadding="10" cellspacing="0">
                  <tr>
                    <td width="35%" style="color:#718096; font-size:14px; vertical-align:top;">School Name:</td>
                    <td width="65%" style="color:#2D3748; font-weight:600; font-size:16px;">${
                      data.schoolName
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px; vertical-align:top;">Contact Person:</td>
                    <td style="color:#2D3748; font-weight:600;">${
                      data.firstName
                    } ${data.lastName}</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px; vertical-align:top;">Role:</td>
                    <td style="color:#4C51BF; font-weight:500;">${roleName}</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px; vertical-align:top;">Contact Details:</td>
                    <td>
                      <div style="margin-bottom:5px;">
                        📧 <a href="mailto:${
                          data.email
                        }" style="color:#4C51BF; text-decoration:none; font-weight:500;">${
    data.email
  }</a>
                      </div>
                      <div>
                        📞 <a href="tel:${
                          data.phone
                        }" style="color:#4C51BF; text-decoration:none; font-weight:500;">${
    data.phone
  }</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Program Details -->
              <div style="background-color:#f8fafc; padding:20px; border-radius:8px; margin-bottom:25px; border:1px solid #e2e8f0;">
                <h3 style="color:#2D3748; font-size:18px; margin:0 0 15px 0; display:flex; align-items:center; gap:10px;">
                  📊 Program Requirements
                </h3>
                <table width="100%" cellpadding="10" cellspacing="0">
                  <tr>
                    <td width="35%" style="color:#718096; font-size:14px;">Plan Interest:</td>
                    <td width="65%" style="color:#2D3748; font-weight:600;">
                      <div style="background-color:#BEE3F8; color:#2C5282; padding:6px 15px; border-radius:15px; display:inline-block; font-weight:600; font-size:13px;">
                        ${planName}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px;">Expected Students:</td>
                    <td style="color:#2D3748; font-weight:600;">
                      <div style="background-color:#C6F6D5; color:#22543D; padding:6px 15px; border-radius:15px; display:inline-block; font-weight:600; font-size:13px;">
                        👨‍🎓 ${data.studentCount}
                      </div>
                      ${
                        data.studentCount.includes("55") ||
                        data.studentCount.includes("100+")
                          ? '<span style="color:#D32F2F; font-weight:600; margin-left:10px;">⚠️ Bulk pricing applies</span>'
                          : ""
                      }
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px;">Preferred Start:</td>
                    <td style="color:#2D3748; font-weight:500;">${
                      data.preferredTerm || "Flexible - Needs discussion"
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#718096; font-size:14px;">Inquiry Date:</td>
                    <td style="color:#2D3748; font-weight:500;">
                      ${new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}<br/>
                      ${new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- School's Message -->
              <div style="background-color:#FFF3E0; border-left:4px solid #FB8506; padding:20px; border-radius:8px; margin-bottom:25px;">
                <h3 style="color:#2D3748; font-size:18px; margin:0 0 15px 0; display:flex; align-items:center; gap:10px;">
                  💬 School's Goals & Requirements
                </h3>
                <div style="background-color:white; padding:15px; border-radius:6px; border:1px solid #FBD38D;">
                  <p style="color:#2D3748; font-size:14px; line-height:1.6; margin:0;">
                    ${data.message || "No additional message provided."}
                  </p>
                  ${
                    data.message && data.message.length > 500
                      ? '<p style="color:#718096; font-size:12px; margin:10px 0 0 0; font-style:italic;">(Message truncated for preview)</p>'
                      : ""
                  }
                </div>
              </div>
              
              <!-- Estimated Value -->
              <div style="background-color:#E6FFFA; padding:20px; border-radius:8px; margin-bottom:25px; border:1px solid #81E6D9;">
                <h3 style="color:#234E52; font-size:18px; margin:0 0 15px 0; display:flex; align-items:center; gap:10px;">
                  💰 Estimated Partnership Value
                </h3>
                <table width="100%" cellpadding="10" cellspacing="0">
                  <tr>
                    <td style="color:#234E52; font-size:14px;">Plan:</td>
                    <td style="color:#234E52; font-weight:600;">${planName}</td>
                  </tr>
                  <tr>
                    <td style="color:#234E52; font-size:14px;">Student Count:</td>
                    <td style="color:#234E52; font-weight:600;">${
                      data.studentCount
                    }</td>
                  </tr>
                  <tr>
                    <td style="color:#234E52; font-size:14px; font-weight:600;">Potential Value:</td>
                    <td style="color:#2D3748; font-size:18px; font-weight:700;">
                      ${
                        data.studentCount.includes("55") ||
                        data.studentCount.includes("100+")
                          ? "💰 Special Quote Required"
                          : "Calculating..."
                      }
                    </td>
                  </tr>
                </table>
                <p style="color:#718096; font-size:12px; margin:10px 0 0 0;">
                  * Final quote requires consultation and school assessment
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Action Required -->
          <tr>
            <td style="padding:20px 0; border-top:2px solid #e2e8f0;">
              <!-- Quick Action Buttons -->
              <div style="text-align:center;" class="action-buttons">
                <a href="mailto:${data.email}" 
                   style="background-color:#4C51BF; color:white; padding:14px 28px; border-radius:8px; text-decoration:none; font-weight:600; margin:0 10px; display:inline-block; font-size:15px;">
                   📧 Reply via Email
                </a>
                <a href="tel:${data.phone}" 
                   style="background-color:#38B2AC; color:white; padding:14px 28px; border-radius:8px; text-decoration:none; font-weight:600; margin:0 10px; display:inline-block; font-size:15px;">
                   📞 Call Now
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding:20px 0; border-top:2px solid #e2e8f0;">          
              <div style="text-align:center; margin-top:20px; padding-top:15px; border-top:1px solid #e2e8f0;">
                <p style="font-size:11px; color:#A0AEC0; margin:0;">
                  Digitanotion Innovation Lab for Schools (DILS) • A Plan for Every School. A Future for Every Child.
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
