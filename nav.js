// NAVBAR JAVASCRIPT
//   <!-- ===================== JAVASCRIPT ===================== -->

    const menuBtn = document.getElementById("menuBtn123");
    const closeBtn = document.getElementById("closeBtn123");
    const mobileNav = document.getElementById("mobileNav123");

    menuBtn.addEventListener("click", () => {
      mobileNav.dataset.open = "true";
      mobileNav.setAttribute("aria-hidden", "false");
    });

    closeBtn.addEventListener("click", () => {
      mobileNav.dataset.open = "false";
      mobileNav.setAttribute("aria-hidden", "true");
    });
