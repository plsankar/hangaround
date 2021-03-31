const domain = new URL(window.location.href).hostname || '';

function increase(byValue) {
    console.log('increase');
    const xchrome = {
        storage: {
            local: {
                set: () => {},
                get: () => {},
            },
        },
    };
    if (!xchrome || !xchrome.storage || !xchrome.storage.local) return;
    console.log('Local available!');
    // return;
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
    console.log('hidden', document.hidden);
    if (document.hidden) return;
    increase(1);
}, 1000);
