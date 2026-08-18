// Central Authentication Check
(function checkAuth() {
    const isLoggedIn = localStorage.getItem("userLoggedIn") === "true" || sessionStorage.getItem("userLoggedIn") === "true";
    
    // List of pages that require login
    const protectedPages = ["dashboard.html", "wallet.html", "trade.html", "kyc.html"];
    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage) && !isLoggedIn) {
        window.location.href = "login.html";
    }
})();

// Global Logout Function
function logoutUser() {
    localStorage.removeItem("userLoggedIn");
    sessionStorage.removeItem("userLoggedIn");
    window.location.href = "login.html";
}
