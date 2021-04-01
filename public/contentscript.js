const domain = new URL(window.location.href).hostname || null;

function increase(byValue) {
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
    if (document.hidden || !domain) return;
    increase(1);
}, 1000);
