$(document).ready(function() {
    // Header nav
    $.getJSON("components/menu.json", function(data){
        let header = $("<header>");
        let h1 = $("<h1>").html("Efren Antonio's Ecstatic Alligator &#128570; ITIS 3135");
        let h4 = $("<h4>").html("<em>Cat-Approved Treats and Toys!</em>");
        let nav1 = $("<nav>");
        $.each(data.nav1, function(index, item) {
            let a = $("<a>").attr("href", item.url).text(item.name);
            nav1.append(a);
            if(index < data.nav1.length - 1) {
                nav1.append("&#128570;");
            }
        });
        let nav2 = $("<nav>");
        $.each(data.nav2, function(index, item) {
            let a = $("<a>").attr("href", item.url).text(item.name);
            nav2.append(a);
            if(index < data.nav2.length - 1) {
                nav2.append("&#128570;");
            }
        });
        let button = $("<button>").attr({"type": "button", "class": "no-css", "id": "toggle"}).text("Toggle CSS");
        header.append(h1, h4, nav1, nav2, button);
        $("#header").replaceWith(header);
    });

    // Footer nav
    $.getJSON("components/menu.json", function(data){
        let footer = $("<footer>");
        let footerNav = $("<nav>");
        let designedByLink = $("<a>").attr("href", data.designedBy.url).text(data.designedBy.name);
        let certificationsAndYear = $("<p>");

        $.each(data.footernav, function(index, item) {
            let a = $("<a>").attr("href", item.url).text(item.name);
            footerNav.append(a);
            if(index < data.footernav.length - 1) {
                footerNav.append("&#128570;");
            }
        });

        let certifications = "";
        $.each(data.certifications, function(index, item) {
            certifications += "<a href='" + item.url + "'>" + item.name + "</a>";
            if(index < data.certifications.length - 1) {
                certifications += ", ";
            }
        });
        certificationsAndYear.append("Designed by ").append(designedByLink).append(", certified in ").append(certifications).append(", &copy;" + data.year);

        let validationLinks = $("<div>").attr("id", "validation-links");
        validationLinks.append(
            $("<a>").attr("href", "https://validator.w3.org/check?uri=" + location.href).append(
                $("<img>").attr("src", "https://eantonio3.github.io/itis3135/images/button_validation_html5.png").attr("alt", "Valid HTML!").css({"border": "0", "width": "88px", "height": "31px"})
            ),
            $("<a>").attr("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href).append(
                $("<img>").attr("src", "https://jigsaw.w3.org/css-validator/images/vcss").attr("alt", "Valid CSS!").css({"border": "0", "width": "88px", "height": "31px"})
            ),
            $("<a>").attr("href", "https://wave.webaim.org/report#/" + location.href).append(
                $("<img>").attr("src", "https://eantonio3.github.io/itis3135/images/button_validation_wcag.png").attr("alt", "Valid Disabiliy/Accessibility Design!").css({"border": "0", "width": "88px", "height": "31px"})
            )
        );

        footer.append(footerNav, certificationsAndYear, validationLinks);
        $("#footer").replaceWith(footer);
    });
});

