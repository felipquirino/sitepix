let lastScrollTop = 0;
      const header = document.getElementById("mainHeader");

      window.addEventListener("scroll", () => {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.classList.add("header-hidden");
        } else {
          header.classList.remove("header-hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      });