(() => {

  document.addEventListener("contextmenu", (e) => e.preventDefault());


  document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();

    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(key)) ||
      (e.ctrlKey && key === "U")
    ) {
      e.preventDefault();
      alert("Acesso ao DevTools bloqueado.");
      window.location.href = "about:blank";
    }
  });

  setInterval(() => {
    const diffW = window.outerWidth - window.innerWidth;
    const diffH = window.outerHeight - window.innerHeight;

    if (diffW > 160 || diffH > 120) {
      document.body.innerHTML = "<h1>DevTools detectado</h1>";
    }
  }, 1000);
})();
