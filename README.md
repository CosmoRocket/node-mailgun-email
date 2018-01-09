# Mailgun Email Client
A simple mailgun email client for Node.js

## Routes
### POST /email
```javascript
Content-Type: application/json

{
  "recipients" : ["user@gmail.com"],
  "subject" : "Hello",
  "text" : "Testing some Mailgun awesomness!",
  "html" : "<h1>Testing some Mailgun awesomness!</h1>"
}
```

### POST /receiveEmail
- Setup the route in mailgun
1. Go to https://app.mailgun.com/app/routes
2. Create Route
3. Expression Type should be `Catch All`
4. Check `Store and notify`
5. Indicate the /receiveEmail public url under `Store and notify` (e.g. https://node-mailgun-email-psnecqnxqx.now.sh/receiveEmail)
6. Indicate a Description (e.g. Receive Email)

- When the user replies to the e-mail, the following output will be produced by mailgun
```javascript
{ timestamp: '1515458821',
  token: '2b90a03befc0b98ae2b641b0080850cada918a2d2f670e0141',
  signature: 'f4b6f4d72b18a11605914d770900f871179065abf23fc8d31007b63948828ef6',
  domain: 'sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org',
  From: 'User <user@gmail.com>',
  'X-Envelope-From': '<user@gmail.com>',
  'X-Google-Dkim-Signature': 'v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20161025;        h=x-gm-message-state:mime-version:in-reply-to:references:from:date         :message-id:subject:to;        bh=1TUAVcecT7Z/wGVxa/SmMUsJdS0qXh8MMCceqDolMOo=;        b=sSEwZ2ckhXuNR+McGlGW0ELPT07eHsMTbZ9Q/olhcOO9/9kYk5g4Rx+6+xV3gG6WsR         R1ZcEoxkkBCO56/k7e8TjL3zzozL4Nkr8nqEAAjrQovy8U/fvJiJ3Sly5Y90GMQEUqli         AwxvQy1a7at/hDyw7SmLVATdMGMGQkQhEKqkX9QZcLaXfxH5w/jzdNY8AXs3mjq1RTgL         Pt2h6VQZNWGF9ylh9+T1M7Xk9K4PK/lhTAs7aeUSUCHQXQtlIh5oc4WOtweznIi3Nbvn         1DK35ikjWTErvwkNzwzc+cvjvHaHtawnFsJrG9nw+cMxlYAAuaQ6R8Aw7eobbtTG5T00         PClA==',
  To: 'Cosmo Rocket Team <mailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>',
  'Dkim-Signature': 'v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20161025;        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;        bh=1TUAVcecT7Z/wGVxa/SmMUsJdS0qXh8MMCceqDolMOo=;        b=JD6VRtV0KJjgqrCQobwI9agYA4K7YboX33d/GTK8QtLBDwUdAV/DBEpc3+XshLArBw         e+iNHsqYQfGGz7/Qkgi8Py3QPHJiVu4osh3Dv41G/8JvGqk8e+eDKzf0Yq75i2ks0z+r         Im1GCaZngFQzrzwKtGuy1opURH7ePe9FEXNOk+2F81fdlPX4QLfwbQrAWdJmwLJ7N/4A         8ReR4/xi+rzFapJDoYzdrVXKyyocfE51SIODJ8IlTHM3twK1dN3A/BzbtJ+u72NWyP0m         68M4XgpchMbBDgFN0T75xv8PUXC+FooB3lVo4BpwhpPfam3XxAGI3xvFdq8LBFxZlQEC         CYAQ==',
  subject: 'Re: Hello',
  from: 'User <user@gmail.com>',
  'X-Received': 'by 10.237.63.221 with SMTP id w29mr18080290qth.251.1515458819541; Mon, 08 Jan 2018 16:46:59 -0800 (PST)',
  'In-Reply-To': '<20180109004123.1.03D16C3F84C49039@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>',
  Date: 'Tue, 9 Jan 2018 11:46:39 +1100',
  'Message-Id': '<CADRhvfiHdNhpLSJBpABmP_x4tEnApUpAi8sL9wZFa_zG7Af1Ng@mail.gmail.com>',
  'Mime-Version': '1.0',
  Received: 
   [ 'from mail-qt0-f178.google.com (mail-qt0-f178.google.com [209.85.216.178]) by mxa.mailgun.org with ESMTP id 5a541104.7f68f0359070-smtp-in-n02; Tue, 09 Jan 2018 00:47:00 -0000 (UTC)',
     'by mail-qt0-f178.google.com with SMTP id u10so15928114qtg.2        for <mailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>; Mon, 08 Jan 2018 16:47:00 -0800 (PST)',
     'by 10.140.19.73 with HTTP; Mon, 8 Jan 2018 16:46:39 -0800 (PST)' ],
  'message-url': 'https://sw.api.mailgun.net/v3/domains/sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org/messages/eyJwIjpmYWxzZSwiayI6ImFiMTA4ZmVlLTZmOTctNDUzNS04ZDJjLTYzZGZlMWY1NjE2OSIsInMiOiI1MjViMDA2MmNlIiwiYyI6InRhbmtiIn0=',
  recipient: 'mailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org',
  sender: 'user@gmail.com',
  'X-Mailgun-Incoming': 'Yes',
  'X-Gm-Message-State': 'AKwxyteYIwyiGI0bpHUaYKb/mCBm3paDAqCjiyl88CaHeacI05VeUYSV\t0plO17SnA6V7tElg02pIMQRFG8c+qbe+SqDsQrrYYA==',
  'message-headers': '[["X-Mailgun-Incoming", "Yes"], ["X-Envelope-From", "<user@gmail.com>"], ["Received", "from mail-qt0-f178.google.com (mail-qt0-f178.google.com [209.85.216.178]) by mxa.mailgun.org with ESMTP id 5a541104.7f68f0359070-smtp-in-n02; Tue, 09 Jan 2018 00:47:00 -0000 (UTC)"], ["Received", "by mail-qt0-f178.google.com with SMTP id u10so15928114qtg.2        for <mailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>; Mon, 08 Jan 2018 16:47:00 -0800 (PST)"], ["Dkim-Signature", "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20161025;        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;        bh=1TUAVcecT7Z/wGVxa/SmMUsJdS0qXh8MMCceqDolMOo=;        b=JD6VRtV0KJjgqrCQobwI9agYA4K7YboX33d/GTK8QtLBDwUdAV/DBEpc3+XshLArBw         e+iNHsqYQfGGz7/Qkgi8Py3QPHJiVu4osh3Dv41G/8JvGqk8e+eDKzf0Yq75i2ks0z+r         Im1GCaZngFQzrzwKtGuy1opURH7ePe9FEXNOk+2F81fdlPX4QLfwbQrAWdJmwLJ7N/4A         8ReR4/xi+rzFapJDoYzdrVXKyyocfE51SIODJ8IlTHM3twK1dN3A/BzbtJ+u72NWyP0m         68M4XgpchMbBDgFN0T75xv8PUXC+FooB3lVo4BpwhpPfam3XxAGI3xvFdq8LBFxZlQEC         CYAQ=="], ["X-Google-Dkim-Signature", "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20161025;        h=x-gm-message-state:mime-version:in-reply-to:references:from:date         :message-id:subject:to;        bh=1TUAVcecT7Z/wGVxa/SmMUsJdS0qXh8MMCceqDolMOo=;        b=sSEwZ2ckhXuNR+McGlGW0ELPT07eHsMTbZ9Q/olhcOO9/9kYk5g4Rx+6+xV3gG6WsR         R1ZcEoxkkBCO56/k7e8TjL3zzozL4Nkr8nqEAAjrQovy8U/fvJiJ3Sly5Y90GMQEUqli         AwxvQy1a7at/hDyw7SmLVATdMGMGQkQhEKqkX9QZcLaXfxH5w/jzdNY8AXs3mjq1RTgL         Pt2h6VQZNWGF9ylh9+T1M7Xk9K4PK/lhTAs7aeUSUCHQXQtlIh5oc4WOtweznIi3Nbvn         1DK35ikjWTErvwkNzwzc+cvjvHaHtawnFsJrG9nw+cMxlYAAuaQ6R8Aw7eobbtTG5T00         PClA=="], ["X-Gm-Message-State", "AKwxyteYIwyiGI0bpHUaYKb/mCBm3paDAqCjiyl88CaHeacI05VeUYSV\\t0plO17SnA6V7tElg02pIMQRFG8c+qbe+SqDsQrrYYA=="], ["X-Google-Smtp-Source", "ACJfBotQ/Erd6ymfEvI9yjzhzzzHGzJE5XLjCaHiBIW94SA6662Jo4gzhufP3DMex2klEoHJcKIb9JSAt1rCKvshl0Y="], ["X-Received", "by 10.237.63.221 with SMTP id w29mr18080290qth.251.1515458819541; Mon, 08 Jan 2018 16:46:59 -0800 (PST)"], ["Mime-Version", "1.0"], ["Received", "by 10.140.19.73 with HTTP; Mon, 8 Jan 2018 16:46:39 -0800 (PST)"], ["In-Reply-To", "<20180109004123.1.03D16C3F84C49039@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>"], ["References", "<20180109004123.1.03D16C3F84C49039@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>"], ["From", "User <user@gmail.com>"], ["Date", "Tue, 9 Jan 2018 11:46:39 +1100"], ["Message-Id", "<CADRhvfiHdNhpLSJBpABmP_x4tEnApUpAi8sL9wZFa_zG7Af1Ng@mail.gmail.com>"], ["Subject", "Re: Hello"], ["To", "Cosmo Rocket Team <mailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>"], ["Content-Type", "multipart/alternative; boundary=\\"001a11475db89c4e5105624d406f\\""]]',
  References: '<20180109004123.1.03D16C3F84C49039@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org>',
  'Content-Type': 'multipart/alternative; boundary="001a11475db89c4e5105624d406f"',
  'X-Google-Smtp-Source': 'ACJfBotQ/Erd6ymfEvI9yjzhzzzHGzJE5XLjCaHiBIW94SA6662Jo4gzhufP3DMex2klEoHJcKIb9JSAt1rCKvshl0Y=',
  Subject: 'Re: Hello',
  'body-plain': 'OK3\r\n\r\nOn Tue, Jan 9, 2018 at 11:41 AM, Cosmo Rocket Team <\r\nmailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org> wrote:\r\n\r\n> Testing some Mailgun awesomness!\r\n',
  'body-html': '<div dir="ltr">OK3</div><div class="gmail_extra"><br><div class="gmail_quote">On Tue, Jan 9, 2018 at 11:41 AM, Cosmo Rocket Team <span dir="ltr">&lt;<a href="mailto:mailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org" target="_blank">mailgun@sandboxe9ce5eb4fe3d49c98a5b706e4a32754f.mailgun.org</a>&gt;</span> wrote:<br><blockquote class="gmail_quote" style="margin:0 0 0 .8ex;border-left:1px #ccc solid;padding-left:1ex"><h1>Testing some Mailgun awesomness!</h1></blockquote></div><br></div>\r\n',
  'stripped-html': '<html><head></head><body><div dir="ltr">OK3</div><div class="gmail_extra"><br><br></div>\n</body></html>',
  'stripped-text': 'OK3',
  'stripped-signature': '' }
```

## References
### Javascript SDK for Mailgun
- https://github.com/mailgun/mailgun-js#create