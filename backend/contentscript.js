let focused = true;
window.onfocus = () => (focused = true);
window.onblur = () => (focused = false);

const domain = new URL(window.location.href).hostname || '';

// chrome.storage.onChanged.addListener(function (changes, namespace) {
//     return;
//     for (var key in changes) {
//         var storageChange = changes[key];
//         console.log(
//             'Storage key "%s" in namespace "%s" changed. ' + 'Old value was "%s", new value is "%s".',
//             key,
//             namespace,
//             JSON.stringify(storageChange.oldValue),
//             JSON.stringify(storageChange.newValue)
//         );
//     }
// });

const increase = (byValue) => {
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
};

setInterval(() => {
    if (!focused) return;
    increase(1);
}, 5000);
