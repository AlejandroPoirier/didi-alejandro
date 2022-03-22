// codigo de tracking didi SEO y WEB
const insertBtnParams = () => {
  var referrer = document.referrer;
  var gaReferral = {
    source: "(direct)",
    medium: "(none)",
    campaign: "none",
  };
  var thisHostname = document.location.hostname;
  var thisPathname = document.location.pathname;
  var thisDomain = getDomain_(thisHostname);
  var referringDomain = getDomain_(document.referrer);

  // search is the parameters complete string without ?
  var search = window.location.search.slice(1);

  // if does not have utms or gclid should be organic traffic
  if (search.indexOf("utm") === -1 && search.indexOf("gclid") === -1) {
    //this function return if it is SEO, direct or referral
    var referringInfo = parseGaReferrer(referrer);

    // organic source and medium

    gaReferral.source = referringInfo.source;
    gaReferral.medium = referringInfo.medium;
    search =
      "utm_source=" +
      gaReferral.source +
      "&utm_medium=" +
      gaReferral.medium +
      "&utm_campaign=" +
      gaReferral.campaign;
  }

  var ga_id = getCookie("_gid");
  var gcl_au = getCookie("_gcl_au");

  function getCookie(name) {
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
      return decodeURIComponent(arr[2]);
    } else {
      return null;
    }
  }

  if (ga_id) {
    if (search.indexOf("ga_id=") === -1) {
      search = search + "&d_ga_id=" + ga_id;
    }
  }

  if (gcl_au) {
    if (search.indexOf("gcl_au=") === -1) {
      search = search + "&d_gcl_au=" + gcl_au;
    }
  }

  if (search.startsWith("&")) {
    search = search.slice(1);
  }

  if (search !== "") {
    document.querySelectorAll("a").forEach(function (c) {
      let url = c.getAttribute("href");
      if (url !== null && url.indexOf("#") > 0) {
        var arr = url.split("#");

        let preUrl = arr[0];
        let lastUrl = arr[1];

        if (preUrl.indexOf("?")) {
          preUrl = preUrl + "&" + search;
        } else {
          preUrl = preUrl + "?" + search;
        }
        url = preUrl + "#" + lastUrl;
      } else {
        if (url !== null && url.indexOf("?") > 0) {
          url = url + "&" + search;
        } else {
          url = url + "?" + search;
        }
      }

      if (c.id === "food_url_forward_encode") {
        let jumpPage =
          "https://www.didi-food.com/es-MX/store/self-onboarding/list" +
          "?" +
          search;
        let redirectUrl =
          "https://crm.didi-food.com/crm/selfEntry/passport/setCookie?jumpPage=" +
          window.encodeURIComponent(jumpPage);
        let passportUrl =
          "https://page.didiglobal.com/public-biz/pc-login/2.0.0/index.html?source=70001&appid=50002&role=13&country_id=484&lang=es-MX&redirectUrl=" +
          window.encodeURIComponent(redirectUrl);
        url = passportUrl;
      }
      // if it is a deeplink, get the long url version with correct parameters
      if (
        url.indexOf("ssa-rides-driver.onelink.me/mbwy/") > -1 ||
        url.indexOf("https://global-rides-passenger.onelink.me/xNlo/") > -1 ||
        url.indexOf("https://99.onelink.me/Mayr/") > -1 ||
        url.indexOf("onelink.me/IY6B/b1f23260") > -1 ||
        url.indexOf("onelink.me/5xQ3/") > -1 ||
        url.indexOf("onelink.me/ixFb/") > -1
      ) {
        url = getDeepLink(url, thisHostname);
      }

      c.setAttribute("href", url);
    });
  }

  // function to get domain

  function getDomain_(url) {
    if (!url) return;

    var a = document.createElement("a");
    a.href = url;

    try {
      return a.hostname.match(/[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/)[0];
    } catch (squelch) {}
  }

  // function for get correct organic medium and source

  function parseGaReferrer(referrer) {
    var values = {};
    // if referrer is "" is direct
    if (!referrer) {
      console.log("4");
      values.source = "(direct)";
      values.medium = "(none)";

      return values;
    }

    //if not is seo or web referral
    var searchEngines = {
      "yahoo.com": {
        p: "p",
        n: "yahoo",
      },
      "bing.com": {
        p: "q",
        n: "live",
      },
      "baidu.com": {
        p: "wd",
        n: "baidu",
      },
      "search.com": {
        p: "q",
        n: "search",
      },
      google: {
        p: "q",
        n: "google",
      },
    };
    var a = document.createElement("a");
    var searchEngine, termRegex, term;

    a.href = referrer;

    // Shim for the billion google search engines
    if (a.hostname.indexOf("google") > -1) {
      referringDomain = "google";
    }

    if (searchEngines[referringDomain]) {
      searchEngine = searchEngines[referringDomain];
      termRegex = new RegExp(searchEngine.p + "=.*?([^&#]*|$)", "gi");
      term = a.search.match(termRegex);

      values.source = searchEngine.n;
      values.medium = "organic";

      values.term = (term ? term[0].split("=")[1] : "") || "(not provided)";
    } else if (referringDomain !== thisDomain) {
      values.source = a.hostname;
      values.medium = "referral";
    }

    return values;
  }

  // @desc: function to create a deeplink long url with the correct channel text for download and channelId for H5
  // @return: return the one link url
  function getDeepLink(url, thisHostname) {
    //map the organic channels and countries to the correct parameter
    const channels = {
      "(none)": 14,
      referral: 18,
      organic: 19,
      email: 20,
    };

    const channelsText = {
      "(none)": "website_direct",
      referral: "website_referral",
      organic: "website_seo",
      email: "website_email",
    };

    const countriesLanguage = {
      cl: ["CL", "es-CL"],
      "99app": ["BR", "pt-BR"],
      brasil: ["BR", "pt-BR"],
      argentina: ["AR", "es-AR"],
      peru: ["PE", "es-PE"],
      mexico: ["MX", "es-MX"],
      ecuador: ["EC", "es-EC"],
      colombia: ["CO", "es-CO"],
      dominicana: ["DO", "es-DO"],
      costarica: ["CR", "es-CR"],
      panama: ["PA", "es-PA"],
      russia: ["RU", "ru-RU"],
      kazakhstan: ["KZ", "kk-KZ"],
      australia: ["AU", "en-AU"],
      newzealand: ["NZ", "en-NZ"],
      egypt: ["EG", "ar-EG"],
      za: ["ZA", "en-ZA"],
    };

    let start = url.indexOf("?");
    let finish = url.lastIndexOf("/");
    let search = url.substring(start);
    let oldUrl = url.substring(0, finish);
    let subdomain = thisPathname.substring(1, 3);

    // set correct parameters for onelink
    const urlParams = new URLSearchParams(search);
    let utmSource = urlParams.get("utm_source");
    let source = urlParams.get("source");
    let utmMedium = urlParams.get("utm_medium");
    let c = urlParams.get("utm_campaign");
    let campaign = urlParams.get("campaign");
    let term = urlParams.get("utm_term");
    let campaignId = urlParams.get("campaign_id");
    let adgroupId = urlParams.get("ad_group_id");
    let creativeId = urlParams.get("creative_id");
    let targetId = urlParams.get("target_id");
    let keyword = urlParams.get("keyword");
    let matchtype = urlParams.get("matchtype");
    let deviceModel = urlParams.get("devicemodel");
    let adPosition = urlParams.get("adposition");
    let placement = urlParams.get("placement");
    let channel = urlParams.get("channel");
    let country = urlParams.get("country");
    // joveo 99 app
    let device = urlParams.get("device");
    let af_c_id = urlParams.get("af_c_id");
    let af_adset = urlParams.get("af_adset");
    let af_adset_id = urlParams.get("af_adset_id");
    let af_ad = urlParams.get("af_ad");
    let af_ua = urlParams.get("af_ua");
    let af_ad_id = urlParams.get("af_ad_id");
    let af_ad_type = urlParams.get("af_ad_type");
    let af_siteid = urlParams.get("af_siteid");
    let af_click_lookback = urlParams.get("af_click_lookback");
    let advertising_id = urlParams.get("advertising_id");
    let track_id = urlParams.get("track_id");
    let trackid = urlParams.get("trackid");
    let af_ip = urlParams.get("af_ip");
    let af_lang = urlParams.get("af_lang");
    let android_id = urlParams.get("android_id");
    let joveoID = urlParams.get("joveoID");
    let DIDI_CAMPAIGN_ID = urlParams.get("DIDI_CAMPAIGN_ID");

    let channelId, pid;
    if (channel) {
      channelId = channel;
      if (utmSource) {
        pid = utmSource ? utmSource : "website_direct";
      } else {
        pid = source ? source : "website_direct";
      }
    } else {
      channelId = channels[utmMedium] ? channels[utmMedium] : 14;
      pid = channelsText[utmMedium]
        ? channelsText[utmMedium]
        : "website_direct";
    }
    let countryLang = countriesLanguage[subdomain];

    let newSearch = `?pid=${pid}&c=${c}&af_r=https%3A%2F%2Fpage.didiglobal.com%2Fdriver-page%2Fregister%2Findex.html%3Flocation_country%3D${countryLang[0]}%26country%3D${country}%26lang%3D${countryLang[1]}%26channel%3D${channelId}&af_adset=driver-page&af_ad=hero&campaign=${campaign}&utm_medium=${utmMedium}&utm_source=${utmSource}&utm_campaign=${c}&utm_term=${term}&source=${source}&campaign_id=${campaignId}&ad_group_id=${adgroupId}&creative_id=${creativeId}&target_id=${targetId}&keyword=${keyword}&matchtype=${matchtype}&devicemodel=${deviceModel}&adposition=${adPosition}&Placement=${placement}`;

    // jovep 99 app
    if (device) {
      newSearch = `?af_c_id=${af_c_id}&af_adset=${af_adset}&af_adset_id=${af_adset_id}&af_ad=${af_ad}&af_ad_id=${af_ad_id}&af_ad_type=${af_ad_type}&af_siteid=${af_siteid}&pid=jampp_int&c=${c}&af_click_lookback=${af_click_lookback}&trackid=${trackid}&advertising_id=${advertising_id}&track_id=${track_id}&af_ip=${af_ip}&af_lang=${af_lang}&redirect=true&af_ua=${af_ua}&android_id=${android_id}&joveoID=${joveoID}&DIDI_CAMPAIGN_ID=${DIDI_CAMPAIGN_ID}`;
      console.log("CABRES:", oldUrl + newSearch);

      return oldUrl + newSearch;
    }
    if (
      url.indexOf("me/mbwy/") > -1 ||
      url.indexOf("me/o97G/") > -1 ||
      url.indexOf("me/ixFb/") > -1 ||
      url.indexOf("me/IY6B/") > -1 ||
      url.indexOf("me/5xQ3/") > -1 ||
      url.indexOf("page.didiglobal.com/driver-page/register") > -1
    ) {
      return oldUrl + newSearch;
    } else {
      return (
        oldUrl +
        `?pid=${pid}&c=${c}&af_channel=${utmSource}&af_c_id=${campaignId}&af_adset_id=${adgroupId}&af_ad_id=${creativeId}&af_keywords=${keyword}&af_siteid=${adPosition}`
      );
    }
  }
};

module.exports = { insertBtnParams };