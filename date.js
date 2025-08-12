function formatDate(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    let hh = String(date.getHours()).padStart(2, '0');
    let min = String(date.getMinutes()).padStart(2, '0');
    
    return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}

function showTimes() {
    let now = new Date();
    let thirtyMinsAgo = new Date(now.getTime() - (30 * 60 * 1000));
    return formatDate(thirtyMinsAgo);
}

// Insert into HTML
document.querySelector("#date").textContent = "BOOKING DATE: "+ showTimes();
