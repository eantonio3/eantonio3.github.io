$(document).ready(function() {
    // Header nav
    $.getJSON("components/menu.json", function(data){
        let header = $("<header>");
        let nav = $("<nav>");
        let img = $("<img src='images/logo.png' alt='Josie's Styles logo' height='150'>")

        nav.append(img);
        $.each(data.nav, function(_index, item) {
            let a = $("<a>").attr("href", item.url).text(item.name);
            nav.append(a);
        });
        header.append(nav);
        $("#header").replaceWith(header);
    });

    // Footer nav
    $.getJSON("components/menu.json", function(data){
        let footer = $("<footer>");
        let designedByLink = $("<a>").attr("href", data.designedBy.url).text(data.designedBy.name);
        let certificationsAndYear = $("<p>");

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
        footer.append(certificationsAndYear, validationLinks);
        $("#footer").replaceWith(footer);
    });
});

