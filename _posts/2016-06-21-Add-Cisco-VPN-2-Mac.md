---
layout: default
title: Add Cisco VPN 2 Mac
permalink: /MacVPN/
---
{::options parse_block_html="true" /}
<div class="content-wrapper">
  <div class="content">
# How to Add Cisco VPN 2 Mac
{: #title}

## Open up your cisco PCF file

Find your .pcf file for the VPN connection you would like to connect to and open it up it an editor.

![Open PCF File](/assets/img/OpenPCF.gif)

You will need a 3 of these entries when you setup your connection.

1. Host
2. GroupName
3. enc_GroupPwd

Before we Setup the connection you will need an unencrypted version of your enc_GroupPwd.

## Getting the unencrypted version of enc_GroupPwd

Ask the administrator that setup the VPN connection and created the PCF file. There are tools to decrypt it online, but I wouldn't recommend you put your passwords on the internet.

## Setting up the VPN connection

Go up to wireless settings in the Menu Bar and choose Network Preferences.

![Wirless Network Preferences](/assets/img/NetPref.png)

Add a new VPN connection by clicking the + sign in the bottom left corner. Then setup the new settings.

1. Interface: VPN
2. VPN Type: Cisco IPSec
3. Service Name: (a name for the new connection)

![Add New VPN Connection](/assets/img/NewVPN.png)

Take your settings from your pcf file and fill out the settings for the VPN

![Setup VPN Settings](/assets/img/VPNSettings.png){: .smallImg}


Your account name is your username at the site. Leave the password blank; otherwise it will not connect. You will be prompted for password when you connect. To add group name and shared secret click authentication settings button. Once everything is filled out you can click apply.

For easy access I always check show VPN status in menu bar checkbox in the settings. This will allow you to go up to the menu bar to connect to your VPN's.

![VPN Status Menu Bar](/assets/img/VPNStatus.png)

Once you choose your VPN from the menu bar authenticate with your username and password and now you have VPN access to the site.

![Authenticate](/assets/img/AuthVPN.png)

  </div>
</div>
