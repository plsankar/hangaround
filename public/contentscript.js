const domain = new URL(window.location.href).hostname;

function timePassed(byValue) {
    if (!chrome || !chrome.storage || !chrome.storage.local) return;
    chrome.storage.local.get(['sites'], (result) => {
        const sites = result.sites || [];
        let newSites = [];
        const index = sites.findIndex((v) => v.domain == domain);
        if (index == -1) {
            newSites = [...sites, { domain, duration: byValue }];
        } else {
            newSites = sites.map((item, i) => (index === i ? { ...item, duration: item.duration + byValue } : item));
        }
        chrome.storage.local.set({ sites: newSites });
    });
}

setInterval(() => {
    if (document.hidden) return; // Dont track the time if the page is not showing
    timePassed(1);
}, 1000);
