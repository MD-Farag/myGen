function returnFooter(ftIndex, topBrandsLogos, topBrandsUrls) {
    if (ftIndex === 0) {
        return `
    
        <table class="row row-9" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;width: 100%;;max-width: 600px;">
        <tbody>
            <tr>
                <td>
                    <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                        style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;margin:0 auto"
                        width="100%">
                        <tbody>
                            <tr>
                                <td class="column column-1"
                                    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0;padding-bottom:10px;padding-top:15px;">
                                    <table class="text_block block-1" width="100%" border="0" cellpadding="0"
                                        cellspacing="0" role="presentation"
                                        style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                        <tbody>
                                            <tr>
                                                <td class="pad">
                                                    <div style="font-family:sans-serif">
                                                        <div
                                                            style="font-family:Verdana,Geneva,sans-serif;font-size:12px;mso-line-height-alt:24px;color:#00355f;line-height:2">
                                                            <p
                                                                style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:40px">
                                                                <span style="font-size:20px">
                                                                    <strong>Top
                                                                        Brands</strong>
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <table class="row row-10" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[0]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[0]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[1]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[1]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[2]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[2]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-4 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[3]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[3]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<table class="row row-11" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[4]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[4]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[5]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[5]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[6]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[6]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-4 halfcolumn" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[7]}" target="_blank"
                                                            style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[7]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<table class="row row-10" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;padding-bottom:15px;padding-top:15px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="text_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div style="font-family:sans-serif">
                                                    <div
                                                        style="font-family:Verdana,Geneva,sans-serif;font-size:12px;mso-line-height-alt:24px;color:#00355f;line-height:2">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:32px">
                                                            <span style="font-size:16px">
                                                                <a href="https://www.xcite.com/brand-stores?utm_source=email&amp;utm_medium=email&amp;utm_campaign=kw-crm-nl-nocampaign&amp;utm_content=manual"
                                                                    target="_blank"
                                                                    style="text-decoration:none;color:#00355f"
                                                                    rel="noopener">
                                                                    <span style="font-size:16px">
                                                                        View all brands &gt;</span>
                                                                </a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<table class="row row-13" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;width:100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;border-radius:1px;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1" width="33.333333333333336%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-left:25px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h1
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:20px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:40px">
                                                    <span class="tinyMce-placeholder">Our Guides</span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="https://www.xcite.com/help-and-services" target="_blank"
                                                        data-mce-attributes-count="1"
                                                        style="text-decoration:none;color:#00355f"
                                                        rel="noopener">Help</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-3" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="https://www.xcite.com/faq" target="_blank"
                                                        data-mce-attributes-count="1"
                                                        style="text-decoration:none;color:#00355f"
                                                        rel="noopener">FAQ</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-4" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="https://www.xcite.com/stores" target="_blank"
                                                        data-mce-attributes-count="1"
                                                        style="text-decoration:none;color:#00355f" rel="noopener">Our
                                                        Stores</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2" width="33.333333333333336%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-left:25px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h1
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:20px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:40px">
                                                    <span class="tinyMce-placeholder">Manage</span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <span class="tinyMce-placeholder">
                                                        <a href="[unsubscribe_here]" target="_blank"
                                                            style="text-decoration:none;color:#00355f"
                                                            rel="noopener">Unsubscribe</a>
                                                    </span>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3" width="33.333333333333336%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-left:25px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h1
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:20px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:40px">
                                                    Contact Us</h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="tel:009651803535" target="_blank" rel="noopener"
                                                        title="tel:009651803535"
                                                        style="text-decoration:none;color:#00355f">1803535</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-3" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Verdana,Geneva,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="mailto:Xsupport@xcite.com" target="_blank" rel="noopener"
                                                        title="Xsupport@xcite.com"
                                                        style="text-decoration:none;color:#00355f">Xsupport@xcite.com</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table class="row row-14" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#00355f;color:#333;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-top:10px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-bottom:5px;text-align:center">
                                                <h1
                                                    style="margin:0;color:#fff;direction:ltr;font-family:Calibri,sans-serif;font-size:23px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:46px">
                                                    <span class="tinyMce-placeholder">Connect With
                                                        Us</span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="social_block block-2" width="100%" border="0" cellpadding="10"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center">
                                                    <table class="social-table" width="252px" border="0" cellpadding="0"
                                                        cellspacing="0" role="presentation"
                                                        style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block">
                                                        <tbody>
                                                            <tr>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.instagram.com/xcitealghanim/"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png"
                                                                            width="32" height="32" alt="Instagram"
                                                                            title="Instagram"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.facebook.com/XcitebyAlghanim"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/facebook.png"
                                                                            width="32" height="32" alt="Facebook"
                                                                            title="Facebook"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.snapchat.com/add/xcitealghanim"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/snapchat@2x.png"
                                                                            width="32" height="32" alt="Snapchat"
                                                                            title="Snapchat"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.youtube.com/channel/UChuWSVlf7Z6ds1hwNxh213w"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/youtube@2x.png"
                                                                            width="32" height="32" alt="YouTube"
                                                                            title="YouTube"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.tiktok.com/@xcitealghanim"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/tiktok@2x.png"
                                                                            width="32" height="32" alt="TikTok"
                                                                            title="TikTok"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://wa.me/9651803535" target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/whatsapp@2x.png"
                                                                            width="32" height="32" alt="WhatsApp"
                                                                            title="WhatsApp"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table class="row row-15" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f5f5f5;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="text_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px">
                                                <div style="font-family:sans-serif">
                                                    <div class=""
                                                        style="font-size:14px;font-family:Verdana,Geneva,sans-serif;mso-line-height-alt:25.2px;color:#555;line-height:1.8">
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span style="font-size:11px">Your privacy is
                                                                important to Xcite. For more information
                                                                on how Xcite protects your privacy,
                                                                steps you can take to protect your
                                                                personal information and alerts on
                                                                privacy risks facing consumers, please
                                                                visit the <a href="https://www.xcite.com/privacy-policy"
                                                                    target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">Xcite Privacy
                                                                    Policy</a>.</span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:25.2px">
                                                            &nbsp;</p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span style="font-size:11px">
                                                                <strong>EXPRESS
                                                                    DELIVERY:</strong>
                                                            </span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span
                                                                style="font-size:11px;color:#000;background-color:#f5f5f5">
                                                                <a href="https://www.xcite.com/express-delivery"
                                                                    target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">*Explore 1 hour
                                                                    express delivery</a>.</span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">

                                                            <span
                                                                style="font-size:11px;margin-top: 15px;display: block;margin-bottom: 15px;">Prices
                                                                and
                                                                offers are valid on the date on which
                                                                this newsletter was sent. See our <a
                                                                    href="https://www.xcite.com/faq" target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">FAQs</a> for full
                                                                details.</span>

                                                            <span style="font-size:11px">
                                                                <strong>XCITE
                                                                    PRICES AND ORDERS
                                                                    TERMS:</strong>
                                                            </span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span style="font-size:11px">
                                                                The Customer agrees to pay the full
                                                                amount for the Product as indicated in
                                                                the Product Description at the time of
                                                                the Order receipt on the Marketplace, in
                                                                addition to any installation and
                                                                shipping charges or other charges that
                                                                may be applicable to the Order. While
                                                                X-cite aim for all prices of the
                                                                Products to be accurate at all times, it
                                                                is possible that errors may occur. If an
                                                                error in the price of Products was
                                                                discovered, X-cite will at its sole
                                                                discretion either (1) inform the
                                                                Customer as soon as possible and give
                                                                the Customer the option of reconfirming
                                                                its Order at the correct price or
                                                                canceling such Order or (2) cancel the
                                                                Order and process the refund in case the
                                                                payment was already made by the
                                                                Customer. The Customer acknowledges that
                                                                this is the sole recourse that the
                                                                Customer is entitled to in case of a
                                                                pricing error.
                                                            </span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:25.2px">
                                                            &nbsp;</p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span style="font-size:11px">All prices are
                                                                shown in Kuwaiti Dinar and excludes
                                                                taxes (if applicable), shipping and
                                                                installation charges, unless expressly
                                                                stated otherwise in the
                                                                Agreement.</span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:25.2px">
                                                            &nbsp;</p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span style="font-size:11px">This email is a
                                                                Xcite advertisement. If you no longer
                                                                wish to receive our marketing emails, <a
                                                                    href="[unsubscribe_here]" target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">unsubscribe here</a>.
                                                                If you have difficulty with the
                                                                unsubscribe link, you may also send an
                                                                email to <a
                                                                    href="mailto:Xsupport@xcite.com?subject=Assistance Request"
                                                                    target="_blank" title="Xsupport@xcite.com"
                                                                    rel="noopener"
                                                                    style="text-decoration:underline;color:#414141">Xsupport@xcite.com</a>.
                                                                For more information, read our <a
                                                                    href="https://www.xcite.com/terms-and-conditions"
                                                                    target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">Terms &amp;
                                                                    Conditions</a> or call <a href="tel:009651803535"
                                                                    target="_blank" title="tel:009651803535"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">180-3535</a>.</span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:25.2px">
                                                            &nbsp;</p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span style="font-size:11px">Address: Sharq,
                                                                Shuhada St., Al Hamra Tower, Floor 70,
                                                                Kuwait.</span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:25.2px">
                                                            &nbsp;</p>
                                                        <p
                                                            style="margin:0;text-align:left;font-size:11px;mso-line-height-alt:19.8px">
                                                            <span style="font-size:11px">© 2024 X-cite
                                                                General Trading Co. SPC (C). All rights
                                                                reserved.&nbsp;</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>




    
    `;
    }
    else if (ftIndex === 1) {
        return `
<table class="row row-7" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;padding-bottom:10px;padding-top:15px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="text_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div style="font-family:sans-serif">
                                                    <div
                                                        style="font-family:Verdana,Geneva,sans-serif;font-size:12px;mso-line-height-alt:24px;color:#00355f;line-height:2">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align: center;mso-line-height-alt:28px">
                                                            <strong>
                                                                <span style="font-size:18px">أفضل
                                                                    الماركات</span>
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
    
<table class="row row-8" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[0]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[0]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[1]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[1]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[2]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[2]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-4" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[3]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[3]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table class="row row-9" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[4]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[4]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[5]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[5]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[6]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[6]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-4" width="25%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center" style="line-height:10px">
                                                    <div style="max-width:170px">
                                                        <a href="${topBrandsUrls[7]}"
                                                            target="_blank" style="outline:0" tabindex="-1">
                                                            <img src="${topBrandsLogos[7]}"
                                                                style="display:block;height:auto;border:0;width:100%"
                                                                width="170">
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table class="row row-10" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;padding-bottom:15px;padding-top:15px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="text_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div style="font-family:sans-serif">
                                                    <div
                                                        style="font-family:Verdana,Geneva,sans-serif;font-size:12px;mso-line-height-alt:24px;color:#00355f;line-height:2">
                                                        <p
                                                            style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:32px">
                                                            <span style="font-size:16px">
                                                                <a href="https://www.xcite.com/brand-stores?utm_source=email&amp;utm_medium=email&amp;utm_campaign=kw-crm-nl-nocampaign&amp;utm_content=manual"
                                                                    target="_blank"
                                                                    style="text-decoration:none;color:#00355f"
                                                                    rel="noopener">
                                                                    <span style="font-size:16px">
                                                                    &lt; اعرض الكل</span>
                                                                </a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table class="row row-12" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;border-radius:1px;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1" width="33.333333333333336%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-right:25px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h1
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:20px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:40px">
                                                    <span class="tinyMce-placeholder">تواصل معنا</span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="tel:009651803535" target="_blank" title="tel:009651803535"
                                                        style="text-decoration:none;color:#00355f"
                                                        rel="noopener">1803535</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-3" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="mailto:Xsupport@xcite.com" target="_blank"
                                                        title="Xsupport@xcite.com"
                                                        style="text-decoration:none;color:#00355f"
                                                        rel="noopener">Xsupport@xcite.com</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-2" width="33.333333333333336%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-right:25px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h1
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:20px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:40px">
                                                    <span class="tinyMce-placeholder">إدارة الحساب</span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <span class="tinyMce-placeholder"><a href="[unsubscribe_here]"
                                                            target="_blank" style="text-decoration:none;color:#00355f"
                                                            rel="noopener">إلغاء الإشتراك</a></span>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="column column-3" width="33.333333333333336%"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-right:25px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h1
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:20px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:40px">
                                                    <span class="tinyMce-placeholder">معلومات عامة</span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="https://www.xcite.com/ar-KW/help-and-services?utm_source=email&amp;utm_medium=email&amp;utm_content=ar-help-footer"
                                                        target="_blank" style="text-decoration:none;color:#00355f"
                                                        rel="noopener">مساعدة</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-3" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <a href="https://www.xcite.com/ar-kw/faq?utm_source=email&amp;utm_medium=email&amp;utm_content=ar-faq-footer"
                                                        target="_blank" style="text-decoration:none;color:#00355f"
                                                        rel="noopener">الأسئلة الشائعة</a>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="heading_block block-4" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="text-align:center">
                                                <h3
                                                    style="margin:0;color:#00355f;direction:ltr;font-family:Calibri,sans-serif;font-size:16px;font-weight:400;letter-spacing:normal;line-height:200%;text-align:right;margin-top:0;margin-bottom:0;mso-line-height-alt:32px">
                                                    <span class="tinyMce-placeholder">
                                                        <a href="https://www.xcite.com/ar-KW/stores?utm_source=email&amp;utm_medium=email&amp;utm_content=ar-stores-footer"
                                                            target="_blank" style="text-decoration:none;color:#00355f"
                                                            rel="noopener">معارضنا</a>
                                                    </span>
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table class="row row-13" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#00355f;color:#333;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:10px;padding-top:10px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad" style="padding-bottom:10px;text-align:center">
                                                <h1
                                                    style="margin:0;color:#fff;direction:ltr;font-family:Calibri,sans-serif;font-size:23px;font-weight:700;letter-spacing:normal;line-height:200%;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:46px">
                                                    <span class="tinyMce-placeholder">تابعنا على</span>
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="social_block block-2" width="100%" border="0" cellpadding="10"
                                    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                    <tbody>
                                        <tr>
                                            <td class="pad">
                                                <div class="alignment" align="center">
                                                    <table class="social-table" width="252px" border="0" cellpadding="0"
                                                        cellspacing="0" role="presentation"
                                                        style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block">
                                                        <tbody>
                                                            <tr>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.instagram.com/xcitealghanim/"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png"
                                                                            width="32" height="32" alt="Instagram"
                                                                            title="Instagram"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.facebook.com/XcitebyAlghanim"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/facebook.png"
                                                                            width="32" height="32" alt="Facebook"
                                                                            title="Facebook"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.snapchat.com/add/xcitealghanim"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/snapchat@2x.png"
                                                                            width="32" height="32" alt="Snapchat"
                                                                            title="Snapchat"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.youtube.com/channel/UChuWSVlf7Z6ds1hwNxh213w"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/youtube@2x.png"
                                                                            width="32" height="32" alt="YouTube"
                                                                            title="YouTube"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://www.tiktok.com/@xcitealghanim"
                                                                        target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/tiktok@2x.png"
                                                                            width="32" height="32" alt="TikTok"
                                                                            title="TikTok"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                                <td style="padding:0 5px 0 5px">
                                                                    <a href="https://wa.me/9651803535" target="_blank">
                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/whatsapp@2x.png"
                                                                            width="32" height="32" alt="WhatsApp"
                                                                            title="WhatsApp"
                                                                            style="display:block;height:auto;border:0">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<table class="row row-14" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace:0;mso-table-rspace:0;width: 100%;max-width: 600px;">
    <tbody>
        <tr>
            <td>
                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f5f5f5;border-radius:0;color:#000;margin:0 auto"
                    width="100%">
                    <tbody>
                        <tr>
                            <td class="column column-1"
                                style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                <table class="text_block block-1" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation"
                                    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                    <tbody>
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px">
                                                <div style="font-family:sans-serif">
                                                    <div
                                                        style="font-size:14px;font-family:Calibri,sans-serif;mso-line-height-alt:25.2px;color:#555;line-height:1.8">
                                                        <p dir="rtl"
                                                            style="margin:0;text-align:right;font-size:12px;mso-line-height-alt:21.6px">
                                                            <span
                                                                style="font-size:12px;display: block;margin-bottom: 15px;">خصوصيتك
                                                                مهمة بالنسبة لنا. لمزيد
                                                                من المعلومات حول كيفية حماية اكسايت لخصوصيتك والخطوات
                                                                التي يمكنك اتخاذها لحماية معلوماتك الشخصية والتنبيهات
                                                                حول مخاطر الخصوصية التي تواجه المستخدمين ، يرجى زيارة <a
                                                                    href="https://www.xcite.com/ar-KW/privacy-policy?utm_source=email&amp;utm_medium=email&amp;utm_content=ar-privacy-footer"
                                                                    target="_blank" rel="noopener"
                                                                    style="text-decoration:underline;color:#414141">سياسة
                                                                    الخصوصية</a> الخاصة بـ
                                                                اكسايت.</span>

                                                            <strong>
                                                                <span style="font-size:12px">توصيل
                                                                    اكسبرس:</span>
                                                            </strong>
                                                        </p>
                                                        <p dir="rtl"
                                                            style="margin:0;text-align:right;font-size:12px;mso-line-height-alt:21.6px">
                                                            <span
                                                                style="font-size:12px;display: block;margin-bottom: 15px;">*تعرف
                                                                أكثر على<a
                                                                    href="https://www.xcite.com/ar-KW/express-delivery?utm_source=email&amp;utm_medium=email&amp;utm_campaign=kw-crm-nl-nocampaign&amp;utm_content=ar-express-delivery-footer"
                                                                    target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener"> خدمة التوصيل
                                                                    السريع.</a>
                                                            </span>

                                                            <span
                                                                style="font-size:12px;display: block;margin-bottom: 15px;">الأسعار
                                                                والعروض المذكورة بهذه
                                                                النشرة الإلكترونية صالحة للتواريخ المذكورة فقط. راجع قسم
                                                                <a href="https://www.xcite.com/ar-KW/faq?utm_source=email&amp;utm_medium=email&amp;utm_content=ar-faq-footer"
                                                                    target="_blank" rel="noopener"
                                                                    style="text-decoration:underline;color:#414141">الأسئلة
                                                                    الشائعة</a> للحصول على مزيد من
                                                                التفاصيل.</span>

                                                            <strong>
                                                                <span style="font-size:12px">سياسة اكسايت للأسعار
                                                                    والشراء:</span>
                                                            </strong>

                                                            <span
                                                                style="font-size:12px;display: block;margin-bottom: 15px;">
                                                                يوافق العميل على أن يدفع سعر المنتج كاملاً حسبما هو محدد
                                                                في بيان المنتج في وقت استلام أمر الشراء في السوق
                                                                بالإضافة إلى أي رسوم تركيب وشحن أو رسوم أخرى قد تكون
                                                                سارية على أمر الشراء. ورغم أن إكسايت تسعى إلى أن تكون
                                                                أسعار المنتجات دقيقة في كافة الأوقات، قد تقع أخطاء. وفي
                                                                حالة اكتشاف خطأ في سعر المنتجات، سوف تقوم إكسايت، حسب
                                                                تقديرها وحدها، (1) بإبلاغ العميل في أقرب فرصة ممكنة
                                                                وتخييره بين إعادة تأكيد أمر شرائه بالسعر الصحيح أو إلغاء
                                                                أمر الشراء هذا أو (2) إلغاء أمر الشراء ومباشرة رد السعر
                                                                في حالة دفع السعر من قبل العميل بالفعل. يقر العميل أن
                                                                هذا هو الإجراء الوحيد الذي يحق للعميل الرجوع إليه في
                                                                حالة وجود خطأ في السعر.
                                                            </span>
                                                            <span
                                                                style="font-size:12px;display: block;margin-bottom: 15px;">ترد
                                                                كافة الأسعار
                                                                بالدينار الكويتي ولا تشمل الضرائب (إذا كان ذلك سارياً)
                                                                أو رسوم الشحن أو التركيب ما لم يتم النص على خلاف ذلك
                                                                صراحة في الاتفاقية.</span>

                                                            <span
                                                                style="font-size:12px;display: block;margin-bottom: 15px;">هذا
                                                                البريد الإلكتروني هو إعلان
                                                                من
                                                                اكسايت. إذا لم تعد ترغب في تلقي رسائل البريد الإلكتروني
                                                                التسويقية الخاصة بنا ، يمكنك إلغاء الاشتراك من <a
                                                                    href="[unsubscribe_here]" target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">هنا</a>. إذا كنت تواجه صعوبة في إلغاء
                                                                الاشتراك ، فيمكنك أيضًا إرسال بريد إلكتروني إلى <a
                                                                    href="mailto:Xsupport@xcite.com" target="_blank"
                                                                    title="Xsupport@xcite.com" rel="noopener"
                                                                    style="text-decoration:underline;color:#414141">Xsupport@xcite.com</a>.
                                                                لمزيد من المعلومات ، اقرأ <a
                                                                    href="https://www.xcite.com/ar-KW/terms-and-conditions?utm_source=email&amp;utm_medium=email&amp;utm_content=ar-tc-footer"
                                                                    target="_blank"
                                                                    style="text-decoration:underline;color:#414141"
                                                                    rel="noopener">الشروط والأحكام</a>
                                                                الخاصة بنا أو اتصل على <a href="tel:1803535"
                                                                    target="_blank" title="tel:1803535" rel="noopener"
                                                                    style="text-decoration:underline;color:#414141">1803535</a>.</span>

                                                            <span
                                                                style="font-size:12px;display: block;margin-bottom: 15px;">العنوان:
                                                                شرق، شارع الشهداء، برج
                                                                الحمرا، الدور 70، الكويت.</span>

                                                            <span style="font-size:12px">© ٢٠٢٤ شركة اكسايت للتجارة
                                                                العامة
                                                                ش.ش.و</span>
                                                        </p>
                                                        <p
                                                            style="margin:0;text-align:right;font-size:12px;mso-line-height-alt:25.2px">
                                                            &nbsp;</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
    `;
    }
}