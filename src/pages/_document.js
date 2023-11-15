import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="ALL"></meta>
        <script
          defer
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Learnbay",
              "url": "https://www.learnbay.co/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            } `,
          }}
        />
        <script
          defer
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Learnbay",
              "image": "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FALight%2Flearnbay-logo.png&w=256&q=100",
              "@id": "",
              "url": "https://www.learnbay.co/",
              "telephone": "(+91) 77956 87988",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1090 , 1st floor, 18th cross road HSR layout sector 3",
                "addressLocality": "Bangalore",
                "postalCode": "560102",
                "addressCountry": "IN"
              } ,
              "sameAs": [
                "https://www.facebook.com/learnbay/",
                "https://twitter.com/Learbay",
                "https://www.instagram.com/learnbayofficial/",
                "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                "https://www.linkedin.com/company/learnbay/"
              ] 
            } `,
          }}
        />
        <script
          defer
          async
          type="text/javascript"
          src="https://web-in21.mxradon.com/t/Tracker.js"
        />
        <script
          defer
          async
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `pidTracker('57020');`,
          }}
        />
        {/* Start VWO Async SmartCode */}
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        <script
          defer
          async
          type="text/javascript"
          id="vwoCode"
          dangerouslySetInnerHTML={{
            __html: `
window._vwo_code=window._vwo_code || (function() {
var account_id=711959,
version = 1.5,
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
is_spa=1,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
/* DO NOT EDIT BELOW THIS LINE */
f=false,w=window,d=document,vwoCodeEl=d.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},hide_element_style:function(){return'{'+hide_element_style+'}'},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.onerror=function(){window._vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([\d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;w.settings_timer=setTimeout(function(){window._vwo_code.finish()},settings_tolerance);var e=d.currentScript,t=d.createElement('style'),i=e&&!e.async?hide_element?hide_element+'{'+hide_element_style+'}':'':code.lA=1,n=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&t.setAttribute('nonce',vwoCodeEl.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));n.appendChild(t);var o=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(o?'&c='+o:''));return settings_timer}};w._vwo_settings_timer = code.init();return code;}());
`,
          }}
        />
        <script
          async
          defer
          type="text/javascript"
          src="https://crmplus.zoho.in/crm/javascript/zcga.js"
        />
        {/* End VWO Async SmartCode */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
