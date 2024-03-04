
function fillDefaults() {
    // create fill defaults function
    var ftLinksLang = document.querySelector("#tempLang").value;

    // Top Brands Logos common between EN & AR
    document.querySelector("#FirstBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/Apple--brand-store-logo.jpg";
    document.querySelector("#SecondBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/samsung-brand-store-logo.jpg";
    document.querySelector("#ThirdBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/sony-brand-store-logo.jpg";
    document.querySelector("#FourthBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/lg-brand-store-logo.jpg";
    document.querySelector("#FifthBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/asus-brand-store-logo.jpg";
    document.querySelector("#SixthBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/philips-brand-store-logo.jpg";
    document.querySelector("#SeventhBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/microsoft-brand-store-logo.jpg";
    document.querySelector("#EighthBrandLogo").value = "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f7683d20-2948-460f-8f91-a13fe519b593/NMH2090YH815IN23UY5RN0DH/wansa-brand-store-logo.jpg";

    if (ftLinksLang === "en") {

        // Banner Title EN
        tempBnrTitle = document.querySelector("#tempBnrTitle").value = "Top Picks";

        // Header Texts EN
        document.querySelector("#FirstLinkText").value = "mobile";
        document.querySelector("#SecondLinkText").value = "Laptops";
        document.querySelector("#ThirdLinkText").value = "Appliances";
        document.querySelector("#FourthLinkText").value = "iTunes";

        // Header Links EN
        document.querySelector("#FirstLinkUrl").value = "https://www.xcite.com/mobile-phones-department";
        document.querySelector("#SecondLinkUrl").value = "https://www.xcite.com/computers-tablets-department";
        document.querySelector("#ThirdLinkUrl").value = "https://www.xcite.com/small-appliances-department";
        document.querySelector("#FourthLinkUrl").value = "https://www.xcite.com/gift-cards-department";

        // Top Brands URLs EN
        document.querySelector("#FirstBrandUrl").value = "https://www.xcite.com/apple";
        document.querySelector("#SecondBrandUrl").value = "https://www.xcite.com/samsung";
        document.querySelector("#ThirdBrandUrl").value = "https://www.xcite.com/sony";
        document.querySelector("#FourthBrandUrl").value = "https://www.xcite.com/lg-brand-store";
        document.querySelector("#FifthBrandUrl").value = "https://www.xcite.com/asus";
        document.querySelector("#SixthBrandUrl").value = "https://www.xcite.com/philips";
        document.querySelector("#SeventhBrandUrl").value = "https://www.xcite.com/microsoft";
        document.querySelector("#EighthBrandUrl").value = "https://www.xcite.com/wansa";

    }

    else if (ftLinksLang === "ar") {

        // Banner Title AR
        tempBnrTitle = document.querySelector("#tempBnrTitle").value = "أفضل المقتنيات";

        // Header Texts AR
        document.querySelector("#FirstLinkText").value = "الموبايلات";
        document.querySelector("#SecondLinkText").value = "اللابتوبات";
        document.querySelector("#ThirdLinkText").value = "أجهزة المنزل";
        document.querySelector("#FourthLinkText").value = "التلفزيونات";

        // Header Links AR
        document.querySelector("#FirstLinkUrl").value = "https://www.xcite.com/ar-KW/mobile-phones-department";
        document.querySelector("#SecondLinkUrl").value = "https://www.xcite.com/ar-KW/computers-tablets-department";
        document.querySelector("#ThirdLinkUrl").value = "https://www.xcite.com/ar-KW/large-appliances-department";
        document.querySelector("#FourthLinkUrl").value = "https://www.xcite.com/ar-KW/home-entertainment-department";

        // Top Brands URLs AR
        document.querySelector("#FirstBrandUrl").value = "https://www.xcite.com/ar-KW/apple";
        document.querySelector("#SecondBrandUrl").value = "https://www.xcite.com/ar-KW/samsung";
        document.querySelector("#ThirdBrandUrl").value = "https://www.xcite.com/ar-KW/sony";
        document.querySelector("#FourthBrandUrl").value = "https://www.xcite.com/ar-KW/lg-brand-store";
        document.querySelector("#FifthBrandUrl").value = "https://www.xcite.com/ar-KW/asus";
        document.querySelector("#SixthBrandUrl").value = "https://www.xcite.com/ar-KW/philips";
        document.querySelector("#SeventhBrandUrl").value = "https://www.xcite.com/ar-KW/microsoft";
        document.querySelector("#EighthBrandUrl").value = "https://www.xcite.com/ar-KW/wansa";
    }
}

function resetFields() {
    tempGen.disabled = false;
    tempGen.style.color = "#fff";

    document.querySelectorAll(".req-field input").forEach(function (input) {
        if (input.id !== "tempLang") {
            input.style.setProperty("border", "1px solid #ddd");
            input.value = ""
        }

    });

    URLsArray = [];
    productsArray = [];

    // Empty cliboard
    navigator.clipboard.writeText("");

    // empty final template container
    if (result) {
        result.value = "";
    }


    hideAllSections()

}

function resetTemplate() {

    // reset template field
    document.querySelector(".req-field input#tempType").style.setProperty("border", "1px solid #ddd");
    document.querySelector(".req-field input#tempType").value = ""

    // reset all fields except language 
    resetFields()
}

function resetAll() {

    // reset language field
    document.querySelector(".req-field input#tempLang").style.setProperty("border", "1px solid #ddd");
    document.querySelector(".req-field input#tempLang").value = ""

    // reset Template selection
    resetTemplate()

    // hide template options 
    jQuery("#Template").hide();

}

function hideAllSections() {
    jQuery("#tempBanner").hide();
    jQuery("#tempStrip").hide();
    jQuery("#TempForm1").hide();
    jQuery("#TempForm2").hide();
    jQuery("#productsPart2").hide();
    jQuery("#bannersPart1").hide();
    jQuery("#bannersPart2").hide();
    jQuery("#headerLinks").hide();
    jQuery("#topBrands").hide();
    jQuery("#Submit").hide();
    jQuery("#finalTemp").hide();
    if (jQuery("#BnrBrdctPart").css("display") === "block") {
        jQuery("#BnrBrdctPart").hide();
    }
}