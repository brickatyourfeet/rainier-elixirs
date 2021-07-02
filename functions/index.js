// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");
// const config = functions.config();
// const cors = require("cors")({origin: true})
// const admin = require("firebase-admin");
// admin.initializeApp();

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: config.user.email,
//     pass: config.user.password,
//   },
// });

// let mailOptions = {from: "Rainier Elixirs", to: "kylebradendevelopment@gmail.com", subject: "node mailing", text: "test"}


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.sendMail = functions.https.onRequest((request, response) => {
//   cors(request, response, () => {
//     functions.logger.info("Hello logs!", {structuredData: true});
//     //response.send("Hello from Firebase!");
//     transporter.sendMail(mailOptions, error => {
//       error ? response.send(error) : response.send("message success")
//     })
//   })

// });



const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password
  }
});

let mailOptions = {
  from: `Rainier Elixirs`
};

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const {
      name,
      email,
      // phone,
      message,
      total,
      service,
      concerns,
      ailments,
      specialRequests,
      tinctureSize,
      subService
    } = req.query;

    if (total) { //if total, then it is a consultation -- maybe initially make total > 0 in consultation
      if (subService) { //this check is for use with future services
        mailOptions = {
          ...mailOptions, //can just set the from here to avoid the spread operator lint complaint
          to: "rainierelixirs@gmail.com",
          subject: "Consultation request received!",
          html: `
            <p style="font-size: 16px;">From: ${name}</p>
            <p style="font-size: 16px;">Email: ${email}</p>
            <p style="font-size: 16px;">Message: ${message}</p>
            <p style="font-size: 16px;">Total: ${total}</p>
            <p style="font-size: 16px;">Service: ${service}</p>
            <p style="font-size: 16px;">SubService: ${subService}</p>
            `
        };

        transporter.sendMail(mailOptions, error => {
          if (error) {
            res.send(error);
          } else {
            res.send("Message sent successfully.");
          }
        });
      } else {
        mailOptions = {
          ...mailOptions,
          to: "rainierelixirs@gmail.com",
          subject: "Consultation message received!",
          html: `
            <p style="font-size: 16px;">From: ${name}</p>
            <p style="font-size: 16px;">Email: ${email}</p>
            <p style="font-size: 16px;">Message: ${message}</p>
            <p style="font-size: 16px;">Total: ${total}</p>
            <p style="font-size: 16px;">Service: ${service}</p>
            <p style="font-size: 16px;">Concerns: ${concerns}</p>
            <p style="font-size: 16px;">Ailments: ${ailments}</p>
            <p style="font-size: 16px;">Special Requests: ${specialRequests}</p>
            <p style="font-size: 16px;">Tincture Size: ${tinctureSize}</p>
            `
        };

        transporter.sendMail(mailOptions, error => {
          if (error) {
            console.log(error); //for testing
            res.send(error);
          } else {
            res.send("Message sent successfully.");
          }
        });
      }

      mailOptions = {
        ...mailOptions,
        to: email,
        subject: "Message Received!",
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  >
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Helvetica&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <title></title>
    <style type="text/css">
      p {
        margin: 0;
        padding: 0;
      }
      table {
        border-collapse: collapse;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        display: block;
        margin: 0;
        padding: 0;
      }
      img,
      a img {
        border: 0;
        height: auto;
        outline: none;
        text-decoration: none;
      }
      body,
      #bodyTable,
      #bodyCell {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
      }
      #outlook a {
        padding: 0;
      }
      img {
        -ms-interpolation-mode: bicubic;
      }
      table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      p,
      a,
      li,
      td,
      blockquote {
        mso-line-height-rule: exactly;
      }
      a[href^="tel"],
      a[href^="sms"] {
        color: inherit;
        cursor: default;
        text-decoration: none;
      }
      p,
      a,
      li,
      td,
      body,
      table,
      blockquote {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass td,
      .ExternalClass div,
      .ExternalClass span,
      .ExternalClass font {
        line-height: 100%;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      @media only screen and (max-width: 480px) {
        .m_device_width {
          width: 100% !important;
          min-width: 100% !important;
          height: auto !important;
        }
        .m_db {
          display: block !important;
        }
        .text-center {
          text-align: center !important;
        }
        .mob_hidden {
          display: none !important;
        }
        .mob_ptb80lr20 {
          padding: 80px 25px !important;
        }
        .h_auto {
          height: auto !important;
        }
        .font11 {
          font-size: 11px !important;
        }
        .social_icon {
          width: 100% !important;
          min-width: 100% !important;
          height: auto !important;
        }
        .spacer {
          padding: 0% 5% !important;
        }
        .mob_pr12 {
          padding: 0px 12px 0px 0px !important;
        }
        .sm_icon {
          width: 14px !important;
        }
      }
    </style>
  </head>
  <body align="center" style="margin:0; padding:0; background:#e5e5e5;">
    <table
      align="center"
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="background:#e5e5e5"
      id="bodyTable"
    >
      <tr>
        <td align="center" id="bodyCell">
          <table
            align="center"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="background:#e5e5e5"
            class="m_device_width"
          >
            <tr>
              <td align="center">
                <table
                  align="center"
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="background:#000000"
                  class="m_device_width"
                >
                  <tr>
                    <td align="center">
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <td align="center">
                            <a
                              href="http://www.rainierelixirs.com/" 
                              target="_blank"
                            >
                              <img
                                align="center"                       
                                src="https://lh3.googleusercontent.com/pw/ACtC-3cQo6Iu-Q-j-MGXe0Lyj-LMQ7yJIzzpjZjXYLEvfo-y_Evdnqw8pBwVWid3A-wh_nUAMiHZhg7shRgP8cFGFz7TfOmYMCEBqVsqkBLGFhILi8MruCbb-FtxvHHmjMTE3ZoJbq0jnQ-ECqbpkWKwT4o=w652-h107-no?authuser=5"
                                alt="Rainier Elixirs"
                                width="600"
                                height=""
                                style="width:600px; max-width:600px; display:block;"
                                class="m_device_width"
                              />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center">
                <table
                  align="center"
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="background:#000000"
                  class="m_device_width"
                >
                  <tr>
                    <td
                      align="center"
                      background="" 
                      width="600"
                      height="617"
                      valign="top"
                      style="background-repeat:no-repeat;"
                      class="h_auto m_device_width"
                    >
                      <!--[if gte mso 9]>
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
                  <v:fill type="tile" src="" color="#ffffff" /> 
                  <v:textbox inset="0,0,0,0">
                  <![endif]-->
                      <div>
                        <table
                          align="center"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <td
                              align="center"
                              width="85"
                              style="width:85px"
                              class="mob_hidden"
                            >
                              <img
                                align="center"
                                src=""
                                alt=""
                                width="85"
                                style="width:85px; display:block"
                              />
                            </td>
                            <td
                              align="center"
                              style="padding:160px 0px"
                              class="mob_ptb80lr20"
                            >
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="background:#ffffff; border-radius:10px; box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.32);"
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding:85px 35px 110px 35px"
                                  >
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          style="font-family: 'Helvetica'; font-size:34.28px; font-weight:normal; line-height:35px; color:#000000; text-align:center;"
                                        >
                                          Thanks!
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          style="padding:20px 0px 0px 0px; font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:20px; font-weight:normal; line-height:25.50px; color:#868686; text-align:center;"
                                        >
                                          Thank you for sending in a consultation request! We will get back to you as soon as we can.
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              align="center"
                              width="85"
                              style="width:85px"
                              class="mob_hidden"
                            >
                              <img
                                align="center"
                                src=""
                                alt=""
                                width="85"
                                style="width:85px; display:block"
                              />
                            </td>
                          </tr>
                        </table>
                      </div>
                      <!--[if gte mso 9]>
                  </v:textbox>
                  </v:rect>
                  <![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center">
                <table
                  align="center"
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="background:#000000"
                  class="m_device_width"
                >
                  <tr>
                    <td align="center">
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <th
                            align="left"
                            valign="middle"
                            width="64.666666%"
                            style="width: 64.666666%; background-repeat:no-repeat; background-position:top right"
                            background=""  
                          >
                          <!-- replace this block with thing in notes -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tr>
                                <td align="center" style="padding:40px 10px">
                                  <table
                                    align="center"
                                    width="100%"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td
                                        align="left"
                                        style="padding:0px 0px 0px 5px;font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:13.70px; font-weight:normal; line-height:14px; color:#ffffff; text-align:left;"
                                        class="font11"
                                      >
                                        <a
                                          href="mailto:rainierelixirs@gmail.com"
                                          style="color:#ffffff; text-decoration:none!important"
                                          >rainierelixirs@gmail.com</a
                                        >
                                      </td>
                                    </tr>
                                    <table
                                    align="right"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        style="padding:0px 14px"
                                        class="spacer"
                                      >
                                        <a
                                          href="https://www.instagram.com/rainierelixirs"
                                          target="_blank"
                                        >
                                          <img
                                            align="center"
                                            src="https://i.imgur.com/auxeind.png" 
                                            alt=""
                                            width="31"
                                            height="31"
                                            style="width:31px; max-width:31px; display:block"
                                            class="social_icon"
                                          />
                                          <!-- instagramera -->
                                        </a>
                                      </td>
                                      <td
                                        align="center"
                                        style="padding:0px 14px"
                                        class="spacer"
                                      >
                                        <a
                                          href="https://twitter.com/rainierelixirs"
                                          target="_blank"
                                        >
                                          <img
                                            align="center"
                                            src="https://i.imgur.com/QV0qmLC.png" 
                                            alt=""
                                            width="30"
                                            height="25"
                                            style="width:30px; max-width:30px; display:block"
                                            class="social_icon"
                                          />
                                          <!--twitter bird-->
                                        </a>
                                      </td>
                                      <td
                                        align="center"
                                        style="padding:0px 14px"
                                        class="spacer"
                                      >
                                        <a
                                          href="https://www.facebook.com/"
                                          target="_blank"
                                        >
                                          <img
                                            align="center"
                                            src="https://i.imgur.com/wPb7ijk.png"  
                                            alt=""
                                            width="17"
                                            height="31"
                                            style="width:17px; max-width:17px; display:block"
                                            class="social_icon"
                                          />
                                          <!-- facebook f -->
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="padding:0px 44px 0px 0px"
                                  class="mob_pr12"
                                >
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
          `
      };

      transporter.sendMail(mailOptions);
    } else {
      mailOptions = {
        ...mailOptions,
        to: "rainierelixirs@gmail.com",
        subject: "Message received!",
        html: `
          <p style="font-size: 16px;">From: ${name}</p>
          <p style="font-size: 16px;">Email: ${email}</p>
          <p style="font-size: 16px;">Message: ${message}</p>
          `
      };

      transporter.sendMail(mailOptions, error => {
        if (error) {
          res.send(error);
        } else {
          res.send("Message sent successfully.");
        }
      });

      mailOptions = {
        ...mailOptions,
        to: email,
        subject: "We have received your message!",
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  >
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <title></title>
    <style type="text/css">
      p {
        margin: 0;
        padding: 0;
      }
      table {
        border-collapse: collapse;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        display: block;
        margin: 0;
        padding: 0;
      }
      img,
      a img {
        border: 0;
        height: auto;
        outline: none;
        text-decoration: none;
      }
      body,
      #bodyTable,
      #bodyCell {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
      }
      #outlook a {
        padding: 0;
      }
      img {
        -ms-interpolation-mode: bicubic;
      }
      table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      p,
      a,
      li,
      td,
      blockquote {
        mso-line-height-rule: exactly;
      }
      a[href^="tel"],
      a[href^="sms"] {
        color: inherit;
        cursor: default;
        text-decoration: none;
      }
      p,
      a,
      li,
      td,
      body,
      table,
      blockquote {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass td,
      .ExternalClass div,
      .ExternalClass span,
      .ExternalClass font {
        line-height: 100%;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      @media only screen and (max-width: 480px) {
        .m_device_width {
          width: 100% !important;
          min-width: 100% !important;
          height: auto !important;
        }
        .m_db {
          display: block !important;
        }
        .text-center {
          text-align: center !important;
        }
        .mob_hidden {
          display: none !important;
        }
        .mob_ptb80lr20 {
          padding: 80px 25px !important;
        }
        .h_auto {
          height: auto !important;
        }
        .font11 {
          font-size: 11px !important;
        }
        .social_icon {
          width: 100% !important;
          min-width: 100% !important;
          height: auto !important;
        }
        .spacer {
          padding: 0% 5% !important;
        }
        .mob_pr12 {
          padding: 0px 12px 0px 0px !important;
        }
        .sm_icon {
          width: 14px !important;
        }
      }
    </style>
  </head>
  <body align="center" style="margin:0; padding:0; background:#e5e5e5;">
    <table
      align="center"
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="background:#e5e5e5"
      id="bodyTable"
    >
      <tr>
        <td align="center" id="bodyCell">
          <table
            align="center"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="m_device_width"
          >
            <tr>
              <td align="center">
                <table
                  align="center"
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="background:#000000"
                  class="m_device_width"
                >
                  <tr>
                    <td align="center">
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <td align="center">
                            <a
                              href="http://www.rainierelixirs.com/" 
                              target="_blank"
                            >
                              <img
                                align="center"
                                src="https://lh3.googleusercontent.com/pw/ACtC-3cQo6Iu-Q-j-MGXe0Lyj-LMQ7yJIzzpjZjXYLEvfo-y_Evdnqw8pBwVWid3A-wh_nUAMiHZhg7shRgP8cFGFz7TfOmYMCEBqVsqkBLGFhILi8MruCbb-FtxvHHmjMTE3ZoJbq0jnQ-ECqbpkWKwT4o=w652-h107-no?authuser=5"
                                alt="Rainier Elixirs"
                                width="600"
                                height=""
                                style="width:600px; max-width:600px; display:block;"

                              />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center">
                <table
                  align="center"
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="background:#000000"
                  class="m_device_width"
                >
                  <tr>
                    <td
                      align="center"
                      width="600" 
                      height="617"
                      valign="top"
                      style="background-repeat:no-repeat;"
                      class="h_auto m_device_width"
                    >
                      <!--[if gte mso 9]>
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
                  <v:fill type="tile" src="https://lh3.googleusercontent.com/pw/ACtC-3eCqj6alliRlJfCmYGdnZ9d2WSDCMbsDyniqMYJhSFYvjVUKDAdYXUkbiURZMYKQpUjirpHQn5irhuo5Lk3XOM26iXlYuWdpXkQ9ym-u25iygaKK2NX1w11bNDzenywvai69o2C6QIdaYPX7J4rWQ4=w1772-h1328-no?authuser=5" color="#ffffff" />  
                  <v:textbox inset="0,0,0,0">
                  <![endif]-->
                      <div>
                        <table
                          align="center"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <td
                              align="center"
                              width="85"
                              style="width:85px"
                              class="mob_hidden"
                            >
                              <img
                                align="center"
                                src="" 
                                alt=""
                                width="85"
                                style="width:85px; display:block"
                              />
                            </td>
                            <td
                              align="center"
                              style="padding:160px 0px"
                              class="mob_ptb80lr20"
                            >
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="background:#ffffff; border-radius:10px; box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.32);"
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding:85px 35px 110px 35px"
                                  >
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          style="font-family: 'Pacifico'; font-size:34.28px; font-weight:normal; line-height:35px; color:#000000; text-align:center;"
                                        >
                                          Hiya Buddy.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          style="padding:20px 0px 0px 0px; font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:20px; font-weight:normal; line-height:25.50px; color:#000000; text-align:center;"
                                        >
                                          Thank you for the message! We’ll
                                          get back to you as soon as we can.
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              align="center"
                              width="85"
                              style="width:85px"
                              class="mob_hidden"
                            >
                              <img
                                align="center"
                                src="" 
                                alt=""
                                width="85"
                                style="width:85px; display:block"
                              />
                            </td>
                          </tr>
                        </table>
                      </div>
                      <!--[if gte mso 9]>
                  </v:textbox>
                  </v:rect>
                  <![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center">
                <table
                  align="center"
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="background:#000000"
                  class="m_device_width"
                >
                  <tr>
                    <td align="center">
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <th>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tr>
                                <td align="center" style="padding:40px 10px">
                                  <table
                                    align="center"
                                    width="100%"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                          <th>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="padding:0px 44px 0px 0px"
                                  class="mob_pr12"
                                >
                                  <table
                                    align="right"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        style="padding:0px 14px"
                                        class="spacer"
                                      >
                                        <a
                                          href="https://www.instagram.com/rainierelixirs"
                                          target="_blank"
                                        >
                                          <img
                                            align="center"
                                            src="https://i.imgur.com/auxeind.png" 
                                            alt=""
                                            width="31"
                                            height="31"
                                            style="width:31px; max-width:31px; display:block"
                                            class="social_icon"
                                          />
                                          <!--instagramera -->
                                        </a>
                                      </td>
                                      <td
                                        align="center"
                                        style="padding:0px 14px"
                                        class="spacer"
                                      >
                                        <a
                                          href="https://twitter.com/rainierelixirs"
                                          target="_blank"
                                        >
                                          <img
                                            align="center"
                                            src="https://i.imgur.com/QV0qmLC.png" 
                                            alt=""
                                            width="30"
                                            height="25"
                                            style="width:30px; max-width:30px; display:block"
                                            class="social_icon"
                                          />
                                          <!--twitter bird -->
                                        </a>
                                      </td>
                                      <td
                                        align="center"
                                        style="padding:0px 14px"
                                        class="spacer"
                                      >
                                        <a
                                          href="https://www.facebook.com/rainierelixirs"
                                          target="_blank"
                                        >
                                          <img
                                            align="center"
                                            src="https://i.imgur.com/wPb7ijk.png"
                                            alt=""
                                            width="17"
                                            height="31"
                                            style="width:17px; max-width:17px; display:block"
                                            class="social_icon"
                                          />
                                        </a>
                                      </td>
                                   
                                  
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  <footer>
    <a
      href="mailto:rainierelixirs@gmail.com"
      style="color:#ffffff; text-decoration:none!important"
      >rainierelixirs@gmail.com</a
    >
  </footer>
  </html>
          `
      };

      transporter.sendMail(mailOptions);
    }
  });
});