---
layout: default
title: RDP to Windows From Mac
permalink: /MacRdp/
---
{::options parse_block_html="true" /}
<div class="content-wrapper">
  <div class="content">
# RDP to Windows From Mac
{: #title}

## Download CoRD

Download CoRD, a RDP client for Mac. [CoRD Site](http://cord.sourceforge.net/)

## Move the CoRD application into your application folder

Your download will be a zip file. Open the zip file and move the CoRD application into you application folder.

![Add CoRD to Application Folder](/assets/img/CpCoRD.png)

## Setup CoRD

Launch your CoRD application from the Application folder on your computer. Then Create a new saved server by clicking the + symbol on the bottom left. Fill out your client settings needed to RDP to the client.

![Setup RDP](/assets/img/SetupRDP.png)

You should now be able to click the Saved Server name an launch the connection.

If your having issues with it not connecting to certain newer servers, CoRD maybe using an older version of RDP protocol, so windows is not letting it connect on the older protocol. You have a couple of options.

1. On the Server Allow older RDP Protocols.
2. Try a different RDP client on Mac. I use xfreeRDP, but it is more difficult to setup. Let me know if you need help with this.

  </div>
</div>
