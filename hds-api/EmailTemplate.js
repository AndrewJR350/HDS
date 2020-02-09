module.exports.generateTemplate = params => {
  return `
  <h1>Hi ${params.firstName} ${params.lastName}</h1>
  <h3>Check your Information blow</h3>
    <table
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      align="center"
      class="fullTable"
      bgcolor="#e1e1e1"
    >
      <tbody>
        <tr>
          <td>
            <table
              width="600"
              border="0"
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="fullTable"
              bgcolor="#ffffff"
            >
              <tbody>
                <tr></tr>
                <tr class="hiddenMobile">
                  <td height="60"></td>
                </tr>
                <tr class="visibleMobile">
                  <td height="40"></td>
                </tr>
                <tr>
                  <td>
                    <table
                      width="480"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      align="center"
                      class="fullPadding"
                    >
                      <tbody>
                        <tr>
                          <th
                            style="font-size: 12px; font-family: 'Lato', sans-serif; color: #5b5b5b; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 10px 7px 0;"
                            width="52%"
                            align="left"
                          >
                            <b>Details</b>
                          </th>
                          <th
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;"
                            align="right"
                          >
                            <b>Filed Information</b>
                          </th>
                        </tr>
                        <tr>
                          <td
                            height="1"
                            style="background: #bebebe;"
                            colspan="4"
                          ></td>
                        </tr>
                        <tr>
                          <td height="10" colspan="4"></td>
                        </tr>
                        <tr>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            class="article"
                          >
                            Full Name
                          </td>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            align="right"
                          >
                            ${params.firstName} ${params.lastName}
                          </td>
                        </tr>
                        <tr>
                          <td
                            height="1"
                            colspan="4"
                            style="border-bottom:1px solid #e4e4e4"
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            class="article"
                          >
                            Gender
                          </td>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            align="right"
                          >
                            ${params.gender}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            class="article"
                          >
                            Contact Number
                          </td>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            align="right"
                          >
                            ${params.phone}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            class="article"
                          >
                            Contact Email
                          </td>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            align="right"
                          >
                            ${params.email}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            class="article"
                          >
                            Role
                          </td>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            align="right"
                          >
                            ${params.role}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            class="article"
                          >
                            T-Shirt Size
                          </td>
                          <td
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                            align="right"
                          >
                            ${params.size}
                          </td>
                        </tr>
                        <tr>
                          <td
                            height="1"
                            colspan="4"
                            style="border-bottom:1px solid #e4e4e4"
                          ></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td height="20"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    `;
};
