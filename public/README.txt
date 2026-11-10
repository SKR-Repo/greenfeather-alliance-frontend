Green Feather Alliance - favicon pack
Copy every file in this folder into your site's /public directory (site root), overwriting the old favicon.svg.
Then put this in <head> of index.html:

<link rel="icon" href="/favicon.ico" sizes="32x32" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#ffffff" />
